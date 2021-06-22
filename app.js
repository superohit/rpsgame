const game = () => {
    let pscore = 0;
    let cscore = 0;


    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');

        const hands = document.querySelectorAll('.hands img');
        hands.forEach(hand => {
            hand.addEventListener('animationend', function () {
                this.style.animation = '';
            });
        });

        const computerOptions = ['rock', 'paper', 'scissor'];
        options.forEach(option => {
            option.addEventListener("click", function () {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() => {
                    compareHands(this.textContent, computerChoice);

                    playerHand.src = `${this.textContent}.png`;
                    computerHand.src = `${computerChoice}.png`;
                }, 2000);

                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });

        });

    };
    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pscore;
        computerScore.textContent = cscore;
    }

    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner');
        if (playerChoice == computerChoice) {
            winner.textContent = "It is a tie!";
            return;

        }
        if (playerChoice === "rock") {
            if (computerChoice === "scissor") {
                winner.textContent = "Player Wins";
                pscore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = "Computer Wins";
                cscore++;
                updateScore();
                return;
            }
        }
        if (playerChoice === "paper") {
            if (computerChoice === "scissor") {
                winner.textContent = "Computer Wins";
                cscore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = "Player Wins";
                pscore++;
                updateScore();
                return;
            }
        }
        if (playerChoice === "scissor") {
            if (computerChoice === "rock") {
                winner.textContent = "Computer Wins";
                cscore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = "Player Wins";
                pscore++;
                updateScore();
                return;
            }
        }
    };

    startGame();
    updateScore();
    playMatch();



};
game();
