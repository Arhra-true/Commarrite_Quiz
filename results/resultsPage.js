
window.onload = function() {

const userScore = localStorage.getItem('userScore'); //checked via console log that this works
const scoreText = document.getElementById('scoreText'); //gets the scoreText element from the HTML
let scoreMessage = "";

    if (userScore === null) {
    scoreMessage = "It seems you didn't answer any questions. Do not test the patience of Lord Vect again.";
    } else if (userScore == 0) {
    scoreMessage = "You answered 0 out of the 10 questions given to you correctly. Lord Vect is most displeased, off to the torture chambers with you!";
    } else if (userScore > 0 && userScore <= 4) {
    scoreMessage = `You answered ${userScore} out of the 10 questions given to you correctly. Lord Vect is disappointed and will have you sent to the labs of the Haemonculi, we may have use of you yet.`;
    } else if (userScore >= 5 && userScore <= 7) {
    scoreMessage = `You answered ${userScore} out of the 10 questions given to you correctly. Lord Vect is moderately pleased, you will be sent off to the Crucibael for his amusement.`;
    } else if (userScore >= 8 && userScore <= 9) {
    scoreMessage = `You answered ${userScore} out of the 10 questions given to you correctly. Lord Vect has given you the opportunity to serve his Kabal, you will be sent for the trials.`;
    } else if (userScore == 10) {
    scoreMessage = "You answered all 10 questions given to you correctly. Lord Vect is extremely pleased, you shall be granted a position within his Kabal. Make no mistake, you will serve him well or die...";  
    }





//const userScore = localStorage.getItem('userScore'); //checked via console log that this works
//const scoreText = document.getElementById('scoreText'); //gets the scoreText element from the HTML
// const scoreMessage = `You answered ${userScore} out of the 10 questions given to you correctly...`; //checked via console log that this works

scoreText.innerHTML = scoreMessage; //sets the inner HTML of the scoreText element to the scoreMessage

console.log(scoreText);
console.log(scoreMessage);
console.log(userScore);
console.log(window.document.title);
}










