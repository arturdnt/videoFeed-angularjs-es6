import template from './FacebookPlayerTemplate.html'
import {ComponentController} from './FacebookPlayerComponent'
const bindings = {
  videoId: '@',
}

export const FacebookPlayer = {
  controller: ComponentController,
  template,
  bindings
}