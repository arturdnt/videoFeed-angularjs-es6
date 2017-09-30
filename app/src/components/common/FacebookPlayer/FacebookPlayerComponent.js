
class ComponentController {
  constructor() {
  }

  getIframeSrc(videoId) {
    return `https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/facebook/videos/${ this.videoId }/&show_text=0&width=560`;
  };

  $onInit () {
  }
}

export { ComponentController }