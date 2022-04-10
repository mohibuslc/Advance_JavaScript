
// closer function declare ; 




function unilab(){

    let count = 0 ;


    return function (){

        count++ ; 

        return count ;

    }   

    
  
}

const closer = unilab();

console.log( closer());

