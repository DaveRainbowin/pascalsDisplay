let s = 0; // second
let g = 0; // gram
let m = 0; // meter
let a = 0; // ampere
let k = 0; // kelvin
let mol = 0; // mol
let cd = 0; // candela
function time() {
  s++;
  get("second").innerHTML = `${s} s`;
}
function get(x) {
   return document.getElementById(x);
}
