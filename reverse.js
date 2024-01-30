const sentence = "I am learning web Dev."
let reverse = "";
for(const letter of sentence){
    reverse = letter + reverse;
}
console.log(reverse);







let rev = "";
for(let i=0; i<sentence.length; i++){
    rev = sentence[i] + reverse;
}
console.log(rev);




let reversed = "";
reversed = sentence.split("").reverse().join("");
console.log(reversed);