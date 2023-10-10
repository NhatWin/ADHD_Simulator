let COUNTDOWN_TIME = 300;

const countdownSpan = document.querySelector("#countdown");
const closeTest = document.querySelector("#test");
const finTest = document.querySelector("#end")

// Popup
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelector('#form')

//Questions
const question1= {
  q: "You are curious what year Lord of the Flies came out and can't start reading until you know.",
  answer: "1954"
}

const question2= {
  q: "",
  answer: ""
}

const question3= {
  q: "You forgot to do today's world. Do that before you continue https://wordlearchive.com/50",
  answer: "maxim"
}

const question4= {
  q: "You got board of reading and decided to take a break by playing a game of chess. what is the best move in chess notation",
  img:"./chess.png",
  answer: "Qxh7#"
}

const question5= {
  q: "",
  answer: ""
}

let questions = [question1,question2,question3,question4,question5]


// Timer
function countDown() {

  const countDownInterval = setInterval(function() {
    countdownSpan.textContent = COUNTDOWN_TIME;  COUNTDOWN_TIME--;

    if (COUNTDOWN_TIME < 0) {
      clearInterval(countDownInterval);
    }
    if (COUNTDOWN_TIME <= 0) {
      closeTest.style.setProperty("display", "none");
      finTest.style.setProperty("display", "block");
    }
  }, 300);
}

countDown();
openModal(modal)

closeModalButtons.addEventListener("submit", function(event){
  event.preventDefault();
  const answer = event.target.answer.value.toLowerCase()
  if(answer === questions[0].answer) {
    closeModal(modal)
  }else {
    alert("Wrong answer guess again")
  }
})


function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}