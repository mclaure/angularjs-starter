angular
    .module('main')
    .factory('ItemService', ItemService);

function ItemService($log, $q, $resource) {
    var resource = $resource('http://localhost:9001/items/:id',{
        id: '@id'
    }, {
        update:{
                method: 'PUT'
        }
    });
    
    return {
        getItems: getItems,
        addItem: addItem,
        deleteItem: deleteItem,
        getItem: getItem,
        updateItem: updateItem
    };

    function getItem(id) {
        $log.info('getting Item....');
        var future = $q.defer();
        
        resource.get({id: id}).$promise.then(function(result){
            future.resolve(result);
        }).catch(function(error){
            future.reject(error);
        });

        return future.promise;
    }

    function getItems() {
        $log.info('getting Items....');
        var future = $q.defer();
        
        resource.query().$promise.then(function(result){
            setTimeout(function(){
                        future.resolve(result);
                        },100);
        }).catch(function(error){
            future.reject(error);
        });

        return future.promise;
    }

    function addItem(item) {
        $log.info('adding Items....');
        var future = $q.defer();
        
        resource.save(item).$promise.then(function(result){
            future.resolve(result);
        }).catch(function(error){
            future.reject(error);
        });

        return future.promise;
    }

    function updateItem(item) {
        $log.info('updating Item....');        
        var future = $q.defer();
        
        resource.update({id: item.id},item).$promise.then(function(result){
           future.resolve(result);
        }).catch(function(error){
            future.reject(error);
        });

        return future.promise;
    }

    function deleteItem(item) {
        $log.info('deleting Item....');          
        var future = $q.defer();

        resource.delete({id: item.id}).$promise.then(function(result){
            future.resolve(result);
        }).catch(function(error){
            future.reject(error);
        });

        return future.promise;
    }
}