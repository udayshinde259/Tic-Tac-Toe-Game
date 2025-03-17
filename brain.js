let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector("#msg")

let turnO = true;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];


const resetGame = () => {
    turnO = true;
    for (let box of boxes) {
        box.innerText = ""; 
        box.disabled = false;
    }
    msgContainer.classList.add("hide");
};


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disabledBoxes = () => {
    for (let box of boxes)
        box.disabled = true;
}

const enabledBoxes = () => {
    for (let box of boxes)
        box.disabled = false;
    box.innerText = "";
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}

const checkWinner = () => {
    for (let Pattern of winPattern) {
        let post1val = boxes[Pattern[0]].innerText;
        let post2val = boxes[Pattern[1]].innerText;
        let post3val = boxes[Pattern[2]].innerText;

        if (post1val != "" && post2val != "" && post3val != "") {
            if (post1val === post2val && post2val === post3val) {
                showWinner(post1val);
            }
        }
    }
}

newGameBtn.addEventListener("click", resetGame)
resetBtn.addEventListener("click", resetGame)