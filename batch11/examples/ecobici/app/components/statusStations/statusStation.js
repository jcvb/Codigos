( function () {
	"use strict";
	console.log('module');
	var status = {
		templateURL : "statusStation.html",
		controller: statusCtrl
	};

	angular
		.module("ecobici")
		.component("statusApp", status);

	statusCtrl.$inject = ["apiEcobici"];
	function statusCtrl (apiEcobici) {
		console.log('module-api');
		var status = this;
	}
})();