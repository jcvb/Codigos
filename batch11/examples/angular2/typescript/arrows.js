var demo;
(function (demo) {
    var myFunc = function (h, w) { return h * w; };
    console.log(myFunc(2, 2));
    console.log('resultado' + myFunc(3, 4));
    var greetMe;
    var helloWorld;
    helloWorld = function (name) {
        console.log('Hello' + (name || 'uknow person'));
    };
    helloWorld();
    helloWorld('carlos');
    var squarteIt;
    var rectA = { h: 7 };
    var rectB = { h: 55, w: 4 };
    squarteIt = function (rect) {
        if (rect.w !== undefined) {
            return rect.h * rect.w;
        }
        return rect.h * rect.h;
    };
    console.log(squarteIt(rectB));
    console.log(squarteIt(rectA));
    var rectagle = {
        h: 10,
        w: 20,
        calcArea: function () {
            return this.h * this.w;
        }
    };
    console.log('Rect Area ' + rectagle.calcArea());
    var p = {
        favoriteMovie: "hello ",
        name: "uriel",
        age: 40,
        kids: 1,
        makeYounger: function (years) {
            this.age -= years;
        },
        greet: function (msg) {
            return 'mensaje ' + msg;
        }
    };
    console.log(p.greet('carlos'));
})(demo || (demo = {}));
