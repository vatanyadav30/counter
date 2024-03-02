const plusButtonRef=document.getElementById('plus');
const minusButtonRef=document.getElementById('minus');
const resetButtonRef=document.getElementsByClassName('reset')[0];
const resultRef=document.getElementById('result');
const inputRef=document.getElementsByTagName('input')[0];

let result=0;
let input=1

plusButtonRef.addEventListener('click',(e)=>{
    updateResult("add");
})
minusButtonRef.addEventListener('click',(e)=>{
    updateResult('minus');
})

resetButtonRef.addEventListener('click',()=>{
    updateResult('reset');
})

inputRef.addEventListener('change', function(e){
    input=Number(e.target.value);
})

function updateResult(operation){
    if(operation=='add'){
        result+=input;
        resultRef.innerText=result;
    }
    else if(operation=='minus'){
        result-=input;
        resultRef.innerText=result
    }
    else{
        result=0;
        input=1;
        inputRef.value=1;
        inputRef.innerText=1;
        resultRef.innerText=result
    }
    
}
