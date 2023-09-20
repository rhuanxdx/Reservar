import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';

var form = document.querySelector("form");    

form.addEventListener("submit", function(e) {        
                                                    
    e.preventDefault();

    var nome = document.querySelector("#nome").value;
    var descrição = document.querySelector("#descrição").value;
    var numero_sala = document.querySelector("#numero_sala").value;
    var capacidade = document.querySelector("#capacidade").value;
    var andar = document.querySelector("#andar").value;
    var predio = document.querySelector("#predio").value;
    var horarios_disponiveis = document.querySelector("#horarios_disponiveis").value;
    var largura = document.querySelector("#largura").value;
    var comprimento = document.querySelector("#comprimento").value;
    var area = document.querySelector("#area").value;


        
    axios.post('https://reservar.glitch.me/cadastrarespaco', {
        nome: nome,
        descrição: descrição,
        numero_sala: numero_sala,
        capacidade: capacidade,
        andar: andar,
        predio: predio,
        horarios_disponiveis: horarios_disponiveis,
        largura: largura,
        comprimento: comprimento,
        area: area
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

});