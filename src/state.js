const setCharacter = character => sessionStorage.setItem('character', character);
const getCharacter = () => sessionStorage.getItem('character');

export { setCharacter, getCharacter };
