import GameState from './GameState.js';
import DomController from './DomController.js';
import StyleController from './StyleController.js';

class GameController {
  constructor() {
    this._gameState = new GameState();
    this._domController = new DomController(
      this._handleClick.bind(this),
      this._handleMouseMove.bind(this),
      this._updateClientSize.bind(this));
  }

  _updateClientSize(width, height) {
    const factor = {
      width: width / this._gameState.map.width,
      height: height / this._gameState.map.height
    };

    const flashlight = {
      width: this._gameState.flashlight.width * factor.width,
      height: this._gameState.flashlight.height * factor.height
    };

    const character = {
      width: this._gameState.character.width * factor.width,
      height: this._gameState.character.height * factor.height,
      x: this._gameState.character.x * factor.width,
      y: this._gameState.character.y * factor.height
    };

    StyleController.updateFlashlight(flashlight.width, flashlight.height);
    StyleController.updateCharacter(character.width, character.height, character.x, character.y);

    this._factor = factor;
    this._character = character;
  }

  _updateCharacterLocation() {
    this._character.x = this._gameState.character.x * this._factor.width;
    this._character.y = this._gameState.character.y * this._factor.height;
    StyleController.updateCharacter(this._character.width, this._character.height, this._character.x, this._character.y);
  }

  _areCoordinatesOnCharacter(x, y) {
    return this._character.x < x && x < this._character.x + this._character.width
        && this._character.y < y && y < this._character.y + this._character.height;
  }

  _handleClick(x, y) {
    if (this._character.x < x && x < this._character.x + this._character.width
      && this._character.y < y && y < this._character.y + this._character.height) {
      this._domController.showPlayAgain();
    }
  }

  _handleMouseMove(x, y) {
    StyleController.updateCursor(x, y);
  }

  start() {
    this._domController.showStart();
  }

  play(character) {
    this._gameState.randomizeCharacterLocation();
    this._updateCharacterLocation();
    this._domController.showGame(character);
  }
};

export default GameController;
