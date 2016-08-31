for (var i = 1; i < 101; i++) {
	
	if (i%3 === 0 && i%5 != 0) {
		console.log(  ' fizz' )
	}
	if (i%5 === 0 && i%3 != 0) {
		console.log( ' buzz' )
	}
	if (i%5 === 0 && i%3 === 0) { 
		console.log( ' FizzBuzz' )	
	} 
	if (i%5 != 0 && i%3 != 0){
		console.log( i )
	}
}