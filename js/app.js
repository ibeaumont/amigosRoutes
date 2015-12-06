var amigoApp = angular.module('amigoApp', [
  'ngRoute',
  'amigosControllers','firebase' 
]);

amigoApp.factory('amigoSrv',['$firebaseArray',function( $firebaseArray){
	 var ref = new Firebase("https://froga.firebaseio.com");
	 var lstAmigos=$firebaseArray(ref);
  /* var lstAmigos = [
	{
		nombre:"juan",
		tlfno:"123456789"
	},
	{
		nombre:"pedro",
		tlfno:"123456789"
	},	
	{
		nombre:"luis",
		tlfno:"123456789"
	}
	];*/
	console.log(lstAmigos);
	return{
	  get:function(){
	    return lstAmigos;
	  },
	  find:function(id){
	    return lstAmigos[id];
	  },
	  add:function(amigo){
	    lstAmigos.$add(amigo);
	  },
	  save:function(id){
	  	lstAmigos.$save(lstAmigos[id]);
	  },
	  delete:function(id){
	  	//lstAmigos.splice(id,1);
	  	lstAmigos.$remove(lstAmigos[id]);
	  }
	};
	
}]);

amigoApp.config(['$routeProvider',
  function($routeProvider) {
    
        
    $routeProvider.
      when('/amigos', {
        templateUrl: 'amigos.html',
        controller: 'amigosCtrl'
      }).
      when('/amigo/:amigoId', {
        templateUrl: 'amigoEdit.html',
        controller: 'amigoEditCtrl'
      }).
      when('/nuevo', {
        templateUrl: 'amigoEdit.html',
        controller: 'amigoNuevoCtrl'
      }).
      otherwise({
        redirectTo: '/amigos'
      });
      
  }]);
