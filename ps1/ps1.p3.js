const valFunc = (val, func) => func(val);

// split(str) splits the string but it removes the delimeter str from return arr
const expr1 = valFunc('supercalifragilisticexpialidocious', str => ((str.replace(/c/g, 'cC')).split('c')).map(x => x.toLowerCase()));

const expr2 = valFunc('supercalifragilisticexpialidocious', str => {
    return {
        originalString: str,
        // .replace(/str/g) replaces ALL instances of str b/c global flag g
        modifiedString: str.replace(/a/g, 'A'),
        numberReplaced: str.split('a').length - 1,
        length: str.length
    };
}
);

console.log(expr1);
console.log(expr2);