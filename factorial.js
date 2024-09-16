

/* Create a factorial with for loop */

// function factorial (numb) {
//     let factSum =1;
//     let factorial = [];
//     for (let i = 1; i<=numb; i++) {
        
//         factSum =factSum*i;
//         factorial.push(i);
//     }   
//     return `!${numb}=${factorial} \n sum =${factSum}`;
// }
// const factorialOf10=factorial(10);
// console.log(factorialOf10);



/* Create a factorial with  Recursive Fuction; */

const factorial =(numb)=>{
    
    if(numb===0){
        return 1;
    }
    else{
        return numb * factorial(numb-1) ;
    }
};
// const factorialOf10=factorial(10);
// console.log(factorialOf10);


