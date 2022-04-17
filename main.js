function tocaSom(idElementAudio) {
  document.querySelector(idElementAudio).play();
}
const listaDeTeclas = document.querySelectorAll(".tecla");

let contador = 0;
while (contador < 9) {
  const instrumento = listaDeTeclas[contador].classList[1];
  const idAudio = `#som_${instrumento}`;
  listaDeTeclas[contador].onclick = function () {
    tocaSom(idAudio);
  };
  contador = contador + 1;
}
