var demo;
(function (demo) {
    var data;
    var info;
    var doSomething = function (arg) {
        return arg;
    };
})(demo || (demo = {}));
function getArrayLength(x) {
    var len = x.length;
    return len;
}
var names = ['uriel', 'juan', 'pedro'];
var firstPeople = names[0];
console.log(getArrayLength(names));
