(function(){
var app = angular.module("moz",[]); 
app.controller('AppController',function(){
	this.appd={
		appname:"hello world",
		appDescription : "My Elevator Pitch Goes here",
		launchPath:"/index.html",
		icons : {},
		developer : "Anam Ahmed",
		developerUrl : "http://anam.co",
		defaultLocale:"en"

	}

});


})();