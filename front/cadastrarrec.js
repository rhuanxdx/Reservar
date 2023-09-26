// Cabeçalho

const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})

// ----------

import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';

var form = document.querySelector("form");    

form.addEventListener("submit", function(e) {        
                                                    
    e.preventDefault();

    var recurso = document.querySelector("#recurso").value;
    var quantidade = document.querySelector("#quantidade").value;
    var espaco = document.querySelector("#espaco").value;
    var descricao = document.querySelector("#descricao").value;
        
    axios.post('https://reservar.glitch.me/cadastrarrec', {
        recurso: recurso,
        quantidade: quantidade,
        espaco: espaco,
        capacidade: capacidade,
        descricao: descricao
        
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

});