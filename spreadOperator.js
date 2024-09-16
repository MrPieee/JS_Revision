const arr1= [1,2,3,4,5,6,7,8,9];
const arr2 = ['Sakib','Tamim','Samim','Damim','Bamim'];
const arr3=['Mushfiq','Mashrafi','Mashfiq','Maskib','Muja','Suja','Tuja'];

/* Normal Way to array concat----> */
const concatArray1 = arr1.concat(arr2).concat(arr3);

// console.log(concatArray1);

/* Use spread operator to array concat----> */
const concatArray2 = [...arr1 , ...arr2 ,...arr3];
console.table(concatArray2);


// const concatArr= [arr1,arr2,arr3].flat();


