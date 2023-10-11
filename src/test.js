let COUNTDOWN_TIME = 180;
let QUESTION_TRACKER = 0;

const countdownSpan = document.querySelector("#countdown");
const closeTest = document.querySelector("#test");
const closeStart = document.querySelector("#start");
const finTest = document.querySelector("#end");
const displayInteruption = document.querySelector("h3");
const startTest = document.querySelector("#startTest");
const puzzle = document.querySelector("#chess")

// Popup
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelector('#form')

//Questions
const question1= {
  q: "You are curious what year Lord of the Flies came out and can't start reading until you know.",
  answer: "1954"
}

const question2= {
  q: "You just remembered an economics report stating the US had the highest grossing GDP this year and made you wonder who was the second.",
  answer: "china"
}

const question3= {
  q: "You forgot to do today's world. Do that before you continue >>> https://wordlearchive.com/50 ",
  answer: "maxim"
}

const question4= {
  q: "You got board of reading and decided to take a break by playing a game of chess. what is the best move in chess notation for white? (ex: Rd4#)",
  img:"./chess1.png",
  answer: "bb5#"
}

const question5= {
  q: "You want to play another chess game. What is the best move in chess notation for black? (ex: Rd4#)",
  img: "./chess2.png",
  answer: "qd3#"
}

const question6= {
  q: "test question",
  answer: "1"
}

let questions = [question1,question2,question3,question4,question5,question6]

displayInteruption.append(questions[QUESTION_TRACKER].q)

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
      closeModal(modal)
    }
  }, 1000);
}

function questionTimer() {
  let INTERUPTION_INTERVAL = 15;
  const countDownInterval = setInterval(function() {
    INTERUPTION_INTERVAL--;
    if(INTERUPTION_INTERVAL <0 ) {
      clearInterval(countDownInterval);
    }
    if(INTERUPTION_INTERVAL <=0) {
      openModal(modal)
    }
  },100);
}

startTest.addEventListener("click", function(event){
  closeStart.style.setProperty("display", "none");
  closeTest.style.setProperty("display", "block");
  countDown();
  questionTimer();
})

closeModalButtons.addEventListener("submit", function(event){
  event.preventDefault();
  const answer = event.target.answer.value.toLowerCase()
  if(answer === questions[QUESTION_TRACKER].answer) {
    closeModal(modal)
    QUESTION_TRACKER++
    displayInteruption.textContent = questions[QUESTION_TRACKER].q
    if(questions[QUESTION_TRACKER].img != null){
      puzzle.src = questions[QUESTION_TRACKER].img
    } else {
      puzzle.src = ""
    }
    questionTimer()
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