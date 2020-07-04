import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Donkey from './characters/Donkey.js';
import Dinosaur from './characters/Dinosaur.js';
import Duck from './characters/Duck.js';
import characterNames from './characters/names.js';
import { getGameState, setGameState } from './PersistentGameState.js';

const Wrapper = styled.div.attrs(props => {
  const backgroundGradient = `radial-gradient(
    ${props.flashlightWidth} ${props.flashlightHeight} at ${props.cursorX} ${props.cursorY},
    rgba(0,0,0,0) 0%,
    rgba(0,0,0,0.5) 80%,
    rgba(0,0,0,1) 100%
  )`;

  return {
    style: {
      background: backgroundGradient
    }
  };
})`
  width: 100%;
  height: 100%;
  cursor: crosshair;
`;

const DisplayCharacter = props => {
  if (props.name === characterNames.dinosaur) {
    return <Dinosaur {...props} />;
  }

  if (props.name === characterNames.duck) {
    return <Duck {...props} />;
  }

  return <Donkey {...props} />;
};

const AbsolutelyPositionedDisplayCharacter = styled(DisplayCharacter)`
  position: absolute;
  top: ${props => props.y}px;
  left: ${props => props.x}px;
`;

const GamePage = props => {
  const characterWidth = 80;
  const characterHeight = 80;
  const { character } = useParams();
  const history = useHistory();

  const [ cursor, setCursor ] = useState({ x: '-1000px', y: '-1000px' });
  const [ characterLocation ] = useState({
    x: Math.floor(Math.random() * (window.innerWidth - characterWidth)),
    y: Math.floor(Math.random() * (window.innerHeight - characterHeight))
  });

  const [ startTime ] = useState(Date.now());

  return (
    <Wrapper
      flashlightWidth="100px"
      flashlightHeight="100px"
      cursorX={cursor.x}
      cursorY={cursor.y}
      onMouseMove={event => setCursor({ x: event.pageX + 'px', y: event.pageY + 'px' })}
    >
      <AbsolutelyPositionedDisplayCharacter
        name={character}
        characterWidth={characterWidth + 'px'}
        characterHeight={characterHeight + 'px'}
        x={characterLocation.x}
        y={characterLocation.y}
        onClick={ e => {
          const time = Date.now() - startTime;
          const currentState = getGameState();
          const topTenWins = currentState.topTenWins ?? [];
          const updatedTopTenWins = topTenWins
            .concat([ { character, time, date: Date.now() } ])
            .sort((a, b) => a.time - b.time)
            .slice(0, 10);
          
          setGameState({
            ...currentState,
            topTenWins: updatedTopTenWins
          });
          
          history.push('/success');
        }}
      />
    </Wrapper>
  )
};
;

export default GamePage;
