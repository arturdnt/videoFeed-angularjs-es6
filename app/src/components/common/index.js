import angular from 'angular'

import {YouTubePlayer} from './YouTubePlayer'
import {VideoPlayer} from './VideoPlayer'
import {FacebookPlayer} from './FacebookPlayer'

export default angular.module('common', [])
    .component('vfYoutube',YouTubePlayer)
    .component('vfVideo',VideoPlayer)
    .component('vfFacebook',FacebookPlayer)
    .name;
