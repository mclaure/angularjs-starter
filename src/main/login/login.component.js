function AppLoginController($stateParams, $state, $scope, UsuarioService){
    console.log('Running login Controller');
    var vm = this;

    $scope.login = function() {
        console.log('Running login submit...');
        vm.promise = UsuarioService.getUsuario($scope.username, $scope.password);

        vm.promise.then(function(result){
            vm.user = result;

            if(vm.user[0] != undefined){
               console.log('User id Found: ', vm.user[0].id);        
               $state.go('store');
            }
            else {
                vm.error = 'Invalid Username Or Password!';
           }

        }).catch(function(error){
            console.log('Error Found: ', error);
            vm.error = 'Cannot find user';
            $state.go('login');
        }).finally(function(){
            console.log('User login is done!');
        });    
    }; 
}

var component = {
    templateUrl: 'main/login/login.html',
    controller: AppLoginController
};

angular
  .module('main')
  .component('appLogin', component);