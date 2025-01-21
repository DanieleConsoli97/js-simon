const countDown = document.getElementById(`countdown`);
const numberList = document.getElementById(`numbers-list`);
const answersForm = document.getElementById(`answers-form`);
const inputGroup = document.getElementById(`input-group`);
const bottone = document.getElementsByClassName("btn")[0];
const messaggio = document.getElementById(`message`);
let numertiIndovinati = 0;
function numeroRandom() {
  return Math.round(Math.random() * (50 - 1) + 1);
}
for (let i = 0; i < 5; i++) {
  const li = document.createElement(`li`);
  li.append(numeroRandom());
  numberList.append(li);
}
let count = parseInt("5");

const contatore = setInterval(() => {
  count--;
  countDown.innerHTML = count;
  if (count === 0) {
    const zeroShow = setInterval(() => {
      countDown.classList.add(`d-none`);
      clearInterval(contatore);
      clearInterval(zeroShow);
      answersForm.classList.remove(`d-none`);
    }, 1000);
  }
}, 1000);
bottone.addEventListener("click", () => {
  let input = inputGroup.querySelectorAll(`.form-control`);
  let numeriGenerati = document.querySelectorAll(`ul>li`);
  
  for (let i = 0; i < numeriGenerati.length; i++) {
    for (let j = 0; j < input.length; j++) {
      if (numeriGenerati[i].innerText === input[j].value) {
        numertiIndovinati++;
      }
    }
  }
  messaggio.innerHTML = `Hai indovinato ${numertiIndovinati} numeri`;
})

