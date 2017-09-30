import template from './feedTemplate.html'
import feedStyle from './feedStyle.scss'
import {ComponentController} from './feedComponent'
const bindings = {
  //someInput: '<',
}

export const Feed = {
  controller: ComponentController,
  template,
  bindings
}