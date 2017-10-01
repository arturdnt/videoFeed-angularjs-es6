import template from './header.html'
import headerStyle from './header.scss'
import {ComponentController} from './header'
const bindings = {
  pageTitle: '@',
}

export const Header = {
  controller: ComponentController,
  template,
  bindings
}

