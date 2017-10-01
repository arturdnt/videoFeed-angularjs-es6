
class ComponentController {
  constructor() {
  }

  _getIframeSrc(videoId) {
    return `https://www.youtube.com/embed/${ videoId }`;
  };

  $onInit () {
    this.iframeSrc = this._getIframeSrc(this.videoId);
  }
}

export { ComponentController }