function logar() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const entrar = document.getElementById("entrar").value;

    if(email === "" || senha === "") {
        alert("Preencha todos os campos!");
    } else {
        window.location.href = 'forms.html';
    }
}

function sair() {
    document.getElementById('telaPrincipal').style.display = 'none';
    document.getElementById('telaInicial').style.display = 'block';
    document.getElementById('email').value = "";
    document.getElementById('senha').value = "";
}

// Seleção dos elementos
const telaInicial = document.getElementById('tela-inicial');
const telaCadastro = document.getElementById('tela-cadastro');

const btnAbrirCadastro = document.getElementById('btn-abrir-cadastro');
const btnVoltar = document.getElementById('btn-voltar');
const btnFinalizar = document.getElementById('btn-finalizar');

// Função para mudar de tela
btnAbrirCadastro.addEventListener('click', () => {
    telaInicial.classList.add('hidden');
    telaCadastro.classList.remove('hidden');
});

// Função para voltar à tela inicial
btnVoltar.addEventListener('click', () => {
    telaCadastro.classList.add('hidden');
    telaInicial.classList.remove('hidden');
});

// Lógica do botão finalizar
btnFinalizar.addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (!email || !senha) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    if (!email.includes("@")) {
        alert("Por favor, insira um Gmail válido.");
        return;
    }

    // Aqui você enviaria os dados para o seu servidor
    console.log("Dados capturados:", { email, senha });
    alert("Cadastro realizado com sucesso!");
});