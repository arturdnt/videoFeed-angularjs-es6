import template from './YouTubePlayer.html'
import {ComponentController} from './YouTubePlayer'
const bindings = {
  videoId: '@',
}

export const YouTubePlayer = {
  controller: ComponentController,
  template,
  bindings
}