const userName = document.querySelector("#user-name");
const userEmail = document.querySelector("#user-email");
const userCPF = document.querySelector("#user-cpf");
const userCardName = document.querySelector("#user-card-name");
const userCardNumber = document.querySelector("#user-card-number");
const API_URI = "http://localhost:3000/api/user/session"
const userInfoRequest = new Request(API_URI, { method: "GET" });

const userInfo = fetch(userInfoRequest)
    .then(response => response.json())
    .then(response => {
        console.log(response);

        userName.innerHTML = `${response.nome} ${response.sobrenome}`;
        userEmail.innerHTML = response.email;
        userCPF.innerHTML = response.cpf || "Não informado";
        userCardName.innerHTML = response.cardNumber || "Não informado";
        userCardNumber.innerHTML = response.cpfName || "Não informado";
    });




/* 

user-cpf
user-card
user-card


<main class="main-profile-wrapper">
    <figure class="user-photo">
        <img src="http://localhost:3000/img/mano.png" alt="Test Placeholder">
    </figure>
    <div class="user-info-wrapper">
        <span class="profile-area-title">Perfil do usuário</span>
        <span id="user-name">Mano</span>
        <span class="user-class">Membro cadastrado</span>
        <span id="user-email" class="censored-info">el_mano_angemessiano@ggmail.com</span>
        <div class="operation-wrapper">
            <button id="log-out">
                Log-out
            </button>
            <button id="change-password">
                Mudar senha
            </button>
        </div>
        <div class="redirection-wrapper">
            <a href="http://localhost:3000/carrinho">Carrinho</a>
            <a href="http://localhost:3000/historico">Histórico</a>
            <a href="http://localhost:3000/favoritos">Favoritos</a>
        </div>
        <div class="personal-data">
            <span class="profile-area-title">Dados pessoais</span>
            <span class="user-cpf">135.115.300-07</span>
            <span class="user-card-name">El Manolo</span>
            <span class="user-card-number">5450-9080-8467-8247</span>
        </div>
    </div>
</main>
*/