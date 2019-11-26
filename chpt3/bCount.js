const countChar = (string, chars) => {
    let countedChars = 0;
    for(let i=0;i<string.length;i++){
        if(string[i] == chars){
            countedChars =countedChars +1;
        }
    }
    return countedChars;
}

const countB = (string) => {
    return countChar(string, "B");
}

console.log(countChar('hdgfhdhffFFuuUUKbB', 'f'));
console.log(countB('hfgdhbbbbBBBjhfBJJJB'))