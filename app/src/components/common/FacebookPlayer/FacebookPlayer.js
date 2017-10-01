
class ComponentController {
  constructor() {
    this.iframeSrc = '';
  }

  _getIframeSrc(videoId) {
    return `https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/facebook/videos/${ videoId }/&show_text=0&width=560`;
  };

  $onInit () {
    this.iframeSrc = this._getIframeSrc(this.videoId);
  }
}

export { ComponentController }