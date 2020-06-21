const _setCssPropertyPixels = (name, value) => document.documentElement.style.setProperty(name, value + 'px');

const StyleController = {
  updateFlashlight(width, height) {
    _setCssPropertyPixels('--flashlight-width', width);
    _setCssPropertyPixels('--flashlight-height', height);
  },
  updateCharacter(width, height, x, y) {
    _setCssPropertyPixels('--character-width', width);
    _setCssPropertyPixels('--character-height', height);
    _setCssPropertyPixels('--character-x', x);
    _setCssPropertyPixels('--character-y', y);
  },
  updateCursor(x, y) {
    _setCssPropertyPixels('--cursor-x', x);
    _setCssPropertyPixels('--cursor-y', y);
  }
};

export default StyleController;
