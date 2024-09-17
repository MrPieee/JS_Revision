const gessNumber = document.getElementById('number');

// const wonNumb = document.getElementById('wonNumb');
// const lostNumb = document.getElementById('lostNumb');
// const rAttemps = document.getElementById('rAttemps');
let won= 0;
let lost= 0;
let remain= 5;
let attemp= 0;
// const wonLostMessage = ;

const setTimeoutFunc=(id)=>{
    setTimeout(() => {
        document.getElementById(id).innerText='';
    }, 1000);
};

const chaekResultAct=()=>{
    attemp++;
    const remainAttemp =remain-attemp;
    document.getElementById('rAttemps').innerText=`Remaining Attemps : ${remainAttemp}`;
    
    if (remainAttemp ==0) {
        gessNumber.value='';
        document.getElementById('cheak').style.display='none';
        document.getElementById('restart').style.display='inline';
    }else{
        if (gessNumber.value > 5 || gessNumber.value < 1 ) {
            document.getElementById('err').innerText='Number Must have been 1 to 5 ';
            gessNumber.value='';
            setTimeoutFunc('err');
          }else{
           const randomNumb= Math.ceil(Math.random()*5);
           if (randomNumb == gessNumber.value) {
               won++;
               document.getElementById('wonNumb').innerText=won;
               document.getElementById('message').innerText='You are win';
               setTimeoutFunc('message');
               gessNumber.value='';
           } else {
               lost++;
               document.getElementById('lostNumb').innerText=lost;
               document.getElementById('message').innerText=`You are lost . The correct number is : ${randomNumb}`;
               setTimeoutFunc('message');
               console.log(randomNumb)
               gessNumber.value='';
           }
          }
    }
  
};


const restartGame =()=>{
   window.location.reload();
// console.log('ss')
};

