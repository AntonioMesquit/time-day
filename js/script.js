const horas = document.querySelector(".hr")
const minutos = document.querySelector(".min")
const segundos = document.querySelector(".seg")
const daynight = document.querySelector(".day-night");
const noite = document.querySelector(".s");
const body = document.querySelector("body")

daynight.addEventListener('click' , () => {
    daynight.classList.toggle("active")
    body.classList.toggle("active")
     
    
})


const tempo = setInterval(function time(){
    let horario = new Date();
    let hora = horario.getHours();
    let minuto = horario.getMinutes();
    let segundo = horario.getSeconds();
    let foto = document.querySelector(".z")

    if(hora < 10){
        hora = '0' + hora
    }

    if(minuto < 10){
        minuto = '0' + minuto
    }
    if(segundo < 10){
        segundo = '0' + segundo
    }

    if(hora >= 0 && hora <= 6){
        foto.src = 'img/madrugada.png'
        }
        else if(hora >= 6 && hora <= 12){
            foto.src = 'img/dia.png'
            }
            else if(hora >= 12 && hora <= 18){
                foto.src = 'img/manha.png'
                }
                else if(hora >= 18 && hora <= 0){
                    foto.src = 'img/noite.png'
                    }
    

    horas.textContent = hora + ':'
    minutos.textContent = minuto + ':'
    segundos.textContent = segundo + '.';
})