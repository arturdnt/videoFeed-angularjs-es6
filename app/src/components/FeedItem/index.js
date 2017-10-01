import template from './feedItem.html'
import feedStyle from './feedItem.scss'
import {ComponentController} from './feedItem'

const bindings = {
  resource: '<',
}

export const FeedItem = {
  controller: ComponentController,
  template,
  bindings
}