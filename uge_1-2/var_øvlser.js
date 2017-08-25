var navn = "jens";
var alder = 32;
var tekst = "mit navn er" + " " + navn + " " + "og jeg er" + " " + alder + " " + "år gammel";

var moms = 1.25;
var pris_uden_moms = 400;

var pris_med_moms = moms * pris_uden_moms;
var pris_uden_moms2 = pris_med_moms / moms; 

var forste = 10;
var anden = 20;

var tal1 = forste + forste;
var tal2 = anden - forste;


console.log(tekst);
console.log(pris_med_moms);
console.log(pris_uden_moms2);
console.log(tal1);
console.log(tal2);