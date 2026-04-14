export default class KiemeltKep {
    #obj = {};
    constructor(obj = { src, cim, leiras }, szuloElem) {
        this.#obj = obj;
        this.szuloElem = szuloElem;
        this.megjelenit();
    }
    megjelenit() {
        let kod = `<button>BAL</button><div class="kartya">
            <img src="${this.#obj.src}" alt="${this.#obj.cim}">
            <h3>${this.#obj.cim}</h3>
            <p>${this.#obj.leiras}</p>
        </div><button>JOBB</button>`;
        this.szuloElem.insertAdjacentHTML("beforeend", kod);
    }
}
