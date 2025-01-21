const countDown= document.getElementById(`countdown`)
const numberList = document.getElementById(`numbers-list`)
const answersForm = document.getElementById(`answers-form`)

function numeroRandom(){
   return Math.round(Math.random() * (99 - 1) + 1)
}
for (let i = 0; i < 5; i++) {
     const li = document.createElement(`li`)
     li.append(numeroRandom())
     console.log(numeroRandom())
     numberList.append(li)
}