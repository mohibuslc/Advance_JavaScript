const numbers = [ 2 , 3, 5, 6 ,9];

// const output= []

// for(let i = 0 ; i<numbers.length ; i++){

//     const elements = numbers[i];

//     const result = elements * elements;

//     output.push(result);
    
// };

// console.log(output)

function square (elements){

    return elements*elements;

}

const result = numbers.map(function(elements,index, array){
 return elements*elements;

})

console.log(result)
