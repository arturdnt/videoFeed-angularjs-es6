import template from './VideoPlayer.html'
import {ComponentController} from './VideoPlayer'
const bindings = {
  url: '@',
}

export const VideoPlayer = {
  controller: ComponentController,
  template,
  bindings
}