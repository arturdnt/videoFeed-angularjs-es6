import template from './feed.html'
import feedStyle from './feed.scss'
import {ComponentController} from './feed'
const bindings = {
  //someInput: '<',
}

export const Feed = {
  controller: ComponentController,
  template,
  bindings
}