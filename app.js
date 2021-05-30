import { DATA } from './data.js'

const MAIN4DATA = Object.values(DATA)

const randomBTN = document.getElementById("firstrandom_btn")
const resultPara = document.getElementsByClassName("randomResult")
const detailResult = document.getElementById("detail-result")

const secRandBTB = document.getElementById("secrandom_btn")
const sexRandFactor = document.getElementsByClassName("random2")
const resultTriviaPara = document.getElementsByClassName("randomResult2")

randomBTN.addEventListener('click', random4)
secRandBTB.addEventListener('click', mixRandom)

function random4(){
    detailResult.style.display = "block"
    detailResult.innerHTML = ""
    for(let i=0; i<4;i++){        
        if ( i == 1) {
            let randomZodiac = [Object.keys(MAIN4DATA[i])[Math.floor(Math.random()*Object.keys(MAIN4DATA[i]).length)]]           
            resultPara[i].innerHTML = MAIN4DATA[i][randomZodiac].typeName

            detailResult.innerHTML += "<b>"+MAIN4DATA[1][randomZodiac].typeName+"<b>"
            detailResult.innerHTML += "<br> 🔺 "+MAIN4DATA[1][randomZodiac].positiveTrait
            detailResult.innerHTML += "<br> 🔻 "+MAIN4DATA[1][randomZodiac].negativeTrait

        }else if(i == 2 ){
            let indexRandMBTI = [Object.keys(MAIN4DATA[i])[Math.floor(Math.random()*Object.keys(MAIN4DATA[i]).length)]]
            resultPara[i].innerHTML = MAIN4DATA[i][indexRandMBTI].typeName

            detailResult.innerHTML += "<br><br><b>"+MAIN4DATA[2][indexRandMBTI].typeName+"</b>"
            detailResult.innerHTML += "<br>"+ MAIN4DATA[2][indexRandMBTI].overview
        }else
            resultPara[i].innerHTML = MAIN4DATA[i][Object.keys(MAIN4DATA[i])[Math.floor(Math.random()*Object.keys(MAIN4DATA[i]).length)]]        
    }       
}

function mixRandom(){
    
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
     navigator.serviceWorker.register('../sw.js').then( () => {
      console.log('Service Worker Registered')
     })
   })
  }