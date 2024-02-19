let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".Reset");
let Newbtn = document.querySelector('.New-Game');

let msgContainer = document.querySelector('.msg-container');

let msg = document.getElementById('msg');

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];


const ResetGame = ()=>{
    let turnO = true;
    EnableBoxes();
    msgContainer.classList.add('hide')
    resetbtn.classList.remove('hide');
}

const EnableBoxes = ()=>{
    for( let boxx of boxes)
    {
        boxx.disabled = false;
        boxx.innerText = "";
    }
}
const disableBoxes = ()=>{
    for( let boxx of boxes)
    {
        boxx.disabled = true;
    }
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log("Box was clicked");
    if (turnO) {
      box.innerHTML = "O";
      turnO = false;
    } else {
      box.innerHTML = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
    
  });
});

const showWinner = (winner)=>{
  msg.innerHTML = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove('hide');
  resetbtn.classList.add('hide');
  disableBoxes();
}



const checkWinner = ()=>{
    for( let pattern of winPatterns)
    {
       
       let pos1Value = boxes[pattern[0]].innerText;
       let pos2Value = boxes[pattern[1]].innerText;
       let pos3Value = boxes[pattern[2]].innerText;

       if(pos1Value != "" && pos2Value != "" && pos3Value != ""){
        if(pos1Value == pos2Value && pos2Value == pos3Value)
        {
            // console.log('Winner' , pos1Value);
            showWinner(pos1Value);
            
        } 
       }
    }
}

Newbtn.addEventListener('click', ResetGame);
resetbtn.addEventListener('click', ResetGame);

