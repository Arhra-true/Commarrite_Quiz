// Create javascript function to store the selected answer and record user score.
//create variable to store user score, increment when correct answer selected
let userScore = 0;
 
/*
const answer1 = (document.querySelector('input[name="question1"]:checked').value === 'a')
console.log(answer1);

const answer2 = ;
const answer3 = ;
const answer4 = ;
const answer5 = ;
const answer6 =;
const answer7 = ;
const answer8 =;
const answer9 = ;
const answer10 = ;

console.log(answer1)

document.querySelector('input[name="question1"]:checked').value === 'a'
const correctAnswers = placeholder; 
*/



/* Each of the following functions will use querySelector to find the first element that matches the name and 
value for each correctly chosen answer and it's value. If the element name and value match it will
update the user score and for ensuring the code works, it will log this to the console each time. I have 
implemented a feature to disable the question regardless of which answer is submitted. This ensures
the user can't swap their chosen answer or keep clicking submit and potentially calling the ++ on userScore each
time (the button disables itself in the HTML file). */

function submitAnswer () {
    if (document.querySelector('input[name="question1"]:checked').value === 'a') {  
    userScore++;
    console.log(userScore); 
  }
  const answers = document.querySelectorAll('input[name="question1"]');
 answers.forEach(answer => {
   answer.disabled = true;
 }); 
}

///

function submitAnswer2 () {
    if (document.querySelector('input[name="question2"]:checked').value === 'c') {  
    userScore++;
    console.log(userScore);
  }
  const answers = document.querySelectorAll('input[name="question2"]');
 answers.forEach(answer => {
   answer.disabled = true;
 });
}

///

function submitAnswer3 () {
    if (document.querySelector('input[name="question3"]:checked').value === 'b') {  
    userScore++;
    console.log(userScore); 
  }
  const answers = document.querySelectorAll('input[name="question3"]');
 answers.forEach(answer => {
   answer.disabled = true;
 });
}

///

function submitAnswer4 () {
    if (document.querySelector('input[name="question4"]:checked').value === 'd') {  
    userScore++;
    console.log(userScore); 
  }
  const answers = document.querySelectorAll('input[name="question4"]');
 answers.forEach(answer => {
   answer.disabled = true;
 });
}

///

function submitAnswer5 () {
    if (document.querySelector('input[name="question5"]:checked').value === 'b') {  
    userScore++;
    console.log(userScore); 
  }
  const answers = document.querySelectorAll('input[name="question5"]');
 answers.forEach(answer => {
   answer.disabled = true;
 }); 
}

///

function submitAnswer6 () {
    if (document.querySelector('input[name="question6"]:checked').value === 'd') {  
    userScore++;
    console.log(userScore); 
  }
  const answers = document.querySelectorAll('input[name="question6"]');
 answers.forEach(answer => {
   answer.disabled = true;
 });
}

///

function submitAnswer7 () {
    if (document.querySelector('input[name="question7"]:checked').value === 'b') {  
    userScore++;
    console.log(userScore); 
  }
  const answers = document.querySelectorAll('input[name="question7"]');
 answers.forEach(answer => {
   answer.disabled = true;
 });
}

///

function submitAnswer8 () {
    if (document.querySelector('input[name="question8"]:checked').value === 'a') {  
    userScore++;
    console.log(userScore); 
  }
  const answers = document.querySelectorAll('input[name="question8"]');
 answers.forEach(answer => {
   answer.disabled = true;
 });
}
///

function submitAnswer9 () {
    if (document.querySelector('input[name="question9"]:checked').value === 'c') {  
    userScore++;
    console.log(userScore); 
  }
  const answers = document.querySelectorAll('input[name="question9"]');
 answers.forEach(answer => {
   answer.disabled = true;
 });
}

///

function submitAnswer10 () {
    if (document.querySelector('input[name="question10"]:checked').value === 'c') {  
    userScore++;
    console.log(userScore); 
  }
  const answers = document.querySelectorAll('input[name="question10"]');
 answers.forEach(answer => {
   answer.disabled = true;
 });
}




/* Decided to disbale the button after use, this way the answer is locked in and it stops repeated use of the button.


/* Function works as intended, no longer increments each time. 
I need to nest the variables locally for each question lest conflcits arise.
The button will need to lock the question otherwise the user could select each answer and the score will increment when they click submit for each option
*/  





// old code //


/*const selectAnswer = () => {
    if (document.querySelector('input[name="question1"]:checked').value === 'a') {
      userScore++; //increment score if correct answer selected}
     // console.log(userScore); Function works as intended, but will increment the score each time the user clicks on the answer.
}
};

console.log(userScore);

//create function to lock question once answer submitted and auto-scroll to next question */






const quizQuestions = [
  {
  question: "What is the one and only rule in the dark city?",
  answers: {
    A: "No psykers are permitted in the dark city!",
    B: "There are no rules in the dark city, fool!",
    C: "Thou shall not steal.",
    D: "Asdrubael Vect, the living muse and supreme overlord, commands all",
  },
  correctAnswer: "A"
  },
  {
  question: "Who is the leader of The Kabal Of The Poisoned Tongue?"
  }
]