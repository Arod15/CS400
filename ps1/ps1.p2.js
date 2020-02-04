const p2 = (expr) => {
    let [left, op, right] = expr.split("");
    return operation(op)(parseInt(left), parseInt(right));
    // return eval(expr);
};

const operation = (op) => {
    switch(op) {
        case "+":
            return (left, right) => left + right;
            break;
        case "-":
            return (left, right) => left - right;
            break;
        case "*":
            return (left, right) => left * right;
            break;
        case "/":
            return (left, right) => left / right;
            break;
        case "%":
            return (left, right) => left % right;
            break;
    }
};

const input_arr = ['4+2', '5*7', '6-1', '9/2'];

input_arr.map(expr => console.log(`${expr} = ${p2(expr)}`));