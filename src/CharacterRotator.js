/* Handles highlighting character on the start screen */
const characterClassName = 'character-chooser__character',
      selectedCharacterClassName = 'character-chooser__character--selected',
      characterSwitchTime = 2000;
      
let characterRotatorTimerId;

const _highlightRandomCharacter = () => {
  const characters = Array.from(document.getElementsByClassName(characterClassName));

  const selected = characters.find(c => c.classList.contains(selectedCharacterClassName));
  let selectedIndex = -1;
  if (selected) {
    selected.classList.remove(selectedCharacterClassName);
    selectedIndex = characters.indexOf(selected);
  }

  const nextIndex = selectedIndex == -1 ? 0 : (selectedIndex + 1) % characters.length;
  const newCharacter = characters[nextIndex];
  newCharacter.classList.add(selectedCharacterClassName);
  document.documentElement.style.setProperty('--character', '"' + newCharacter.dataset.character + '"');
};

const _timer = () => {
  _highlightRandomCharacter();
  characterRotatorTimerId = setTimeout(_timer, characterSwitchTime);
};

const _stopCharacterRotator = () => {
  clearTimeout(characterRotatorTimerId);
};

const CharacterRotator = {
  start() {
    _timer()
  },
  stop() {
    _stopCharacterRotator();
  }
};

export default CharacterRotator;
