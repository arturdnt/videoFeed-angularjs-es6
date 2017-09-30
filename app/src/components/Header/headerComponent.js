class ComponentController {
  constructor(feedResources) {
    this.feedResourcesSrv = feedResources;
    this.feedItemSelectedType = '';
  }

  updateSelectedType() {
   //update the resources in the service
   this.feedResourcesSrv.updateFeedResoures(this.feedItemSelectedType); 
  }

  $onInit () {

  }

}
ComponentController.$inject = ['feedResources'];

export { ComponentController }