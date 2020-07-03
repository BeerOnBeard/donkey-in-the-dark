import styled from 'styled-components';

const Character = styled.svg`
  width: ${props => props.characterWidth};
  height: ${props => props.characterHeight};
  fill: ${props => props.characterColor};
`;

export default Character;
