function AddItem($state, ItemService){
  var vm = this;
  vm.item = {};

  vm.add = function(){
    var promise = ItemService.addItem(vm.item);

    promise.then(function(result){
      console.log('Add Item', result);
      $state.go('store');
    }); 

  };
} 

var component = {
    templateUrl: 'main/store/add-item/add-item.html',
    controller: AddItem
};

angular
  .module('main')
  .component('addItem', component);
