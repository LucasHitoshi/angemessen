/**
 * Funcionalidades:
 * - Mostrar mensagem de erro se o usuário errar o login;
 * - Mostarr mensagem de sucesso se o usuário fazer logout.
 */

const urlQueryString = window.location.href.split("?")[1];

if (urlQueryString) {
    const queryStringParams = urlQueryString.split("=");
    
    if (queryStringParams[0] === "err") {  // Exec se houve erro no login
        if (queryStringParams[1] === "true") {
            window.alert("Login mal sucedido: Tente novamente.");
        }
    } else if (queryStringParams[0] === "logout") {  // Exec se o usuário fez logout
        if (queryStringParams[1] === "true") {
            window.alert("Você fez logout com sucesso!");
        }
    } else if (queryStringParams[0] === "sign") {  // Exec se o usuário fez logout
        if (queryStringParams[1] === "true") {
            window.alert("Saudações! A Angemessen agradece!!");
        }
    } else if (queryStringParams[0] === "err_email") {  // Exec se o usuário fez logout
        if (queryStringParams[1] === "true") {
            window.alert("O email selecionado não está disponível ou não é válido.");
        }
    } else if (queryStringParams[0] === "err_pw") {  // Exec se o usuário fez logout
        if (queryStringParams[1] === "true") {
            window.alert("As senhas não são válidas ou não são iguais.");
        }
    }
}

console.log(urlQueryString);
