let form = document.querySelector("form");
let inputEmail = document.querySelector("#email");
let inputPassword = document.querySelector("#password");
let message = document.querySelector("span");
form.addEventListener("submit", (e) =>{
    e.preventDefault();
    let email = inputEmail.value
    let password = inputPassword.value 
    if(validarUsuario(email,password)){
        console.log("Usuário logado com sucesso");
    }
    else{
        console.log("Erro");
    }
});

let emailFicticio = "kaka@gmail.com";
let passwordFicticio = "12345678";

function validarUsuario(email,senha){
    if(email === emailFicticio && senha === passwordFicticio){
        return true;
    }
    else if(email === "" || senha === ""){
        message.innerText = "Não deixe o campos vazios";
        message.style.color = "red";
        return false;
    }
    else if(senha.length < 8){
        message.innerText = "Senha muito curta";
        message.style.color = "red";
        return false;
    }
    else{
        message.innerText = "Email ou senha incorretos";
        message.style.color = "red";
        return false;
    }

};