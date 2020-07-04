import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { getGameState } from './PersistentGameState.js';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Win = styled.div`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${props => props.mostRecent ? 'green' : 'black' }
`;

const PlayAgainButton = styled.button`
  margin-top: 2rem;
`;

const SuccessPage = props => {
  const history = useHistory();

  const gameState = getGameState();
  const wins = gameState.topTenWins !== undefined ? gameState.topTenWins : [];
  const mostRecentTime = wins
    .slice()
    .sort((a, b) => b.date - a.date)
    [0]?.time;

  return (
    <Wrapper>
      <h1>Great Job!</h1>
      {
        wins.map((value, index) => {
          return (
            <Win
              key={index}
              mostRecent={value.time === mostRecentTime}
            >
              { value.time / 1000 } seconds with a { value.character }!
            </Win>
          );
        })
      }
      <PlayAgainButton onClick={ e => history.push('/') }>
        Play again?
      </PlayAgainButton>
    </Wrapper>
  );
};

export default SuccessPage;
