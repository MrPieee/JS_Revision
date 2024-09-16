const inp= document.getElementById('display');

const numberValue=(number)=>{
    inp.value+=number;
};

// inp.addEventListener('keypress')

// const st='ddd';


const equal=()=>{
    try {
        inp.value= eval(inp.value);
    } catch (error) {
        if(error){
            inp.value='Error'
        }
    }
};


const clearInput=()=>{
    inp.value='';
};
 

