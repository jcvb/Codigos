(function(){
	'use strict';

	var pokemon = {
		templateUrl: "./component/poke.html",
		controller: pokemonCtrl
	};

	angular
		.module("pokemon")
		.component("pokemonApp", pokemon);
	
	pokemonCtrl.$inject = ["apiPokemon"];

	function pokemonCtrl(apiPokemon){
		var pokemon = this;
		pokemon.char = null;

		pokemon.dataPokemon = apiPokemon.get()
			.$promise.then(function(response){
				pokemon.char = response;
			})
	}
})();