// For these problems, you’ll need to both write the function (and any helper functions you
//     require), and also a line or two that executes the function with sample input, printing the result
//     on the console

// const input = "fbegdac";
// console.log(input);
// const string_arr = input.split("");
// console.log(string_arr);
// const sorted = string_arr.sort();
// const ret = sorted.join("");
// console.log(ret);

const p1 = (input_str) => ((input_str.split("")).sort()).join("");

console.log(`Input: supercalifragilisticexpialidocious \nOutput: ${p1('supercalifragilisticexpialidocious')}`);