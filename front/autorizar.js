
function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
  
  }
  
  function ciraLinha(usuario){
    
    let linha = document.createElement("tr")
    let tdNome = document.createElement("td")
    let tdEmail = document.createElement("td")
    let tdSenha = document.createElement("td")
    tdNome.innerHTML = usuario.nome
    tdEmail.innerHTML = usuario.email
    tdSenha.innerHTML = usuario.senha
  
    linha.appendChild(tdNome);
    linha.appendChild(tdEmail);
    linha.appendChild(tdSenha);

   


  
    return linha;
  }
  
  function main(){
    let data = fazGet("https://reservar.glitch.me/verusuarios")
    let usuarios = JSON.parse(data)
    let tabela = document.getElementById("tabela")
    
  
    usuarios.forEach(element =>{
      let linha = ciraLinha(element);
      tabela.appendChild(linha);
    }) 
   
  }
  
  main()
  
  
   
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const tabela = document.getElementById("tabela");
    const mensagemAutorizacao = document.getElementById("mensagem-autorizacao");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // valores do formulário
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;

        // nova linha na tabela
        const newRow = tabela.insertRow();
        newRow.innerHTML = `<td>${nome}</td><td>${email}</td><td>${senha}</td><td><button class="autorizar-button">Autorizar</button></td><td><button class="rejeitar-button">Rejeitar</button></td>`;

        // limpa o formulário
        form.reset();

        // botão de rejeição
        const rejeitarButton = newRow.querySelector(".rejeitar-button");
        rejeitarButton.addEventListener("click", function () {
            // remove a linha da tabela
            tabela.deleteRow(newRow.rowIndex);
        });

        // botão de autorização
        const autorizarButton = newRow.querySelector(".autorizar-button");
        autorizarButton.addEventListener("click", function () {
            // mensagem de autorização
            mensagemAutorizacao.style.display = "block";

            // remove a linha da tabela
            tabela.deleteRow(newRow.rowIndex);
        });
    });
});


