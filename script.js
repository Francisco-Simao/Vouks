function logar() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const entrar = document.getElementById("entrar").value;

    if(email === "" || senha === "") {
        alert("Preencha todos os campos!");
    } else {
        document.getElementById('telaInicial').style.display = 'none';
        document.getElementById('telaPrincipal').style.display = 'flex';
        window.location.href = 'forms.html';
    }
}

function sair() {
    document.getElementById('telaPrincipal').style.display = 'none';
    document.getElementById('telaInicial').style.display = 'block';
    document.getElementById('email').value = "";
    document.getElementById('senha').value = "";
}
