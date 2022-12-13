const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener("input", ounput);
function ounput(evt){
    output.textContent = evt.currentTarget.value;
    const  query = evt.currentTarget.value;
    if(!query){
        console.log(`${output}`);
       }
       if(input.value === ""){
        return output.textContent = "Anonymous";
     } 
}


