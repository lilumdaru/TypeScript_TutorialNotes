
type Combinable = number | string;
type CombinableType = 'as-number' | 'as-text';


function combine(
    input1: Combinable,
    input2: Combinable, 
    resultConversion: CombinableType
) {
    var result;
    if(typeof(input1) === 'number' && typeof(input2) === 'number' || resultConversion === 'as-number'){
        result = +input1 + +input2; // + parses string to number, also parseFloat(string) is possible
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedAges2 = combine('30', '26', 'as-number');
console.log(combinedAges2);

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);