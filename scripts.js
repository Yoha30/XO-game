const squares = document.querySelectorAll('.button');
const mainDiv = document.querySelector('#main-div');
const banner = document.querySelector('#banner');
let clickCounter = 0;
let square = [];
let playerScore = document.querySelector('#player');
let cpuScore = document.querySelector('#cpu');
let draw = document.querySelector('#draw');
let playerScoreone = [];
let playerScoretwo = [];
let drawCounter = [];
let turn = document.querySelector('#turn');
let win = document.querySelector('#win');
let turns = -1;

function handleTurns() {
    turns++;
    console.log(turns)
    if (turns % 2 === 0 || turns === 0) {
        turn.innerText = 'X';

    } else {
        turn.innerText = 'O';
        turns++;
        let answer = Math.floor(Math.random() * 8 + 1);
        console.log(answer);
        setTimeout(function () {
            if (square[answer] != 'X' && square[answer] != 'O') {
                square[answer] = document.getElementById('square' + answer);
                square[answer].innerHTML = 'O';
                turn.innerText = 'X';

                square[answer].style.color = '#ECAE35';
                console.log(square[1] == '');
            } else if (square[1] == '') {
                answer = 1;
                square[answer] = document.getElementById('square' + answer);
                square[answer].innerHTML = 'O';
                square[answer].style.color = '#ECAE35';
            } else if (square[2] == '') {
                answer = 2;
                square[answer] = document.getElementById('square' + answer);
                square[answer].innerHTML = 'O';
                square[answer].style.color = '#ECAE35';
            } else if (square[3] == '') {
                answer = 3;
                square[answer] = document.getElementById('square' + answer);
                square[answer].innerHTML = 'O';
                square[answer].style.color = '#ECAE35';
            } else if (square[4] == '') {
                answer = 4;
                square[answer] = document.getElementById('square' + answer);
                square[answer].innerHTML = 'O';
                square[answer].style.color = '#ECAE35';
            } else if (square[5] == '') {
                answer = 5;
                square[answer] = document.getElementById('square' + answer);
                square[answer].innerHTML = 'O';
                square[answer].style.color = '#ECAE35';
            } else if (square[6] == '') {
                answer = 6;
                square[answer] = document.getElementById('square' + answer);
                square[answer].innerHTML = 'O';
                square[answer].style.color = '#ECAE35';
            } else if (square[7] == '') {
                answer = 7;
                square[answer] = document.getElementById('square' + answer);
                square[answer].innerHTML = 'O';
                square[answer].style.color = '#ECAE35';
            } else if (square[8] == '') {
                answer = 8;
                square[answer] = document.getElementById('square' + answer);
                square[answer].innerHTML = 'O';
                square[answer].style.color = '#ECAE35';
            } else if (square[9] == '') {
                answer = 9;
                square[answer] = document.getElementById('square' + answer);
                square[answer].innerHTML = 'O';
                square[answer].style.color = '#ECAE35';
            }
        }, 1000)
    }

}

handleTurns()


function SquaresClick(e) {
    if (e.currentTarget.innerText != 'O' && e.currentTarget.innerText != 'X') {
        clickCounter++;
    }
    console.log(clickCounter);
    if (e.currentTarget.innerText != 'O') {
        e.currentTarget.innerText = 'X';
        e.currentTarget.classList.add('x');
    }
}

const nextbtn = document.querySelector('#next-button');
const reload = document.querySelector('#reload');
const quit = document.querySelector('#quit');
let nextRound;

function handleNextbtn() {
    for (let i = 1; i < 10; i++) {
        square[i] = document.querySelector('#square' + i).innerHTML = '';
        square[i] = document.querySelector('#square' + i).style.backgroundColor = '';
        square[i] = document.querySelector('#square' + i).style.color = '';
        mainDiv.classList.remove('shadow-bg');
        banner.classList.add('opacity-0');
        banner.classList.add('-z-10');
        clickCounter = 0;
        turn.innerText = 'X';
    }
    nextRound = setInterval(winner, 1000);
}


function handleReload() {
    location.reload();
}

function handleQuit() {
    window.close();
}

nextbtn.addEventListener('click', handleNextbtn);
reload.addEventListener('click', handleReload);
quit.addEventListener('click', handleQuit);
const interval = setInterval(winner, 1000);

function winner(e) {
    for (let i = 1; i < 10; i++) {
        square[i] = document.getElementById('square' + i).innerHTML;
    }
    if (square[1] == square[2] && square[2] == square[3] && square[1] != '') {
        if (square[1] == 'X') {
            document.querySelector('#square1').style.backgroundColor = '#33C3BF';
            document.querySelector('#square1').style.color = '#192A32';
            document.querySelector('#square2').style.backgroundColor = '#33C3BF';
            document.querySelector('#square2').style.color = '#192A32';
            document.querySelector('#square3').style.backgroundColor = '#33C3BF';
            document.querySelector('#square3').style.color = '#192A32';
            playerScoreone++;
            clearInterval(interval);
            clearInterval(nextRound);
            setTimeout(function () {
                playerScore.innerText = playerScoreone;
                mainDiv.classList.add('shadow-bg');
                banner.classList.remove('opacity-0');
                banner.classList.remove('-z-10');
                win.innerText = 'X';
            }, 500);
        } else if (square[2] == 'O') {
            document.querySelector('#square1').style.backgroundColor = '#ECAE35';
            document.querySelector('#square1').style.color = '#192A32';
            document.querySelector('#square2').style.backgroundColor = '#ECAE35';
            document.querySelector('#square2').style.color = '#192A32';
            document.querySelector('#square3').style.backgroundColor = '#ECAE35';
            document.querySelector('#square3').style.color = '#192A32';
            playerScoretwo++;
            console.log('player 2 Won');
            clearInterval(interval);
            clearInterval(nextRound);
            setTimeout(function () {
                cpuScore.innerText = playerScoretwo;
                mainDiv.classList.add('shadow-bg');
                banner.classList.remove('opacity-0');
                banner.classList.remove('-z-10');
                win.innerText = 'O';
            }, 500);
        }
    } else if (square[4] == square[5] && square[5] == square[6] && square[4] != '') {
        if (square[4] == 'X') {
            document.querySelector('#square4').style.backgroundColor = '#33C3BF';
            document.querySelector('#square4').style.color = '#192A32';
            document.querySelector('#square5').style.backgroundColor = '#33C3BF';
            document.querySelector('#square5').style.color = '#192A32';
            document.querySelector('#square6').style.backgroundColor = '#33C3BF';
            document.querySelector('#square6').style.color = '#192A32';
            playerScoreone++;
            clearInterval(interval);
            clearInterval(nextRound);
            setTimeout(function () {
                playerScore.innerText = playerScoreone;
                mainDiv.classList.add('shadow-bg');
                banner.classList.remove('opacity-0');
                banner.classList.remove('-z-10');
                win.innerText = 'X';
            }, 500);
        } else if (square[5] == 'O') {
            document.querySelector('#square4').style.backgroundColor = '#ECAE35';
            document.querySelector('#square4').style.color = '#192A32';
            document.querySelector('#square5').style.backgroundColor = '#ECAE35';
            document.querySelector('#square5').style.color = '#192A32';
            document.querySelector('#square6').style.backgroundColor = '#ECAE35';
            document.querySelector('#square6').style.color = '#192A32';
            playerScoretwo++;
            console.log('player 2 Won');
            clearInterval(interval);
            clearInterval(nextRound);
            setTimeout(function () {
                cpuScore.innerText = playerScoretwo;
                mainDiv.classList.add('shadow-bg');
                banner.classList.remove('opacity-0');
                banner.classList.remove('-z-10');
                win.innerText = 'O';
            }, 500);
        }
    } else if (square[7] == square[8] && square[8] == square[9] && square[8] != '') {
        if (square[7] == 'X') {
            document.querySelector('#square7').style.backgroundColor = '#33C3BF';
            document.querySelector('#square7').style.color = '#192A32';
            document.querySelector('#square8').style.backgroundColor = '#33C3BF';
            document.querySelector('#square8').style.color = '#192A32';
            document.querySelector('#square9').style.backgroundColor = '#33C3BF';
            document.querySelector('#square9').style.color = '#192A32';
            playerScoreone++;
            clearInterval(interval);
            clearInterval(nextRound);
            setTimeout(function () {
                playerScore.innerText = playerScoreone;
                mainDiv.classList.add('shadow-bg');
                banner.classList.remove('opacity-0');
                banner.classList.remove('-z-10');
                win.innerText = 'X';
            }, 500);
        } else if (square[8] == 'O') {
            document.querySelector('#square7').style.backgroundColor = '#ECAE35';
            document.querySelector('#square7').style.color = '#192A32';
            document.querySelector('#square8').style.backgroundColor = '#ECAE35';
            document.querySelector('#square8').style.color = '#192A32';
            document.querySelector('#square9').style.backgroundColor = '#ECAE35';
            document.querySelector('#square9').style.color = '#192A32';
            playerScoretwo++;
            console.log('player 2 Won');
            clearInterval(interval);
            clearInterval(nextRound);
            setTimeout(function () {
                cpuScore.innerText = playerScoretwo;
                mainDiv.classList.add('shadow-bg');
                banner.classList.remove('opacity-0');
                banner.classList.remove('-z-10');
                win.innerText = 'O';
            }, 500);
        }
    } else if (square[1] == square[4] && square[4] == square[7] && square[4] != '') {
        if (square[4] == 'X') {
            document.querySelector('#square1').style.backgroundColor = '#33C3BF';
            document.querySelector('#square1').style.color = '#192A32';
            document.querySelector('#square4').style.backgroundColor = '#33C3BF';
            document.querySelector('#square4').style.color = '#192A32';
            document.querySelector('#square7').style.backgroundColor = '#33C3BF';
            document.querySelector('#square7').style.color = '#192A32';
            playerScoreone++;
            clearInterval(interval);
            clearInterval(nextRound);
            setTimeout(function () {
                playerScore.innerText = playerScoreone;
                mainDiv.classList.add('shadow-bg');
                banner.classList.remove('opacity-0');
                banner.classList.remove('-z-10');
                win.innerText = 'X';
            }, 500);
        } else if (square[7] == 'O') {
            document.querySelector('#square1').style.backgroundColor = '#ECAE35';
            document.querySelector('#square1').style.color = '#192A32';
            document.querySelector('#square4').style.backgroundColor = '#ECAE35';
            document.querySelector('#square4').style.color = '#192A32';
            document.querySelector('#square7').style.backgroundColor = '#ECAE35';
            document.querySelector('#square7').style.color = '#192A32';
            playerScoretwo++;
            console.log('player 2 Won');
            clearInterval(interval);
            clearInterval(nextRound);
            setTimeout(function () {
                cpuScore.innerText = playerScoretwo;
                mainDiv.classList.add('shadow-bg');
                banner.classList.remove('opacity-0');
                banner.classList.remove('-z-10');
                win.innerText = 'O';
            }, 500);
        }
    } else if (square[2] == square[5] && square[5] == square[8] && square[5] != '') {
        if (square[2] == 'X') {
            document.querySelector('#square2').style.backgroundColor = '#33C3BF';
            document.querySelector('#square2').style.color = '#192A32';
            document.querySelector('#square5').style.backgroundColor = '#33C3BF';
            document.querySelector('#square5').style.color = '#192A32';
            document.querySelector('#square8').style.backgroundColor = '#33C3BF';
            document.querySelector('#square8').style.color = '#192A32';
            playerScoreone++;
            clearInterval(interval);
            clearInterval(nextRound);
            setTimeout(function () {
                playerScore.innerText = playerScoreone;
                mainDiv.classList.add('shadow-bg');
                banner.classList.remove('opacity-0');
                banner.classList.remove('-z-10');
                win.innerText = 'X';
            }, 500);
        } else if (square[5] == 'O') {
            document.querySelector('#square2').style.backgroundColor = '#ECAE35';
            document.querySelector('#square2').style.color = '#192A32';
            document.querySelector('#square5').style.backgroundColor = '#ECAE35';
            document.querySelector('#square5').style.color = '#192A32';
            document.querySelector('#square8').style.backgroundColor = '#ECAE35';
            document.querySelector('#square8').style.color = '#192A32';
            playerScoretwo++;
            console.log('player 2 Won');
            clearInterval(interval);
            clearInterval(nextRound);
            setTimeout(function () {
                cpuScore.innerText = playerScoretwo;
                mainDiv.classList.add('shadow-bg');
                banner.classList.remove('opacity-0');
                banner.classList.remove('-z-10');
                win.innerText = 'O';
            }, 500);
        }
    } else if (square[3] == square[6] && square[6] == square[9] && square[3] != '') {
        if (square[3] == 'X') {
            document.querySelector('#square3').style.backgroundColor = '#33C3BF';
            document.querySelector('#square3').style.color = '#192A32';
            document.querySelector('#square6').style.backgroundColor = '#33C3BF';
            document.querySelector('#square6').style.color = '#192A32';
            document.querySelector('#square9').style.backgroundColor = '#33C3BF';
            document.querySelector('#square9').style.color = '#192A32';
            playerScoreone++;
            clearInterval(interval);
            clearInterval(nextRound);
            setTimeout(function () {
                playerScore.innerText = playerScoreone;
                mainDiv.classList.add('shadow-bg');
                banner.classList.remove('opacity-0');
                banner.classList.remove('-z-10');
                win.innerText = 'X';
            }, 500);
        } else if (square[6] == 'O') {
            document.querySelector('#square3').style.backgroundColor = '#ECAE35';
            document.querySelector('#square3').style.color = '#192A32';
            document.querySelector('#square6').style.backgroundColor = '#ECAE35';
            document.querySelector('#square6').style.color = '#192A32';
            document.querySelector('#square9').style.backgroundColor = '#ECAE35';
            document.querySelector('#square9').style.color = '#192A32';
            playerScoretwo++;
            console.log('player 2 Won');
            clearInterval(interval);
            clearInterval(nextRound);
            setTimeout(function () {
                cpuScore.innerText = playerScoretwo;
                mainDiv.classList.add('shadow-bg');
                banner.classList.remove('opacity-0');
                banner.classList.remove('-z-10');
                win.innerText = 'O';
            }, 500);
        }
    } else if (square[1] == square[5] && square[5] == square[9] && square[5] != '') {
        if (square[1] == 'X') {
            document.querySelector('#square1').style.backgroundColor = '#33C3BF';
            document.querySelector('#square1').style.color = '#192A32';
            document.querySelector('#square5').style.backgroundColor = '#33C3BF';
            document.querySelector('#square5').style.color = '#192A32';
            document.querySelector('#square9').style.backgroundColor = '#33C3BF';
            document.querySelector('#square9').style.color = '#192A32';
            playerScoreone++;
            clearInterval(interval);
            clearInterval(nextRound);
            setTimeout(function () {
                playerScore.innerText = playerScoreone;
                mainDiv.classList.add('shadow-bg');
                banner.classList.remove('opacity-0');
                banner.classList.remove('-z-10');
                win.innerText = 'X';
            }, 500);
        } else if (square[5] == 'O') {
            document.querySelector('#square1').style.backgroundColor = '#ECAE35';
            document.querySelector('#square1').style.color = '#192A32';
            document.querySelector('#square5').style.backgroundColor = '#ECAE35';
            document.querySelector('#square5').style.color = '#192A32';
            document.querySelector('#square9').style.backgroundColor = '#ECAE35';
            document.querySelector('#square9').style.color = '#192A32';
            playerScoretwo++;
            console.log('player 2 Won');
            clearInterval(interval);
            clearInterval(nextRound);
            setTimeout(function () {
                cpuScore.innerText = playerScoretwo;
                mainDiv.classList.add('shadow-bg');
                banner.classList.remove('opacity-0');
                banner.classList.remove('-z-10');
                win.innerText = 'O';
            }, 500);
        }
    } else if (square[3] == square[5] && square[5] == square[7] && square[5] != '') {
        if (square[7] == 'X') {
            document.querySelector('#square3').style.backgroundColor = '#33C3BF';
            document.querySelector('#square3').style.color = '#192A32';
            document.querySelector('#square5').style.backgroundColor = '#33C3BF';
            document.querySelector('#square5').style.color = '#192A32';
            document.querySelector('#square7').style.backgroundColor = '#33C3BF';
            document.querySelector('#square7').style.color = '#192A32';
            playerScoreone++;
            clearInterval(interval);
            clearInterval(nextRound);
            setTimeout(function () {
                playerScore.innerText = playerScoreone;
                mainDiv.classList.add('shadow-bg');
                banner.classList.remove('opacity-0');
                banner.classList.remove('-z-10');
                win.innerText = 'X';
            }, 500);
        } else if (square[3] == 'O') {
            document.querySelector('#square3').style.backgroundColor = '#ECAE35';
            document.querySelector('#square3').style.color = '#192A32';
            document.querySelector('#square5').style.backgroundColor = '#ECAE35';
            document.querySelector('#square5').style.color = '#192A32';
            document.querySelector('#square7').style.backgroundColor = '#ECAE35';
            document.querySelector('#square7').style.color = '#192A32';
            playerScoretwo++;
            console.log('player 2 Won');
            clearInterval(interval);
            clearInterval(nextRound);
            setTimeout(function () {
                cpuScore.innerText = playerScoretwo;
                mainDiv.classList.add('shadow-bg');
                banner.classList.remove('opacity-0');
                banner.classList.remove('-z-10');
                win.innerText = 'O';
            }, 500);
        }
    } else if (square[1] && square[2] && square[3] && square[4] && square[5] && square[6] && square[7] && square[8] && square[9] != '') {
        drawCounter++;
        clearInterval(interval);
        clearInterval(nextRound);
        setTimeout(function () {
            draw.innerText = drawCounter;
            mainDiv.classList.add('shadow-bg');
            banner.classList.remove('opacity-0');
            banner.classList.remove('-z-10');
            win.innerText = 'No one';
        }, 500);
    }
}

squares.forEach(click => click.addEventListener('click', SquaresClick));
squares.forEach(click => click.addEventListener('click', handleTurns));
