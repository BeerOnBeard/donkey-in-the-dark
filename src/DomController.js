import CharacterRotator from './CharacterRotator.js';

export default class DomController {
  /*
   * clickEventHandler(x,y): Will be called when a click occurs during game play.
   *                         Provides the x and y coordinates of the click.
   * mouseMoveEventHandler(x,y): Will be called when the mouse is moved during game play
   *                             Provides the x and y coordinates of the mouse.
   * resizedEventHandler(width,height): Will be called when the client resizes the browser.
   *                                    Provides the updated width and height.
   */ 
  constructor(clickEventHandler, mouseMoveEventHandler, resizedEventHandler) {
    this._clickEventHandler = clickEventHandler;
    this._mouseMoveEventHandler = mouseMoveEventHandler;
    this._sendResizedEvents = false;

    /* trigger the resized event to provide the initial dimensions*/
    resizedEventHandler(document.documentElement.clientWidth, document.documentElement.clientHeight);
    window.addEventListener('resize', _ => {
      if (!this._sendResizedEvents) {
        return;
      }

      resizedEventHandler(document.documentElement.clientWidth, document.documentElement.clientHeight)
    });
  }

  _swap(child) {
    let root = document.getElementById('root');
    while(root.lastChild && root.removeChild(root.lastChild));
    root.appendChild(child);
  }

  showStart() {
    this._sendResizedEvents = false;

    this._swap(document.getElementById('start').content.cloneNode(true));

    CharacterRotator.start();
  }

  showGame(character) {
    CharacterRotator.stop();

    this._swap(document.getElementById('game').content.cloneNode(true));

    let gameNode = document.querySelector('#root > .game');
    gameNode.querySelector('use').setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#' + character);
    gameNode.addEventListener('click', e => this._clickEventHandler(e.clientX, e.clientY));
    gameNode.addEventListener('mousemove', e => this._mouseMoveEventHandler(e.clientX, e.clientY));

    this._sendResizedEvents = true;
  }

  showPlayAgain() {
    CharacterRotator.stop();
    this._sendResizedEvents = false;

    this._swap(document.getElementById('play-again').content.cloneNode(true));
  }        
};
