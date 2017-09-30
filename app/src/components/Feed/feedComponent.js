
class ComponentController {
  constructor(feedResourcesSrv) {
    this.resourceSrv = feedResourcesSrv;
  }
}

ComponentController.$inject = ['feedResources'];
export { ComponentController }