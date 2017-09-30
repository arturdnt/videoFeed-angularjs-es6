import template from './headerTemplate.html'
import headerStyle from './headerStyle.scss'
import {ComponentController} from './headerComponent'
const bindings = {
  pageTitle: '@',
}

export const Header = {
  controller: ComponentController,
  template,
  bindings
}

