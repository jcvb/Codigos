(function(){
	'use strict';

	var nasa = {
		templateUrl: "./component/feed.html",
		controller: nasaCtrl
	};

	angular
		.module("nasa")
		.component("nasaApp",nasa);

	nasaCtrl.$inject = ["apiNasa"];
	function nasaCtrl(apiNasa) {
		var nasa = this;
	 	nasa.getId = getId;
		
		nasa.list = null;
		nasa.dataNasa = apiNasa.get()
			.$promise.then(function(response){
				JSON.stringify(response);
				nasa.list = response.photos;
			})
		function getId(item){
			console.log(item);
			nasa.imgUrl = item.photo.img_src; 
			nasa.nameImage = item.photo.rover.name +' '+ item.photo.rover.landing_date +' '+ item.photo.rover.max_date;
			nasa.id = item.photo.id; 
		}
	}

})();