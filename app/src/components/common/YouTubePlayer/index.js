import template from './YouTubePlayerTemplate.html'
import {ComponentController} from './YouTubePlayerComponent'
const bindings = {
  videoId: '@',
}

export const YouTubePlayer = {
  controller: ComponentController,
  template,
  bindings
}