console.log("TicTacToe.")

let turn = "X"; 
let game = false;

// function to change from x to o 
const oppTurn = () => {
    return turn === "X"? "O": "X"
} 

// function to check for a winner
const win = () => {
    let textBox = document.getElementsByClassName("text");
    let possibility = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]

    possibility.forEach(e => {
        if ((textBox[e[0]].innerText === textBox[e[1]].innerText) && (textBox[e[2]].innerText === textBox[e[1]].innerText) && (textBox[e[0]].innerText !== "")) {
            document.querySelector(".infoTurn").innerText = textBox[e[0]].innerText + " Won!"
            game = true;
            document.querySelector(".infoTurn").innerText = textBox[e[0]].innerText + " Won!"
            document.querySelector(".content").style.display = `none`;

        }
    })
}

// logic for TicTacToe
let box = document.getElementsByClassName("box");
Array.from(box).forEach(element => {  
    let boxText = element.querySelector(".text");
    element.addEventListener('click', () => {
        if (boxText.innerText === '') {
            boxText.innerText = turn;
            turn = oppTurn();
            win();
            if (!game) {
                document.getElementsByClassName("infoTurn")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

// making use of the reset button 
button.addEventListener('click', () => {
    let boxText = document.querySelectorAll(".text");
    Array.from(boxText).forEach(element => {
        element.innerText = "";
    }) 
    turn = "X";
    game = false;
    document.getElementsByClassName("infoTurn")[0].innerText = "Turn for " + turn;
    document.querySelector(".content").style.display = "grid";    
})