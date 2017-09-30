import template from './VideoPlayerTemplate.html'
import {ComponentController} from './VideoPlayerComponent'
const bindings = {
  url: '@',
}

export const VideoPlayer = {
  controller: ComponentController,
  template,
  bindings
}