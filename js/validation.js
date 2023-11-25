function mudarMensagemDeErro(text, element) {
    element.innerHTML = text;
}

const form = document.querySelector("form")

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    let valido = true;
    const dataSTR = form.querySelector("#dt-nasc");
    const data = new Date(dataSTR.value);
    const dataAtual = new Date();

    const dtError = form.querySelector(".dt-error")
    if(data > dataAtual){
        mudarMensagemDeErro("Data inválida", dtError);
        valido = false;
    }
    else{
        mudarMensagemDeErro("", dtError);
    }

    const senha = form.querySelector("#senha")
    const passError = form.querySelector(".password-error")
    if(senha.value.length < 6) {
        valido = false;
        mudarMensagemDeErro("Senha muito curta", passError);
    }
    else if(senha.value.length > 18){
        valido = false;
        mudarMensagemDeErro("Senha muito longa", passError);
    }

    if(valido) {
        alert("Usuário cadastrado com sucesso");
        open("index.html", "_self")
    }
});