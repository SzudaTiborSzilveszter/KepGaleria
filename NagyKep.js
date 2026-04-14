import KiemeltKep from "./KiemeltKep.js";

export default class NagyKep{
    #aktIndex;
    #lista=[];
    constructor(index, lista, nagykepelem){
        this.#aktIndex=index;
        this.#lista=lista;
        this.nagykepelem=nagykepelem;
        this.balgombELEM=balgombELEM;
        this.jobbgombELEM=jobbgombELEM;

        this.balgombELEM.addEventListener("click",function(event){
            this.#aktIndex--;
        })

        this.jobbgombELEM.addEventListener("click",function(event){
            this.#aktIndex++;
        })
    }
    megjelenit(){
        new KiemeltKep(this.#lista[this.#aktIndex],this.nagykepelem)
    }
}