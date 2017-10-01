import template from './FacebookPlayer.html'
import {ComponentController} from './FacebookPlayer'
const bindings = {
  videoId: '@',
}

export const FacebookPlayer = {
  controller: ComponentController,
  template,
  bindings
}