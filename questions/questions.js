// Create javascript function to store the selected answer and record user score.
//create variable to store user score, increment when correct answer selected
let userScore = 0;

const answer1 = document.querySelector('input[name="question1"]:checked').value === 'a';
const answer2 = document.querySelector('input[name="question2"]:checked').value === 'c';



const correctAnswers = placeholder; 


function submitAnswer () {
    if (document.querySelector('input[name="question1"]:checked').value === 'a') {  
    userScore++;
    console.log(userScore); 
  } 
}
/* Need a way to streamline these two functions. */
/*
function disableQuestion () {
 const answers = document.querySelectorAll('input[name="question1"]');
 answers.forEach(answer => {
   answer.disabled = true;
 });  
};
*/



function submitAnswer2 () {
    if (document.querySelector('input[name="question2"]:checked').value === 'c') {  
    userScore++;
    console.log(userScore); 
  } 
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