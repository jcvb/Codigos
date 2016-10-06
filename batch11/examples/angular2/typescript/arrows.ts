module demo{
	var myFunc = (h: number, w:number) => h*w;
	console.log(myFunc(2,2));
	console.log('resultado'+myFunc(3,4));

	var greetMe : (msg: string) => void;
	var helloWorld: ( name?: string) => void;

	helloWorld = (name?:string) => {
		console.log('Hello'+(name||'uknow person'))
	} 

	helloWorld();
	helloWorld('carlos');

	var squarteIt : (rect: {h:number; w?: number})=> number;
	var rectA = {h: 7};
	var rectB = {h:55, w:4};

	squarteIt = function(rect){
		if(rect.w !== undefined){
			return rect.h *rect.w;
		}
		return rect.h*rect.h;
	};

	console.log(squarteIt(rectB));
	console.log(squarteIt(rectA));

	var rectagle = {
		h:10,
		w:20,
		calcArea: function() {
			return this.h * this.w;	
		} 
	};

	console.log('Rect Area ' + rectagle.calcArea());

	interface Person {
		name: string;
		age?: number;
		kids: number;
		makeYounger: (years: number) => void;
		greet: (msg: string) => void;
		favoriteMovie: string;
	}

	var p: Person = {
		favoriteMovie: "hello ",
		name: "uriel",
		age: 40,
		kids: 1,
		makeYounger : function (years: number) {
			this.age -= years;
		},
		greet: function(msg: string){
			return 'mensaje '+ msg;
		}
	};

	console.log(p.greet('carlos'));

}