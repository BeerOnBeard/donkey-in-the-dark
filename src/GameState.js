/* Represents the game board before client-specific resizing */
export default class GameState {
  constructor() {
    this.map = {
      width: 1000,
      height: 1000
    };

    this.flashlight = {
      width: 100,
      height: 100
    };

    this.character = {
      width: 100,
      height: 100,
      x: 0,
      y: 0
    };
  }

  randomizeCharacterLocation() {
    this.character.x = Math.floor(Math.random() * (this.map.width - this.character.width));
    this.character.y = Math.floor(Math.random() * (this.map.height - this.character.height));
  }
};
