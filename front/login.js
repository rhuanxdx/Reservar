import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';

var form = document.querySelector("form");    

form.addEventListener("submit", function(e) {        
                                                    
    e.preventDefault();
    
    var email = document.querySelector("#email").value;     
    var senha = document.querySelector("#senha").value;


    axios.post('https://reservar.glitch.me/loginusuarios', {
      email: email,
      senha: senha
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
});
    
