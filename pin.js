function fourDigitPin(){
    let random_pin = Math.round(Math.random()*9999);
    let pin = random_pin + '';
    if(pin.length==4){
        document.getElementById('generate_field').value=random_pin;
    }else{
        fourDigitPin()
    }
    
};
document.getElementById('typedNUmbers').addEventListener('click',function(event){
    let typed=event.target.innerText;
    
    if(isNaN(typed)){     
        
    }else{
        let calcInput = document.getElementById('match_num');
        let num = calcInput.value;
        const newNum =num+typed;
        calcInput.value=newNum;
    }
    
})
function match(){
    if(document.getElementById('generate_field').value==document.getElementById('match_num').value){
        document.getElementById('matched').style.display='inherit';
    }else{
        document.getElementById('not-matched').style.display='inherit';
    }
}


    
