import template from './feedItemTemplate.html'
import feedStyle from './feedItemStyle.scss'
import {ComponentController} from './feedItemComponent'

const bindings = {
  resource: '<',
}

export const FeedItem = {
  controller: ComponentController,
  template,
  bindings
}