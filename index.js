let music = new Audio("assets/music.mp3");
let audioTurn = new Audio("assets/ting.mp3");
let gameover = new Audio("assets/gameover.mp3");
let turn = "X";
let isGameOver = false;

//Function to change the turn
const changeTurn = () => {
  return turn === "X"?"0":"X"
}

//Funtion to check for a win
const checkWin = () => {
  let boxTextEl = document.getElementsByClassName("box-text");
  let wins = [
    [0, 1, 2, 5, 5, 0],
    [3, 4, 5, 5, 15, 0],
    [6, 7, 8, 5, 25, 0],
    [0, 3, 6, -5, 15, 90],
    [1, 4, 7, 5, 15, 90],
    [2, 5, 8, 15, 15, 90],
    [0, 4, 8, 5, 15, 45],
    [2, 4, 6, 5, 15, 135]
  ];
  wins.forEach(e => {
    if((boxTextEl[e[0]].innerHTML === boxTextEl[e[1]].innerHTML)&&(boxTextEl[e[0]].innerHTML === boxTextEl[e[2]].innerHTML)&&(boxTextEl[e[0]].innerHTML !== "")){
      document.querySelector('.info').innerHTML = boxTextEl[e[0]].innerHTML + " won";
      isGameOver = true;
      document.querySelector(".img-box").getElementsByTagName('img')[0].style.width = "200px";
      document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
      document.querySelector(".line").style.width = "20vw";
      gameover.play();
    }
  })
}

//Game logic
// music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
  let boxTextEl = element.querySelector('.box-text');
  element.addEventListener("click", ()=>{
    if (boxTextEl.innerHTML = " ") {
      boxTextEl.innerHTML = turn;
      turn = changeTurn();
      audioTurn.play();
      checkWin();
      if (!isGameOver){
        document.getElementsByClassName("info")[0].innerHTML = "Turn for "+turn;
      }
      
    }
    }
  )
}
)

//Add onclick listener to reset button
reset.addEventListener("click", ()=>{
  let boxtexts = document.querySelectorAll(".box-text");
  Array.from(boxtexts).forEach(element => {
    element.innerHTML = "";
  });
  turn = "X";
  isGameOver=false;
  document.querySelector(".line").style.width = "0vw";
  document.getElementsByClassName("info")[0].innerHTML = "Turn for "+turn;
  document.querySelector(".img-box").getElementsByTagName('img')[0].style.width = "0px";
  
})