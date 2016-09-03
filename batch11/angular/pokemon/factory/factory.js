( function () {
    "use strict";

    angular
        .module("pokemon")
        .factory("apiPokemon", apiPokemon);

    apiPokemon.$inject = ["$resource"];

    function apiPokemon($resource) {
        return $resource("http://pokeapi.co/api/v2/pokemon/10/");
    }
})();
