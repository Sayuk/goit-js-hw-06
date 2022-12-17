const inputEv = document.querySelector('#font-size-control');
const textEv = document.querySelector('#text');


inputEv.addEventListener('change', setSize);


function setSize(ev){

   const fontSize = ev.currentTarget.value;
   textEv.style.fontSize = `${fontSize}px`
    
}
