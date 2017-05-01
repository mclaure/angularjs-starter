function AppStoreController(ItemService){
    console.log('Running store Controller');
    var vm = this;
    vm.items = [];
    vm.onDelete = onDelete;
    activate();

    function activate(){
        loadItems();
    }

    function loadItems(){
        vm.promise = ItemService.getItems();
        vm.promise.then(function(result){
            console.log('result',result);
            vm.items = result;
        }).catch(function(error){
            console.log('Error Found:',error);
            vm.error = 'Cannot find items';
        }).finally(function(){
            console.log('get items has been finished!');
        });
    }

    function onDelete(){
        loadItems();
    }
}

var component = {
    templateUrl: 'main/store/store.html',
    controller: AppStoreController
};

angular
  .module('main')
  .component('appStore', component);
