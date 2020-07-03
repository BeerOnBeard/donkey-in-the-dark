import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Donkey from './characters/Donkey.js';
import Dinosaur from './characters/Dinosaur.js';
import Duck from './characters/Duck.js';
import characterNames from './characters/names.js';

const undefinedCharacterText = '??????';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 3rem;
`;

const ClickableDonkey = styled(Donkey)`
  cursor: pointer;
`;

const ClickableDinosaur = styled(Dinosaur)`
  cursor: pointer;
`;

const ClickableDuck = styled(Duck)`
  cursor: pointer;
`;

const getCharacterProps = (characterName, selectedCharacter, setCharacter, history) => {
  const unselectedColor = 'black',
        selectedColor = 'green';

  return {
    characterWidth: '12rem',
    characterHeight: '12rem',
    characterColor() { return selectedCharacter === characterName ? selectedColor : unselectedColor; },
    onMouseOver(event) { setCharacter(characterName); },
    onMouseLeave(event) { setCharacter(undefinedCharacterText); },
    onClick(event) { history.push(`/game/${characterName}`); }
  };
};

const StartPage = props => {
  const [character, setCharacter] = useState(undefined);
  const history = useHistory();

  const statefulGetCharacterProps = (characterName) => {
    return getCharacterProps(characterName, character, setCharacter, history);
  };

  return (
    <Wrapper>
      <Title>{ character === undefined ? undefinedCharacterText : character } in the Dark</Title>
      <div>
        <ClickableDonkey
          {...statefulGetCharacterProps(characterNames.donkey)}
        />
        <ClickableDinosaur
          {...statefulGetCharacterProps(characterNames.dinosaur)}
        />
        <ClickableDuck
          {...statefulGetCharacterProps(characterNames.duck)}
        />

      </div>
    </Wrapper>
  );
}

export default StartPage;
