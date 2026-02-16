const submit = document.getElementById("signed");
const login = document.querySelector(".login-container")

if(submit instanceof HTMLButtonElement){

  submit.addEventListener('click', () =>{

    login?.classList.toggle("move-left");
  });
}


