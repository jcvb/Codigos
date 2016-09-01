( function(){
	'use strict';
	angular
		.module('myMovies',[])
		.controller('movieCtrl',movieCtrl);
	function movieCtrl() {
		var movie = this;
		movie.collection = [
			{
				'img': 'images/deadpool.jpg',
				'name': 'Deadpool',
				'cast': ['Ryan Reynolds', 'Karan Soni', 'Ed Skrein'],
				'year': 2016,
				'category': 'Action'
			},
			{
				'img': 'images/guardianes.jpg',
				'name': 'Guardianes de la galaxia',
				'cast': ['Chris Pratt', 'Zoe Saldana', 'Dave Bautista'],
				'year': 2014,
				'category': 'Adventure'
			},
			{
				'img': 'images/starwars.jpg',
				'name': 'Rogue One: Una Historia de Star Wars',
				'cast': ['Riz Ahmed', 'Felicity Jones', 'Galen Erso'],
				'year': 2016,
				'category': 'Sci-Fi'
			},
			{
				'img': 'images/xmen.jpg',
				'name': 'X-Men: Apocalipsis',
				'cast': ['James McAvoy', 'Erik Lehnsherr', 'Jennifer Lawrence'],
				'year': 2016,
				'category': 'Sci-Fi'
			},
			{
				'img': 'images/ilucionistas.jpg',
				'name': 'Los ilusionistas 2',
				'cast': ['Mark Ruffalo', 'Jesse Eisenberg', 'Merritt McKinney'],
				'year': 2016,
				'category': 'Comedy'
			},
			{
				'img': 'images/escuadron.jpg',
				'name': 'Escuadrón Suicida',
				'cast': ['Jaime FitzSimons', 'Ike Barinholtz', 'Margot Robbie'],
				'year': 2016,
				'category': 'Comedy'
			}
		];
	}
})();