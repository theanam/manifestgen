(function(){

	var app = angular.module("moz",['ui.bootstrap']); 
	app.controller('AppController',function($scope){
		
		this.appd={
			appname:"hello world",
			appDescription : "My Elevator Pitch Goes here",
			launchPath:"/index.html",
			icons : {},
			developer : "Anam Ahmed",
			developerUrl : "http://anam.co",
			defaultLocale:"en"

		}
		
		$scope.appd = this.appd;
		$scope.oneAtATime = true;
		$scope.status = {
			AppMain: true
		};
		$scope.change = function(ico) {
			if( !$scope['ico'+ico] ) {
				delete $scope.appd.icons[ico];
			}
		}
	});

})();