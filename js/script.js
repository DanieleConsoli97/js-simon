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
let count = parseInt("5")

const contatore = setInterval ( () =>{
  count--
  countDown.innerHTML= count
    if(count === 0){
      const zeroShow = setInterval(()=>{
        countDown.classList.add(`d-none`)
        clearInterval(contatore)
        clearInterval(zeroShow)
        answersForm.classList.remove(`d-none`)
      },1000)
      
    }
}, 1000)