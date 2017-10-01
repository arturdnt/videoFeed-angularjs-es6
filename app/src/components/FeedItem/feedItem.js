class ComponentController {
  
  constructor() {
    this.dataMissing = '';
    //the next five (videoid or url is one) variables are mandatory for each item.
    this.mandatoryFileds = ['title','type','source',['videoId','url'],'views'];  
  }

  $onInit () {
    const vm = this;
    this.mandatoryFileds
      .filter((field) => {
        if (Array.isArray(field)){
          for (const value of field) {
            if (vm.resource[value]){ return false;}
          }
          return true;
        }
        return !vm.resource[field]
      })
      .map((field)=>{
        if (Array.isArray(field)){
          field = field.join(' or ')
        }
        vm.dataMissing += `${field}, `;
      });

    if (this.dataMissing){this.dataMissing = this.dataMissing.replace(/,\s*$/, "");} 
  }
}

export { ComponentController }