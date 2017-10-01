import angular from 'angular';

class FeedResources {
  constructor($http) {
    this.resourceItems = [];
    this.feedItemOptions = [];
    this.http = $http;

    let mv = this;
    this.resourceItems = this._getItems()
      .then(response => mv.feedItemOptions = mv._getResourceTypes(response),
      )
  }

  updateFeedResoures(filterType){
    this._getItems(filterType);
  }

  _getResourceTypes(items){
    if (items){
      return Array.from(new Set(items.map(item => item.source)));       
    }
    console.error('Could not update the type list');
  }

  _getItems(filter = ''){
    let mv = this;
    return this.http({
      method: 'GET',
      url: `http://localhost:8082/${filter}`
    })
      .then(response => mv.resourceItems = response.data,
            err => console.error(`An error occured while fetching data : ${err.data}`)
      );
  }
}

FeedResources.$inject = ['$http'];

export default angular.module('services.feedSrv', [])
  .service('feedResources', FeedResources)
  .name;