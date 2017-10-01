
class ComponentController {
  constructor() {
  }

  getIframeSrc(videoId) {
    return `https://www.youtube.com/embed/${ this.videoId }`;
  };

  $onInit () {
  }
}

export { ComponentController }