function* fibs1 () {
    yield 0;
    yield 1;
    let [val1, val2, res] = [0, 1, 0];
    while (true) {
        res = val1 + val2;
        val1 = val2;
        val2 = res;
        yield res;
    }
}
function* fibs2() {
    for (fib of fibs1()) {
        if (fib % 2 == 0) yield fib;
    }
}

const myFibs2 = fibs2();
let count = 6;
for (fib2 of myFibs2) {
    if (count === 0) return;
    console.log(fib2);
    count--;
}
