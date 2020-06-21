import GameController from './GameController.js';

/* NOTE: The buttons on the start and play-again pages use the gameController directly*/
window.gameController = new GameController();
window.gameController.start();
