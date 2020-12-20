function sortCharacters (words) {
    const regex = /[a-z]/ig;
    const splitWords = words.toLowerCase().split(" ").map(word => {
    const sorted = word.match(regex);
    return sorted.sort().join("");
})
    return splitWords;
}

console.log(sortCharacters("Hello!@#$%^^*"))
console.log(sortCharacters("truncate!@#$%^^*"))
console.log(sortCharacters("Developer!@#$%^^*"))
console.log(sortCharacters("Software12345 Developer!@#$%^^* Binar"))