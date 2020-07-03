import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SuccessPage = props => {
  const history = useHistory();

  return (
    <Wrapper>
      <h1>Great Job!</h1>
      <button onClick={ e => history.push('/') }>
        Play again?
      </button>
    </Wrapper>
  );
};

export default SuccessPage;
