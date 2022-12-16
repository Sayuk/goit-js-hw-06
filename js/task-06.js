const inputEl = document.querySelector('#validation-input');
const inputlength = inputEl.getAttribute("data-length");
inputEv.addEventListener('blur', onblur);
  

function onblur(){
    if(inputlength  != inputEl.value.length ){
        inputEl.classList.remove('valid') 
        return inputEl.classList.add('invalid') 
       
    }else{

        inputEl.classList.remove('invalid') 
        return inputEl.classList.add('valid');
         
    }
     

}