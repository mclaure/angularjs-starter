function AppItemController($log, ItemService){

    console.log('Running Item Controller');

    var vm = this;
    vm.edit = edit;
    vm.delete = deleteItem;

    function edit() {
        console.log('item',this.item);
    }

    function deleteItem(item) {

        var promise = ItemService.deleteItem(item);
        promise.then(function(result){
            $log.debug('Item has been deleted.');
            vm.onDelete();
        }).catch(function(error){

        });
    }
}

var component = {
    templateUrl: 'main/store/item/item.html',
    controller: AppItemController,
    bindings: {
            item: '=',
            onDelete: '&'
    }
};

angular
  .module('main')
  .component('appItem', component);