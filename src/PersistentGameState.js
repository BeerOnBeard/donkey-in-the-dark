const keyName = 'dind-state';
const currentStateString = localStorage.getItem(keyName);
let currentState = currentStateString ? JSON.parse(currentStateString) : {};

const getGameState = () => {
  return currentState;
};

const setGameState = state => {
  currentState = state;
  const stateString = JSON.stringify(state);
  localStorage.setItem(keyName, stateString);
};

export { getGameState, setGameState };
