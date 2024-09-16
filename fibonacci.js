

/* Create a fibonacci with for loop */


// function fibonacci(numbTill){
//     let fiboNum= [1,1];
//     for (let i = 2; i <=numbTill; i++) {
//         fiboNum[i]=fiboNum[i-1] + fiboNum[i-2];
//     }

//     return fiboNum;
// };

// const fibonacciOf10=fibonacci(10);
// console.log(fibonacciOf10);


/* Create a fibonacci with  Recursive Fuction; */

const fibonacci = (n)=>{
    if(n ===0){
       return [1];
    }else if (n===1){
        return [1,1];
    }else{
        let fiboNumb = fibonacci(n-1);
        const nextElement= fiboNumb[n-1] + fiboNumb[n-2];
        fiboNumb.push(nextElement);
        return fiboNumb;
    }
};

const fibonacciOf10=fibonacci(10);
console.log(fibonacciOf10);