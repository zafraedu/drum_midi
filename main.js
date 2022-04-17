//funciones
function tocaSomPom() {
  document.querySelector("#som_tecla_pom").play();
}
function tocaSomClap() {
  document.querySelector("#som_tecla_clap").play();
}
function tocaSomTim() {
  document.querySelector("#som_tecla_tim").play();
}
function tocaSomPuff() {
  document.querySelector("#som_tecla_puff").play();
}
function tocaSomSplash() {
  document.querySelector("#som_tecla_splash").play();
}
function tocaSomToim() {
  document.querySelector("#som_tecla_toim").play();
}
function tocaSomPsh() {
  document.querySelector("#som_tecla_psh").play();
}
function tocaSomTic() {
  document.querySelector("#som_tecla_tic").play();
}
function tocaSomTom() {
  document.querySelector("#som_tecla_tom").play();
}

//teclas
const teclaPom = document.querySelector(".tecla_pom");
teclaPom.onclick = function () {
  tocaSomPom();
};
const teclaClap = document.querySelector(".tecla_clap");
teclaClap.onclick = function () {
  tocaSomClap();
};

const teclaTim = document.querySelector(".tecla_tim");
teclaTim.onclick = function () {
  tocaSomTim();
};

const teclaPuff = document.querySelector(".tecla_puff");
teclaPuff.onclick = function () {
  tocaSomPuff();
};

const teclaSplash = document.querySelector(".tecla_splash");
teclaSplash.onclick = function () {
  tocaSomSplash();
};

const teclaToim = document.querySelector(".tecla_toim");
teclaToim.onclick = function () {
  tocaSomToim();
};

const teclaPsh = document.querySelector(".tecla_psh");
teclaPsh.onclick = function () {
  tocaSomPsh();
};

const teclaTic = document.querySelector(".tecla_tic");
teclaTic.onclick = function () {
  tocaSomTic();
};

const teclaTom = document.querySelector(".tecla_tom");
teclaTom.onclick = function () {
  tocaSomTom();
};

//teclado
window.onkeypress = function (e) {
  if (e.code == "KeyU") {
    tocaSomPom();
  }
  if (e.code == "KeyI") {
    tocaSomClap();
  }
  if (e.code == "KeyO") {
    tocaSomTim();
  }
  if (e.code == "KeyJ") {
    tocaSomPuff();
  }
  if (e.code == "KeyK") {
    tocaSomSplash();
  }
  if (e.code == "KeyL") {
    tocaSomToim();
  }
  if (e.code == "KeyM") {
    tocaSomPsh();
  }
  if (e.code == "Comma") {
    tocaSomTic();
  }
  if (e.code == "Period") {
    tocaSomTom();
  }
};
