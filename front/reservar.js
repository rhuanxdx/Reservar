document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var data_inicio = document.querySelector("#data_inicio").value;
    var data_final = document.querySelector("#data_final").value;
    var horario_inicio = document.querySelector("#horario_inicio").value;
    var horario_final = document.querySelector("#horario_final").value;
    var finalidade = document.querySelector("#finalidade").value;

    const urlParams = new URLSearchParams(window.location.search);
    const idespaço_fisico = urlParams.get('id');

    axios
      .post("https://rotas-pi.glitch.me/reservar", {
        idespaço_fisico: idespaço_fisico,
        data_inicio: data_inicio,
        data_final: data_final,
        horario_inicio: horario_inicio,
        horario_final: horario_final,
        finalidade: finalidade,
      })
      .then(function (response) {
        console.log(response);
        alert("Reserva feita com sucesso!");
      })
      .catch(function (error) {
        console.log(error);
        alert("Ocorreu um erro ao fazer a reserva.");
      });
  });
});
