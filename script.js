//buttons
let boxes = document.querySelectorAll(".box");
let rstBtn = document.querySelector("#reset");
let newGame = document.querySelector("#new");
let msgCont = document.querySelector(".msgcontain");
let msg = document.querySelector("#msg");
let con = document.querySelector(".container");
let text = document.querySelector("#text");
let bd = document.querySelector("body");
let theme = document.querySelector("#theme");

//variable memory
let turn = true;
//winning patterns
const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];


//even listeners
boxes.forEach((box)  => {
box.addEventListener("click", () => {
    console.log(`box was clicked`);
    if (turn ===true) {
        box.innerText = "0";
        turn = false; }
        else if (turn ===false) {
            box.innerText ="X";
            turn = true;
        }
        box.disabled = true;
        checkWinner();
    
});
});

const eBtn = () => {
    for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
};
};

 const dBtn = () => {
    for (let box of boxes) {
        box.disabled = true;
    };
 }
//show winner
const ShowWinner = (winner) => {
    msg.innerText = `Congrats! Winner is ${winner}`
    msgCont.classList.remove("hide");
    con.classList.add("hide");
    rstBtn.classList.add("hide");
    text.classList.add("hide");
    dBtn();

};

//function : check winner!


const checkWinner = () => {
    for (let pattern of winningPatterns) {
        // console.log([pattern[0]],[pattern[1]],[pattern[2]])
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
let pos1 = boxes[pattern[0]].innerText;
let pos2 = boxes[pattern[1]].innerText;
let pos3 = boxes[pattern[2]].innerText;
if (pos1 != "" && pos2 != "" && pos3 != "") {
    if (pos1 === pos2 && pos2 ===pos3) {
        console.log(`Winner ${pos1}`)
        ShowWinner(pos1);
    }
}
}
};


//reset game

const resetGame = () => {
    turn = true;
    eBtn();
    msgCont.classList.add("hide");
    con.classList.remove("hide");
    rstBtn.classList.remove("hide");
    text.classList.remove("hide");
}


// newGame.addEventListener("click", () => {
// resetGame();
// } );
// rstBtn.addEventListener("click", () => {
// resetGame();
// } );

newGame.addEventListener("click", resetGame);
rstBtn.addEventListener("click", resetGame);

let curt = "light";
//theme switcher
theme.addEventListener("click", () => {
 if(curt === "light") {
    bd.style.backgroundColor = "#DCFCE7";
    boxes.forEach((box) => {
        box.style.backgroundColor ="#22C55E";
    })
    text.style.color = "#064E3B";
    rstBtn.style.backgroundColor = "#22C55E";
    rstBtn.style.color = "#064E3B";
    newGame.style.backgroundColor= "#22C55E";
    theme.style.backgroundColor = "#22C55E";
    msg.style.color = "#064E3B";
    curt = "dark";
;
 }
 else {
    text.style.color = "#FCA5A5";
    rstBtn.style.backgroundColor = "#FCA5A5";
    rstBtn.style.color = "#FCD34D";
    newGame.style.backgroundColor= "#FCA5A5";
    theme.style.backgroundColor = "#FCA5A5";
    msg.style.color = "#FCD34D";
     bd.style.backgroundColor = "#FDF6F0";
    boxes.forEach((box) => {
        box.style.backgroundColor ="#FCA5A5";
    })
curt = "light";
}
})