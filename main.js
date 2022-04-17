function tocaSom(idElementAudio) {
  document.querySelector(idElementAudio).play();
}
const listaDeTeclas = document.querySelectorAll(".tecla");
const listaDeTeclasPresionadas = new Array(
  "KeyU",
  "KeyI",
  "KeyO",
  "KeyJ",
  "KeyK",
  "KeyL",
  "KeyM",
  "Comma",
  "Period"
);
for (i = 0; i < listaDeTeclas.length; i++) {
  const teclaPresionada = listaDeTeclasPresionadas[i];
  const tecla = listaDeTeclas[i];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;

  tecla.addEventListener("click", () => {
    tocaSom(idAudio);
  });
  window.addEventListener("keypress", (e) => {
    if (e.code == teclaPresionada) {
      tocaSom(idAudio);
    }
  });
  console.log(i, tecla, teclaPresionada);
}
