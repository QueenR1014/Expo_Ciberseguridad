import bcrypt from 'bcrypt'

const submit = document.getElementById("signed");
const login = document.querySelector(".login-container");
const cypher_result = document.querySelector(".cypher-result");

if(submit instanceof HTMLButtonElement){

  submit.addEventListener('click', () =>{
    const cypher = document.getElementById("result");
    

    
    cypher_result?.classList.toggle("show");

  });
}


