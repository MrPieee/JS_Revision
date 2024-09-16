const createCodeInp = document.getElementById('createCode');

const matchCodeInp = document.getElementById('codeInp');

/* Showing result Elements */
const yellowH =document.getElementById('yellowH');
const greenH =document.getElementById('greenH');
const redH =document.getElementById('redH');

/* Make a SetTimeOut Function */

const showResultTimeOut=(typeOfResult)=>{
    setTimeout(() => {
        document.getElementById(typeOfResult).innerText='';
    }, 3000);
};


const generateCode=()=>{
    const code = Math.random() *100000000;
    const roundCode = Math.round(code);
    createCodeInp.value=roundCode;
};

const numberValue =(numbValue)=>{
    matchCodeInp.value += numbValue;
};

const clearInput=()=>{
    matchCodeInp.value ='';
};
const oneItemClear =()=>{
    matchCodeInp.value=matchCodeInp.value.toString().slice(0,-1);
};

const codeMatcher=()=>{
    const code= parseInt(createCodeInp.value);
    const inputCode= parseInt(matchCodeInp.value);
    if(code && inputCode){
        if (code===inputCode) {
            greenH.innerText='Congress your code is Match.';
            showResultTimeOut('greenH');
        }else{
            redH.innerText=`Sorry.! Your Code Dosen't matching...`;
            showResultTimeOut('redH');
        }
    }else{
        if (!code) {
            yellowH.innerText='Please Generate A code.';
            showResultTimeOut('yellowH');
        }else{
            yellowH.innerText='Please Enter Your Code.';
            showResultTimeOut('yellowH');
        };
    };
};



