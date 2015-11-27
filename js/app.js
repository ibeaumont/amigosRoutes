var amigoApp = angular.module('amigoApp', [
  'ngRoute',
  'amigosControllers'  
]);

amigoApp.factory('amigoSrv',function(){
   var lstAmigos = [
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
	];
	return{
	  get:function(){
	    return lstAmigos;
	  },
	  find:function(id){
	    return lstAmigos[id];
	  },
	  add:function(amigo){
	    lstAmigos.push(amigo);
	  },
	  delete:function(id){
	  	lstAmigos.splice(id,1);
	  }
	};
	
});

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
