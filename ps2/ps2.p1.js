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

let count = 6;
for (fib2 of fibs2()) {
    if (count === 0) break;
    console.log(fib2);
    count--;
}
