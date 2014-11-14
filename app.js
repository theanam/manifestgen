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
		$scope.downloadManifest = function(){
			var manifestData = "data:application/text,"+JSON.stringify($scope.appd);
			console.log(manifestData);
			var anc = document.createElement('a');
			anc.href=manifestData.replace(/\s/g,'%20'); //fixed space bug
			anc.download="manifest.webapp";
			var evt = document.createEvent("MouseEvents");
			evt.initMouseEvent("click", true, true, window, 1, 0, 0, 0, 0,false, false, false, false, 0, null);
			anc.dispatchEvent(evt);
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