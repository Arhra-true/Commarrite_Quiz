
const questions = [ //array of questions that are each an object containing an array that also hs objects with two properties.
  {
  question: "What is the one and only rule in the dark city?",
   answers: [
     {text: "A: No psykers are permitted in the dark city!", correct: true},
     {text: "B: There are no rules in the dark city, fool!", correct: false},
     {text: "C: Thou shall not steal.", correct: false},
     {text: "D: Asdrubael Vect, the living muse and supreme overlord, commands all", correct: false},
            ]  
  },
  {
  question: "Who is the leader of The Kabal Of The Poisoned Tongue?",
  answers: [
    {text: "A: Asdrubael Vect", correct: false},
    {text: "B: Lady Malys", correct: true},
    {text: "C: Malixian The Mad", correct: false},
    {text: "D: Baron Sathonyx", correct: false},
           ]
  },
  {
  question: "What does Kheradruakh translate to in low gothic?",
  answers: [
    {text: "A: The end times", correct: false},
    {text: "B: He who hunts heads", correct: true},
    {text: "C: She who thirsts", correct: false},
    {text: "D: The war in heaven", correct: false},
       ]
  },
  {
  question: "Who is the Queen of Knives?",
  answers: [
    {text: "A: Yctria Ghularis", correct: false},
    {text: "B: Bloody Baroness", correct: false},
    {text: "C: Kruellagh The Vile", correct: false},
    {text: "D: Lelith Hesperax", correct: true},
           ]
  },
   {
  question: "Which Haemonculus Coven does Urien Rakarth lead?",
  answers: [
    {text: "A: The Dark Creed", correct: false},
    {text: "B: The Everspiral", correct: false},
    {text: "C: The Prophets Of Flesh", correct: true},
    {text: "D: The Coven Of Twelve", correct: false},
        ]
  },
  {
  question: "Hexrifles contain a weaponised virus, which is it?",
  answers: [
    {text: "A: The Flesh Eater virus", correct: false},
    {text: "B: The Obliterator virus", correct: false},
    {text: "C: The Walking pox", correct: false},
    {text: "D: The Glass plague", correct: true},
           ]
  },
  {
  question: "The Haemonculus Viscount Syndriq was killed in a humilliating way during the raid of Parocheus, his fellow Haemonculi saw it fit to re-make him as a 'useful' tool, what was Syndriq turned in to?",
  answers: [
    {text: "A: Syndriq's sump", correct: true},
    {text: "B: Syndriq's lump", correct: false},
    {text: "C: Syndriq's hammer", correct: false},
    {text: "D: Syndriq's rack", correct: false},
           ]
  },
  {
  question: "An Aeldari maiden world was stolen from realspace by a combined effort of several Haemonculus covens lead by Urien Rakarth, which planet was it?",
  answers: [
    {text: "A: Cadia", correct: false},
    {text: "B: Lethidia", correct: true},
    {text: "C: Armageddon", correct: false},
    {text: "D: Kronus", correct: false},
    ]
  },
  {
  question: "Who holds the title 'Executioner' within the Incubi order?",
  answers: [
    {text: "A: Morr", correct: false},
    {text: "B: Bechareth", correct: false},
    {text: "C: Drazhar", correct: true},
    {text: "D: The Dark Father", correct: false},
    ]
  },
  {
    question: "How many arms does Kheradruakh have?",
  answers: [
    {text: "A: 4", correct: true},
    {text: "B: 2", correct: false},
    {text: "C: 1", correct: false},
    {text: "D: 3", correct: false},
    ]
  },
]

const questionsRandomized = questions.sort(() => Math.random() - 0.5); //randomizes the questions array.

///

const questionElement = document.getElementById('question'); //holds the questions text
const answerButtonsElement = document.getElementById('answer-buttons'); //each button will hold a answer for the given question
const nextButton = document.getElementById('next-btn'); //button to submit answer and move onto next question

///

let currentQuestionIndex = 0;
let userScore = 0;

///

function startQuiz() {
  currentQuestionIndex = 0;
  userScore = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  let currentQuestion = questionsRandomized[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question; //appends question number
  resetState(); //Placing the resetState here solved the issue of the next button going 1 past the actual number of questions

 currentQuestion.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerHTML = answer.text; //sets a button text to what each answer is.
    button.classList.add('btn'); //adss btn class to each button
    answerButtonsElement.appendChild(button);  
    if (answer.correct) { //checks truethy value of correct answer
      button.dataset.correct = answer.correct; //adds the data attribute to the correct answer button.
    }
    button.addEventListener("click", handleSubmit) //adds onclick event to each button

});



function handleSubmit(e) {
  const selectedBtn = e.target; //the button that was clicked
  const isCorrect = selectedBtn.dataset.correct === "true"; //checks if the clicked button is the correct answer
  if (isCorrect) {
    selectedBtn.classList.add('correct'); 
    userScore++;
  } else {
    selectedBtn.classList.add('incorrect');
  }
  Array.from(answerButtonsElement.children).forEach(button => { //disables all buttons after one has been clicked
    if (button.dataset.correct === "true") {
      button.classList.add('correct'); //shows the correct answer after one has been selected
    }
    button.disabled = true;
  });
  console.log(userScore);
}

function resetState() {
  while (answerButtonsElement.firstChild) { //removes all answer buttons before next question is shown.
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}
}

///


function nextAnswer() {
  currentQuestionIndex++;
  showQuestion();
}

console.log(userScore);
console.log(questionsRandomized);



startQuiz();