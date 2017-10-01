class ComponentController {
  
  constructor() {
    this.dataMissing = '';
    //the next five (videoid or url is one) variables are mandatory for each item.
    this.mandatoryFileds = ['title','type','source',['videoId','url'],'views'];  
  }

  $onInit () {
    const vm = this;

    const getMandatoryFieldsFilter = field =>{
			if(Array.isArray(field)){
				for(const value of field){
					if(vm.resource[value]){
						return false;
					}
				}
				return true;
			}
			return !vm.resource[field];
    };
    
    const mapToMessageReduce = (message, field) =>{
			if(Array.isArray(field)){
				field = field.join(' or ')
			}
			message += `${field}, `;
			return message
    };
    
    vm.dataMissing = vm.mandatoryFileds
      .filter(getMandatoryFieldsFilter)
      .reduce(mapToMessageReduce, '');

    if (vm.dataMissing){vm.dataMissing = vm.dataMissing.replace(/,\s*$/, "");} 
  }
}

export { ComponentController }