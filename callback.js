// Callbacks:
function add(x, y) {
    return x + y;
}

console.log(add(1, 2));

function invoke(fn, a, b) {
    setTimeout(function () {
        console.log(add(20, 30));
    }, 2000);
    return fn(a, b);
}

console.log(invoke(add, 1, 2));