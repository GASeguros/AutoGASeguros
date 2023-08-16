var Nome;
var Celular;
var Placa;
var CEP;
var Email;
var loader = document.querySelector(".loader");
var noti = document.querySelector(".notifications-container");



function aparecerNoti(){
    noti.style.opacity = "1";
    setTimeout(()=>{
    noti.style.opacity = "0";
    },15000)
}

function API(){
        // URL da API
        const apiUrl = 'https://backend.botconversa.com.br/api/v1/webhooks-automation/catch/45378/CqorbWFG4Jj8/';

        // Dados a serem enviados na requisição POST (caso necessário)
        var data = {
            Nome: Nome,
            Celular: Celular,
            Placa: Placa,
            CEP: CEP,
            Email: Email
            // Adicione aqui outros dados conforme necessário
        };

        // Configurações para a requisição POST
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        // Função para fazer a requisição Fetch POST
        function fazerRequisicao() {
            fetch(apiUrl, requestOptions)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Erro na requisição');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    // Aqui você pode manipular os dados recebidos da API conforme necessário
                })
                .catch(error => {
                    console.error('Erro:', error);
                });
        }
        return fazerRequisicao()
}


        // Chama a função de fazer a requisição quando a página carregar
        // window.onload = fazerRequisicao;

        function limparFormulario() {
            document.getElementById("Nome").value = "";
            document.getElementById("Celular").value = "";
            document.getElementById("Placa").value = "";
            document.getElementById("CEP").value = "";
            document.getElementById("Email").value = "";
        }
        
        function SalvarDados() {
            Nome = document.getElementById("Nome").value;
            Celular = document.getElementById("Celular").value;
            Placa = document.getElementById("Placa").value;
            CEP = document.getElementById("CEP").value;
            Email = document.getElementById("Email").value;
        
            API();
            limparFormulario(); // Chama a função para limpar o formulário após enviar os dados
        }
        
        const enviarBtn = document.querySelector(".botao");
        enviarBtn.addEventListener("click", ()=>{
            SalvarDados()
            aparecerNoti()
        });