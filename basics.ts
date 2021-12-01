function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    // console.log(typeof(number1));
    // can be avoided during development -> don't write code like this
    // if(typeof(n1) === 'number'){
    //     console.log("n1 is type number");
    // }
    const result=n1+n2;
    if(showResult){
        console.log(phrase + result);
    }
    return result;
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "The Result is: ";
const result = add(number1, number2, printResult, resultPhrase);

console.log(result);