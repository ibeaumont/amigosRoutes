var amigosControllers = angular.module('amigosControllers', ['ngAnimate','mgcrea.ngStrap']);

//controlador del index
amigosControllers.controller('appCtrl', function($scope,$rootScope, $location){
 
	
$scope.isActive = function (viewLocation) {

     var active= (viewLocation === $location.path());
     
     return active;
};

});
//controlador de la lista de amigos
amigosControllers.controller('amigosCtrl', ['$scope','amigoSrv',
  function($scope,amigoSrv) {
  	$scope.amigos=amigoSrv.get();
  }]);
  
 //controlador de la vista Edición de amigo
amigosControllers.controller('amigoEditCtrl', ['$scope', '$rootScope','$routeParams','amigoSrv','$modal',
  function($scope,$rootScope,$routeParams,amigoSrv,$modal) {
  	$scope.amigo=amigoSrv.find($routeParams.amigoId);
	$scope.guardar=function(){
		//$rootScope.amigos[$routeParams.amigoId]=$scope.amigo;
		amigoSrv.save($routeParams.amigoId);
	};
	$scope.myModal= $modal({ scope: $scope, templateUrl:'modal.html', show:false });
	$scope.askDelete=function(){
      //var myModal = $modal({ scope: $scope, templateUrl:'modal.html', show: true });
      $scope.myModal.show();

	};

	
	$scope.eliminar=function(){
		
	    amigoSrv.delete($routeParams.amigoId);
	    $scope.myModal.hide();
	};
  }]);

//controlador de la vista Nuevo amigo
amigosControllers.controller('amigoNuevoCtrl', ['$scope', '$rootScope','$routeParams','amigoSrv','$modal',
 function($scope,$rootScope,$routeParams,amigoSrv,$modal) {
    
    
	$scope.amigo={nombre:"",tlfno:""};
	$scope.guardar=function(){
	    //var myModal = $modal({title: 'My Title', content: 'My Content',show:'false'});  	
	    //myModal.show();
	    
		
		amigoSrv.add($scope.amigo);
		
	}
  }]);
