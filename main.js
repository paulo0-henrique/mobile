function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}
const listaDeTeclas=document.querySelectorAll(".tecla");
    
let contador= 0;
    
while (contador<listaDeTeclas.length) {
    
    const tecla=listaDeTeclas[contador];
    
    const instrumento tecla.classList [1];
    
    const idAudio =`#son_${instrumento}`;
    
        console.log (idAudio);
    
    tecla.onclick= function () {
     tocaSon(idAudio);
    }
    contador=contador+1;
    
    console.log(contador);
}