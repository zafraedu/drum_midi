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
  tocaSomTim();
};

const teclaTom = document.querySelector(".tecla_tom");
teclaTom.onclick = function () {
  tocaSomTom();
};
