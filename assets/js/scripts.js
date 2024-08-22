
function preencherViaJanela() {
    let nome = prompt("Digite seu nome");
    let email = prompt("Digite seu email");
    let mensagem = prompt("Digite sua mensagem");
    const inputNome = document.getElementById("form_nome");
    const inputEmail = document.getElementById("form_email");
    const inputMensagem = document.getElementById("form_mensagem");

    inputNome.value = nome;
    inputEmail.value = email;
    inputMensagem.value = mensagem;
}

const botao = document.getElementById("botao");
botao.innerText = "Enviar somente";
botao.innerHTML = "<strong>Enviar somente</strong>";

botao.addEventListener(
        "click", 
        function (e){
            e.preventDefault();
            console.log("Clicou no botão");
        }
    );