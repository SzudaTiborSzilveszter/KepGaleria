import { KEPEKLISTA } from "./adat.js";
import Kepek from "./Kepek.js";
import KiemeltKep from "./KiemeltKep.js";
import NagyKep from "./NagyKep.js";

const szuloELEM = document.querySelector(".kartyatarto");
const nagyKepELEM = document.querySelector(".kijelolt");

new KiemeltKep(KEPEKLISTA,szuloELEM);
new Kepek(KEPEKLISTA,szuloELEM);

window.addEventListener("kivalaszt", function(event) {
    nagyKepELEM.innerHTML=""
    new KiemeltKep(KEPEKLISTA[event.detail],nagyKepELEM)
    new NagyKep(event.detail,KEPEKLISTA,nagyKepELEM)
});