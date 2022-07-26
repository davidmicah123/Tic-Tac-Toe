
'use strict';
// // const userInput = document.querySelector('.main_imput').value;
// const fetchMusic = async function(){
//     // const userInput = document.querySelector('.main_imput').nodeValue;
//     // const userInput = document.querySelector('.main_imput').nodeValue;
//     const getMusic  = await fetch('https://api.ksoft.si/images/random-image');
//     const res = await getMusic.json();
//     const data = await res;
//     console.log(data);
// };
// fetchMusic()

// var request = new XMLHttpRequest();

// request.open('GET', 'https://api.lyrics.ovh/v1/Coldplay/Adventure of a Lifetime');

// request.onreadystatechange = function () {
//   if (this.readyState === 4) {
//     console.log('Status:', this.status);
//     console.log('Headers:', this.getAllResponseHeaders());
//     console.log('Body:', this.responseText);
//   }
// };

// request.send();

const satrtGame = document.querySelector('.btn_start');
const playing_X = document.querySelector('.player_X');
const playing_O = document.querySelector('.player_O');
const modalWindow = document.querySelector('.modal');
const overlay = document.querySelector('.overlay')
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const mainStart = document.querySelector('.main_start');
const escapeAlert = document.querySelector('.escape_alert');
const body = document.querySelector('body')
escapeAlert.classList.add('hidden')
let state1 = 'not clicked';
let state2 = 'not clicked';
const label1 = document.querySelector('.player1')
const label2 = document.querySelector('.player2')
const win = document.querySelector('.winner_popup_wrapper');
const winnerNameArea = document.querySelector('.winnerNameArea')
const playAgain = document.querySelector('.play_again');


const addStyle = function (box) {
    box.style.backgroundColor = 'white';
    box.style.Color = 'hsl(174deg 81% 41%)';
}
const addBtnState = function(btn){
    btn.classList.add('active_state');
}
const removeBtnState = function(btn){
    btn.classList.remove('active_state');
}
const makeActive = function (btn) {
    btn.style.opacity = `1`;
}
modalWindow.classList.add('hidden')
overlay.classList.remove('overlay')
const startedGame = function () {
    makeActive(btn1);
    makeActive(btn2);
    overlay.classList.add('overlay')
    modalWindow.classList.add('show');
    modalWindow.classList.remove('hidde');
    label1.focus()
    escapeAlert.classList.remove('hidden')
}
satrtGame.addEventListener('click', startedGame);

mainStart.addEventListener('click', 
    (e) => {
        e.preventDefault();
        if (label1.value != ''  && label2.value != '') {
            // satrtGame.removeEventListener('click', startedGame)
            playing_X.innerHTML = `${label1.value}`;
            playing_O.innerHTML = `${label2.value}`;
            // modalWindow.style.display = "none";
            // modalWindow.classList.add('hidden')//.display = "none";
            overlay.classList.remove('overlay')
            modalWindow.classList.remove('show');
            escapeAlert.style.display = 'none';
            console.log(100111)
        }
    }
);


// document.addEventListener('keydown', function (e) {
//     if (e.key === 'Escape' && modalWindow.classList.contains('show')) {
//         modalWindow.style.display = "none";
//         escapeAlert.classList.add('hidden');
//         overlay.classList.remove('overlay');
//     }
// })


    // if (modalWindow.classList.contains('show')) {
    //     document.addEventListener('click', 
    //         function (e) {
    //             if (e.target != modalWindow) {
    //                 overlay.classList.remove('overlay')
    //                 modalWindow.classList.add('hidden');
    //             }
    //         }
    //     );
    // }


// makeActive(playing_X)

playing_X.addEventListener('click', 
    function (btn) {
        addBtnState(btn1);
        removeBtnState(btn2);
        btn.preventDefault();
        state1 = 'clicked';
        state2 = 'not clicked';
        // console.log(`state1: ${state1}`)
        // console.log(`state2: ${state2}`)
        playing_O.style.display = `none`;
        parent.addEventListener('click',
            function (e) {
                e.preventDefault();
                let target = e.target;
                addStyle(target);
                console.log(target.textContent)
                if (target.textContent === '') {
                    if (state1 === 'clicked') {
                        console.log(`empty`);
                        target.textContent = 'X';
                        // removeBtnState(btn1);
                        playing_X.style.display = `none`;
                        playing_O.style.display = `block`;
                    }
                }
            }
        );
    }
);


playing_O.addEventListener('click', 
    function (btn) {
        addBtnState(btn2);
        removeBtnState(btn1);
        btn.preventDefault();
        state1 = 'not clicked';
        state2 = 'clicked';
        console.log(`state1: ${state1}`)
        console.log(`state2: ${state2}`)
        playing_X.style.display = `none`;
        parent.addEventListener('click',
            function (e) {
                e.preventDefault();
                let target = e.target;
                addStyle(target);
                console.log(target.textContent)
                if (target.textContent === '') {
                    if (state2 === 'clicked') {
                        console.log(`empty`)
                        target.textContent = 'O';
                        removeBtnState(btn2);
                        playing_O.style.display = `none`;
                        playing_X.style.display = `block`;
                    }
                }
            }
        );
    }
);

// const renderColorChange = function (e) {
//     let clicked = e.target;
//     clicked.style.backgroundColor = 'white';
//     clicked.style.Color = 'hsl(174deg 81% 41%)';
// }


const parent = document.querySelector('.parent');
parent.addEventListener('click',
function (e) {
        let clicked = e.target;
        clicked.style.backgroundColor = 'white';
        clicked.style.Color = 'hsl(174deg 81% 41%)';
        // clicked.innerHtml = 'X';
    }

);

// Winner scope
let box1 = document.querySelector('.box1');
let box2 = document.querySelector('.box2');
let box3 = document.querySelector('.box3');
let box4 = document.querySelector('.box4');
let box5 = document.querySelector('.box5');
let box6 = document.querySelector('.box6');
let box7 = document.querySelector('.box7');
let box8 = document.querySelector('.box8');
let box9 = document.querySelector('.box9');


const insertWinner = function (winnerName) {
    escapeAlert.style.display = 'none';
    overlay.classList.add('overlay');
    win.style.display = 'block';
    winnerNameArea.innerHTML = `${winnerName} wins the game`;
    return win;
}
// const draw  = `
//     <div class="winner_popup_wrapper2">
//         <div class="winner_Popup">
//             <p class="game_over_txt">Game over</p>
//             <img src="img/throphy-removebg-preview.png" alt="">
//             <p>Both player draws</p>
//             <button class="play_again">Play Again</button>
//         </div>
//     </div>
// `;

const insertDraw = function () {
    win.style.display = 'block';
    winnerNameArea.innerHTML = `Both players draw`;
}


const checkWinner = function (box1, box2, box3) {
    if (box1.textContent === 'X' && box2.textContent === 'X' && box3.textContent === 'X') {
        insertWinner(`${playing_X.textContent}`)
        console.log(`player X wins`);
    }else if (box4.textContent === 'X' && box5.textContent === 'X' && box6.textContent === 'X') {
        // body.insertAdjacentHTML('beforeend', insertWinner(`${playing_X.textContent}`));
        insertWinner(`${playing_X.textContent}`)
        console.log(`player X wins`);
    }else if (box7.textContent === 'X' && box8.textContent === 'X' && box9.textContent === 'X') {
        insertWinner(`${playing_X.textContent}`)
        console.log(`player X wins`);
    }else if (box1.textContent === 'X' && box4.textContent === 'X' && box7.textContent === 'X') {
        insertWinner(`${playing_X.textContent}`)
        console.log(`player X wins`);
    }else if (box2.textContent === 'X' && box5.textContent === 'X' && box8.textContent === 'X') {
        insertWinner(`${playing_X.textContent}`)
        console.log(`player X wins`);
    }else if (box3.textContent === 'X' && box6.textContent === 'X' && box9.textContent === 'X') {
        insertWinner(`${playing_X.textContent}`)
        console.log(`player X wins`);
    }else if (box1.textContent === 'X' && box5.textContent === 'X' && box9.textContent === 'X') {
        insertWinner(`${playing_X.textContent}`)
        console.log(`player X wins`);
    }else if (box3.textContent === 'X' && box5.textContent === 'X' && box7.textContent === 'X') {
        insertWinner(`${playing_X.textContent}`)
        console.log(`player X wins`);
    }else if (box1.textContent === 'O' && box2.textContent === 'O' && box3.textContent === 'O') {
        insertWinner(`${playing_O.textContent}`)
        console.log(`player O wins`);
    }else if (box4.textContent === 'O' && box5.textContent === 'O' && box6.textContent === 'O') {
        insertWinner(`${playing_O.textContent}`)
        console.log(`player O wins`);
    }else if (box7.textContent === 'O' && box8.textContent === 'O' && box9.textContent === 'O') {
        insertWinner(`${playing_O.textContent}`)
        console.log(`player O wins`);
    }else if (box1.textContent === 'O' && box4.textContent === 'O' && box7.textContent === 'O') {
        insertWinner(`${playing_O.textContent}`)
        console.log(`player O wins`);
    }else if (box2.textContent === 'O' && box5.textContent === 'O' && box8.textContent === 'O') {
        insertWinner(`${playing_O.textContent}`)
        console.log(`player O wins`);
    }else if (box3.textContent === 'O' && box6.textContent === 'O' && box9.textContent === 'O') {
        insertWinner(`${playing_O.textContent}`)
        console.log(`player O wins`);
    }else if (box1.textContent === 'O' && box5.textContent === 'X' && box9.textContent === 'O') {
        // body.insertAdjacentHTML('beforeend', insertWinner(`${playing_O.textContent}`));
        insertWinner(`${playing_O.textContent}`)
        console.log(`player X wins`);
    }else if (box3.textContent === 'O' && box5.textContent === 'X' && box7.textContent === 'O') {
        insertWinner(`${playing_O.textContent}`)
        console.log(`player X wins`);
    }else if (box1.textContent != '' && box2.textContent != '' && box3.textContent != '' && box4.textContent != '' && box5.textContent != '' && box6.textContent != '' && box7.textContent != '' && box8.textContent != '' && box8.textContent != '') {
        // body.insertAdjacentHTML('beforeend', draw);
        insertDraw();
        overlay.classList.add('overlay');
        console.log(`player draws`);
    }else{
        console.log(1);
    }
}

setInterval(() => {
    checkWinner(box1, box2, box3);
}, 1000);

// const winnerPopupWrapper = document.querySelector('.winner_popup_wrapper')

// winnerPopupWrapper.addEventListener('click', 
//     () => {
//         state1 = 'not clicked';
//         state2 = 'not clicked';
//         label1.value = label2.value = '';
//         box1.value = box2.value = box3.value = box4.value = box5.value = box6.value = box7.value = box8.value = box9.value = '';
//         // body.parentNode.removeChild(insertWinner(`${playing_O.textContent}`));
//         winnerPopupWrapper.style.display = 'none'
//     }
// );
playAgain.addEventListener('click',  
    () => {
        state1 = 'not clicked';
        state2 = 'not clicked';
        // label1.value = label2.value = '';
        box1.textContent = box2.textContent = box3.textContent = box4.textContent = box5.textContent = box6.textContent = box7.textContent = box8.textContent = box9.textContent = '';
        overlay.classList.remove('overlay');
        win.style.display = 'none'
        playing_O.style.display = `block`;
        playing_X.style.display = `block`;
        startedGame();
        // box.style.Color = 'white';
        // box.style.backgroundColor = 'hsl(174deg 81% 41%)';
    }
);
