function* p2 (string) {
    const wordArr = string.split(' ');
    for (wordIndex in wordArr) {
        yield wordArr[wordIndex];
    }
}
const string = 'All I know is something like a bird within her sang';
for (word of p2(string)) {
    console.log(word);
}