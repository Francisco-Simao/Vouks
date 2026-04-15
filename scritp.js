        function logar() {
            const email = document.getElementById('email').value;
            const senha = document.getElementById('senha').value;

            if(email === "" || senha === "") {
                alert("Preencha todos os campos!");
            } else {
                // Esconde a tela inicial e mostra a principal
                document.getElementById('telaInicial').style.display = 'none';
                document.getElementById('telaPrincipal').style.display = 'flex';
            }
        }