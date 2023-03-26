import { DATA } from './data.js'

const MAIN_DATA = Object.values(DATA)

const quickRandomBtn = document.getElementById("quickRandomBtn")
const resultElm = document.getElementsByClassName("random-result")
const detailResult = document.getElementById("detail-result")

const customRandomBtn = document.getElementById("customRandomBtn")
const sexRandFactor = document.getElementsByClassName("randomResult2")
const resultTriviaElm = document.getElementsByClassName("randomResult2")

quickRandomBtn.addEventListener('click', quickRandom)
customRandomBtn.addEventListener('click', mixRandom)

function quickRandom(){
    detailResult.style.display = "block"
    detailResult.innerHTML = ""
    for(let i=0; i<4;i++){        
        if ( i == 1) {
            let randomZodiac = [Object.keys(MAIN_DATA[i])[Math.floor(Math.random()*Object.keys(MAIN_DATA[i]).length)]]           
            resultElm[i].innerHTML = MAIN_DATA[i][randomZodiac].typeNameMAIN_DATA

            detailResult.innerHTML += "<b>"+MAIN_DATA[1][randomZodiac].typeName+"<b>"
            detailResult.innerHTML += "<br> 🔺 "+MAIN_DATA[1][randomZodiac].positiveTrait
            detailResult.innerHTML += "<br> 🔻 "+MAIN_DATA[1][randomZodiac].negativeTrait

        }else if(i == 2 ){
            let indexRandMBTI = [Object.keys(MAIN_DATA[i])[Math.floor(Math.random()*Object.keys(MAIN_DATA[i]).length)]]
            resultElm[i].innerHTML = MAIN_DATA[i][indexRandMBTI].typeName

            detailResult.innerHTML += "<br><br><b>"+MAIN_DATA[2][indexRandMBTI].typeName+"</b>"
            detailResult.innerHTML += "<br>"+ MAIN_DATA[2][indexRandMBTI].overview
            detailResult.innerHTML += "<br> 🔺 "+MAIN_DATA[2][indexRandMBTI].positiveTrait
            detailResult.innerHTML += "<br> 🔻 "+MAIN_DATA[2][indexRandMBTI].negativeTrait
        }else
            resultElm[i].innerHTML = MAIN_DATA[i][Object.keys(MAIN_DATA[i])[Math.floor(Math.random()*Object.keys(MAIN_DATA[i]).length)]]        
    }       
}

function mixRandom(){
    // WIP
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
     navigator.serviceWorker.register('../sw.js').then( () => {
      console.log('Service Worker Registered')
     })
   })
  }
