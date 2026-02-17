
const submit = document.getElementById("signed");
const cypher_result = document.querySelector(".cypher-result");

import {hashSync} from 'bcrypt-ts'
// Elementos de login 
const email = document.getElementById("email") as HTMLInputElement | null;
const password = document.getElementById("password") as HTMLInputElement | null;
const cypher = document.getElementById("result"); //contenedor de resultado
const original = document.getElementById("original");

if(submit instanceof HTMLButtonElement){

  submit.addEventListener('click', (event) =>{
    event.preventDefault();

    if(!email || !password || !cypher || !original) return; // evitar espacios nulos

    if(email.value.trim() === "" || password.value.trim() === ""){
      alert("Completa los campos");
      return;
    }

    original.textContent = password.value; 
    const hash = hashSync(password.value, 10);

    cypher.textContent = hash;
    
    cypher_result?.classList.add("show");
  });
}


