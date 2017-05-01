angular
    .module('main')
    .factory('UsuarioService', UsuarioService);

function UsuarioService($log, $q, $resource) {
    var resource = $resource('http://localhost:9002/usuarios?usuario=:username&password=:password',{username: '@username', password: '@password'});
    return {
        getUsuario: getUsuario
    };

 function getUsuario(username, password) {
        var future = $q.defer();
        
        resource.query({username: username, password : password}).$promise.then(function(result){
            future.resolve(result);
        }).catch(function(error){
            future.reject(error);
        });

        return future.promise;
    }
}