let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-button");
let newGamebtn = document.querySelector("#new-button");
let msgcontainer = document.querySelector(".msg-container");
let message = document.querySelector("#msg");

let turnO = true;  // checking player's turn

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

const resetGame = ()=>{
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {      // Sabhi boxes ke liye function karne ke liye use hua hai
    box.addEventListener("click", () => {
        
        if(turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "" ) {
            if(pos1Val == pos2Val && pos2Val == pos3Val) {
            showWinner(pos1Val);
         }
        }
    }

};

newGamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);