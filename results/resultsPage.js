
localStorage.setItem('userScore', userScore);


const userScore = localStorage.getItem('userScore') || 0;
document.getElementById('scoreText').textContent = `You answered ${userScore} out of the 10 questions given to you`;

