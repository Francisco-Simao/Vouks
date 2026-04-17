function logar() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if(email === "" || senha === "") {
        alert("Preencha todos os campos!");
    } else {
        document.getElementById('telaInicial').style.display = 'none';
        document.getElementById('telaPrincipal').style.display = 'flex';
    }
}

function sair() {
    document.getElementById('telaPrincipal').style.display = 'none';
    document.getElementById('telaInicial').style.display = 'block';
    document.getElementById('email').value = "";
    document.getElementById('senha').value = "";
}

function enviar() {
    const demanda = document.getElementById('demanda').value;
    const dificuldade = document.getElementById('dificuldade').value;
    const empresa = document.getElementById('empresa').value;
    const anonimo = document.getElementById('anonimo').checked;
    const atendimento = document.querySelector('input[name="atendimento"]:checked');

    if(demanda === "" || dificuldade === "" || !atendimento) {
        alert("Preencha todos os campos obrigatórios e escolha o tipo de atendimento!");
        return;
    }

    let nomeEmpresa = empresa;
    if(anonimo) nomeEmpresa = "Anônimo";

    alert(`Dados enviados com sucesso!\n\nEmpresa: ${nomeEmpresa}\nAtendimento: ${atendimento.value}\nAgradecemos pela confiança. A Vouks Consultoria — construindo soluções, transformando negócios.`);

    // Limpar campos
    document.getElementById('demanda').value = "";
    document.getElementById('dificuldade').value = "";
    document.getElementById('empresa').value = "";
    document.getElementById('anonimo').checked = false;
    document.querySelector('input[name="atendimento"]').checked = false;
}