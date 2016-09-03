(function(){
	'use strict';

	var characters = {
		bindings: {
			category: "=",
			id: "="
		},
		templateUrl: "./component/character.html",
		controller: starCtrl
	}

	angular
		.module('starwars')
		.component("characters", characters);

	starCtrl.$inject = ["apiStar"];
	function starCtrl(apiStar){
		var star = this;

		star.characters = null;
		star.apiData = apiStar.get(
			{
				'category': star.category,
				'id': star.id
			}
		).$promise.then(function(response){
			star.characters = response.results;
			console.log(star.characters);
		})

	}
})();