// Get the modal and buttons
var modal = document.getElementById("myModal");
var openModalBtn = document.getElementById("openModalBtn");
var closeModalBtn = document.getElementById("closeModalBtn");

// Open the modal
openModalBtn.addEventListener("click", function () {
    modal.style.display = "block";
});

// Close the modal when clicking the close button
function fecharModal() {
    modal.style.display = "none";
};

// Close the modal if the user clicks outside the modal content
window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

function fecharAlerta() {
    document.getElementById("mensagens").style.display = "none";
}

function salvarRegistro() {
    var nome = document.getElementById("nome").value;
    var senha = document.getElementById("senha").value;
    var email = document.getElementById("email").value;
    var alerta = document.getElementById("mensagens");
    console.log(nome);

    alerta.style.display = "block";

    if (nome && senha && email) {
        var dados = {
            nome: nome,
            senha: senha,
            email: email
        };

        localStorage.setItem("informacoes", JSON.stringify(dados));
        showMessage("Informações salvas com sucesso!", "#4CAF50");
        fecharModal();
    } else {
        showMessage("Preencha todos os campos antes de salvar.", "#f44336");
    }
}

function showMessage(message, color) {
    var msg = document.getElementById("mensagens");
    msg.innerHTML = message;
    const toastLiveExample = document.getElementById('liveToast');
    toastLiveExample.style.backgroundColor = color;
    toastLiveExample.style.display = "block";
}

function closeMessage() {
    const toastLiveExample = document.getElementById('liveToast')
    toastLiveExample.style.display = "none";
}


        // Função para realizar o login
        function realizarLogin() {
            var email = document.getElementById("email").value;
            var senha = document.getElementById("senha").value;
            var usuarios = JSON.parse(localStorage.getItem("usuarios"));

            if (usuarios) {
                var usuarioEncontrado = false;
                for (var i = 0; i < usuarios.length; i++) {
                    if (usuarios[i].email === email && usuarios[i].senha === senha) {
                        usuarioEncontrado = true;
                        break;
                    }
                }

                if (usuarioEncontrado) {
                    // Redirecionar para a página logada após o login bem-sucedido
                    window.location.href = "pagina_logada.html";
                } else {
                    showMessage("E-mail ou senha incorretos.", "#f44336");
                }
            } else {
                showMessage("Nenhum usuário cadastrado.", "#f44336");
            }
        }

        // Adicione esta função para mostrar uma mensagem
        function showMessage(message, color) {
            var msg = document.getElementById("mensagens");
            msg.innerHTML = message;
            const toastLiveExample = document.getElementById('liveToast');
            toastLiveExample.style.backgroundColor = color;
            toastLiveExample.style.display = "block";
        }

        // Adicione esta função para fechar a mensagem
        function closeMessage() {
            const toastLiveExample = document.getElementById('liveToast')
            toastLiveExample.style.display = "none";
        }