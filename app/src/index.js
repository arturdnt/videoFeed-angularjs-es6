import angular from 'angular'

import trusted from './app.config'; //app config (trusted sites)
import './main.scss'

//the three main components on the page (header, feed and feed item)
import {Header} from './components/Header'
import {Feed} from './components/Feed'
import {FeedItem} from './components/FeedItem' 

import FeedResources from './services/feedSrv'; //feed resources service
import commonComp from './components/common'; //common components module

angular.module('videoFeedApp', [FeedResources, commonComp])
    .config(trusted)
    .component('vfHeader',Header)
    .component('vfFeed',Feed)
    .component('vfFeedItem',FeedItem);



