function EditItem($state, $log, $stateParams, ItemService){
  console.log('Editing Item');
  var vm = this;
  vm.save = save;
  activate();

  function activate(){
    loadItem();
  }

  function loadItem(){
    var promise = ItemService.getItem($stateParams.idItem);

    promise.then(function(result){
       console.log('Load Item result: ', result);
       vm.item = result;
    }).catch(function(error){

    });
  }

  function save(item){
    var promise = ItemService.updateItem(item);

    promise.then(function(result){
       $log.debug('Item has been updated ', result);
       $state.go('store');
    }).catch(function(error){
    });
  }
} 

var component = {
    templateUrl: 'main/store/edit-item/edit-item.html',
    controller: EditItem
};

angular
  .module('main')
  .component('editItem', component);