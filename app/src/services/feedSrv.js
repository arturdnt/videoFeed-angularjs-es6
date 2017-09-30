import angular from 'angular';

class FeedResources {
  constructor($http) {
    this.resourceItems = [];
    this.feedItemOptions = [];
    this.http = $http;

    let mv = this;
    this.resourceItems = this._getItems()
      .then(function successCallback(response) {
        mv.feedItemOptions = mv._getResourceTypes();
      });
  }

  updateFeedResoures(filterType){
    this._getItems(filterType);
  }

  _getResourceTypes(){
    return Array.from(new Set(this.resourceItems.map(item => item.source))); 
  }

  _getItems(filter = ''){
    let mv = this;
    return this.http({
      method: 'GET',
      url: `http://localhost:8082/${filter}`
    }).then(function successCallback(response) {
      mv.resourceItems = response.data;
      }, function errorCallback(err) {
        console.error(`An error occured while fetching data : ${err}`)
      });
  }
}

FeedResources.$inject = ['$http'];

export default angular.module('services.feedSrv', [])
  .service('feedResources', FeedResources)
  .name;