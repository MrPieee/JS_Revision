function duplicateCheak(allItems){
    let exactItem= [];
    for (let i = 0; i < allItems.length; i++) {
        const element = allItems[i];
        const itemIdenx = exactItem.indexOf(element);
        if(itemIdenx == -1){
            exactItem.push(element);
        };
        
    };
    
   return `exact allItems:${exactItem}`;
    
};

const cheakitems = duplicateCheak([1,2,3,4,3,4,6,7,8,32,8,9,1,2,9]);
console.log(cheakitems);






