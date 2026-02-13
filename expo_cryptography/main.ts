const buttons = document.querySelectorAll("button");

const directions: string[] = [
  "control/hashing.html",
  "control/MFA.html",
  "cypher/AES.html",
  "cypher/RSA.html"
];

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const target = event.currentTarget as HTMLButtonElement;
    const page = target.getAttribute('data-page');

    if(page){
        window.location.href = page;
    }
  });
});
