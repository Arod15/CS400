function* p2 (string) {
    const wordArr = string.split(' ');
    for (wordIndex in wordArr) {
        yield wordArr[wordIndex];
    }
}
for (word of p2('All I know is something like a bird within her sang')) {
    console.log(word);
}