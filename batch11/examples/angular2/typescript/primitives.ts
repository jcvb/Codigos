module demo{
	var data : any;
	var info;
	var doSomething = function(arg){
		return arg;
	}
}

function getArrayLength(x: string[]){
	var len : number = x.length;
	return len;
}

var names : string[] = ['uriel', 'juan', 'pedro'];
var firstPeople : string = names[0];
console.log(getArrayLength(names));