window.onload = function() {
let accessOn = localStorage.getItem("accessOn")
    if (accessOn) {
        document.body.style.fontFamily = "serif"
    }
}

const questions = [ //array of questions that are each an object containing an array that also hs objects with two properties.
  {
  question: "What is the one and only rule in the dark city?",
   answers: [
     {text: "No psykers are permitted in the dark city!", correct: true},
     {text: "There are no rules in the dark city, fool!", correct: false},
     {text: "Thou shall not steal.", correct: false},
     {text: "Asdrubael Vect, the living muse and supreme overlord, commands all", correct: false},
            ]  
  },
  {
  question: "Who is the leader of The Kabal Of The Poisoned Tongue?",
  answers: [
    {text: "Asdrubael Vect", correct: false},
    {text: "Lady Malys", correct: true},
    {text: "Malixian The Mad", correct: false},
    {text: "Baron Sathonyx", correct: false},
           ]
  },
  {
  question: "What does Kheradruakh translate to in low gothic?",
  answers: [
    {text: "The end times", correct: false},
    {text: "He who hunts heads", correct: true},
    {text: "She who thirsts", correct: false},
    {text: "The war in heaven", correct: false},
       ]
  },
  {
  question: "Who is the Queen of Knives?",
  answers: [
    {text: "Yctria Ghularis", correct: false},
    {text: "Bloody Baroness", correct: false},
    {text: "Kruellagh The Vile", correct: false},
    {text: "Lelith Hesperax", correct: true},
           ]
  },
   {
  question: "Which Haemonculus Coven does Urien Rakarth lead?",
  answers: [
    {text: "The Dark Creed", correct: false},
    {text: "The Everspiral", correct: false},
    {text: "The Prophets Of Flesh", correct: true},
    {text: "The Coven Of Twelve", correct: false},
        ]
  },
  {
  question: "Hexrifles contain a weaponised virus, which is it?",
  answers: [
    {text: "The Flesh Eater virus", correct: false},
    {text: "The Obliterator virus", correct: false},
    {text: "The Walking pox", correct: false},
    {text: "The Glass plague", correct: true},
           ]
  },
  {
  question: "The Haemonculus Viscount Syndriq was killed in a humilliating way during the raid of Parocheus, his fellow Haemonculi saw it fit to re-make him as a 'useful' tool, what was Syndriq turned in to?",
  answers: [
    {text: "Syndriq's sump", correct: true},
    {text: "Syndriq's lump", correct: false},
    {text: "Syndriq's hammer", correct: false},
    {text: "Syndriq's rack", correct: false},
           ]
  },
  {
  question: "An Aeldari maiden world was stolen from realspace by the combined effort of several Haemonculus covens, which planet was it?",
  answers: [
    {text: "Cadia", correct: false},
    {text: "Lethidia", correct: true},
    {text: "Armageddon", correct: false},
    {text: "Kronus", correct: false},
    ]
  },
  {
  question: "Who holds the title 'Executioner' within the Incubi order?",
  answers: [
    {text: "Morr", correct: false},
    {text: "Bechareth", correct: false},
    {text: "Drazhar", correct: true},
    {text: "The Dark Father", correct: false},
    ]
  },
  {
    question: "How many arms does Kheradruakh have?",
  answers: [
    {text: "4", correct: true},
    {text: "2", correct: false},
    {text: "1", correct: false},
    {text: "3", correct: false},
    ]
  },
]

const questionsRandomized = questions.sort(() => Math.random() - 0.5); //randomizes the questions array.
const answersRandomized = questionsRandomized.map(question => question.answers.sort(() => Math.random() - 0.5)); //randomizes the answers within each question.

///

const questionElement = document.getElementById('question'); //holds the questions text
const answerButtonsElement = document.getElementById('answer-buttons'); //each button will hold a answer for the given question
const nextButton = document.getElementById('next-btn'); //button to submit answer and move onto next question

///

let currentQuestionIndex = 0;



///

function startQuiz() {
  currentQuestionIndex = 0;
  userScore = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {

  if (currentQuestionIndex <= 8) {
    nextButton.addEventListener("click", nextAnswer); ///adds event listener each time, making it more sure fire that it removes it when told to.
  } else {
    nextButton.innerHTML = "Finish"; //changes button text, meaning I can use the same button for next and finish
  };
  
  ///
  
  let currentQuestion = questionsRandomized[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question; //appends question number
  resetState(); //Placing the resetState here solved the issue of the next button going 1 past the actual number of questions

 currentQuestion.answers.forEach(answer => {
    const button = document.createElement('button');
    const brake = document.createElement('br'); //creates a break element to go between each button
    answerButtonsElement.appendChild(brake); //appends the break element to the answer buttons div
    button.innerHTML = answer.text; //sets a button text to what each answer is.
    button.classList.add('btn'); //adds btn class to each button
    answerButtonsElement.appendChild(button);  
    if (answer.correct) { //checks truethy value of correct answer
      button.dataset.correct = answer.correct; //adds the data attribute to the correct answer button.
    } else {
      button.dataset.correct = false; //adds the data attribute to the incorrect answer buttons.
    }
    button.addEventListener("click", handleSubmit) //adds onclick event to each button
  }
)};



function handleSubmit(e) {
  const selectedBtn = e.target; //the button that was clicked
  const isCorrect = selectedBtn.dataset.correct === "true"; //checks if the clicked button is the correct answer
  if (isCorrect) {
    selectedBtn.classList.add('correct');
    selectedBtn.classList.add('selected');
    userScore++;
  } else {
    selectedBtn.classList.add('incorrect');
    selectedBtn.classList.add('selected');
  }
  
  Array.from(answerButtonsElement.children).forEach(button => { //disables all buttons after one has been clicked
    if (button.dataset.correct === "true") {
      button.classList.add('correct'); //shows the correct answer after one has been selected
    }
    if (button.dataset.correct === "false") {
      button.classList.add('incorrect'); //shows the incorrect answers after one has been selected
    }
    button.disabled = true;
  });
  
  
}

function resetState() {
  while (answerButtonsElement.firstChild) { //removes all answer buttons before next question is shown.
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}


///

function showResult() {
 window.location.href = "../results/resultsPage.html"; //redirects to results page
 localStorage.setItem("userScore", userScore)
}


function nextAnswer() {
  currentQuestionIndex++;
  if (currentQuestionIndex === 9) {
    nextButton.removeEventListener("click", nextAnswer); ///removes the next button event listener so it doesn't try to tirgger
  }
  if (currentQuestionIndex === 9) {
    nextButton.addEventListener("click", showResult); //adds the showResult event listener to the next button
  }
  showQuestion();

};

startQuiz();
