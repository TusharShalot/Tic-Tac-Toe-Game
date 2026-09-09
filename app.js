let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let newBtn = document.querySelector(".msg-btn");

let turnO = true; // playerX, playerO
let count =0;
const winnerPattern = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

let resetGame = ()=>
{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=>
{
    box.addEventListener("click",()=>
    {
        if(turnO)
        {
            box.innerText ="O";
            turnO = false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled = true;
        count++;

        let winner = checkWinner();
        if(count ===9 && !winner)
        {
            msg.innerText="Both played well ! ...Play Again";
            msgContainer.classList.remove("hide");
            disableBoxes();
        }

    })
});
let disableBoxes = ()=>
{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}

let enableBoxes = () =>
{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}
let showWinner = (winner) =>
{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}



const checkWinner = () =>
{
    for (let pattern of winnerPattern)
    {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val!="" && pos2Val!="" && pos3Val!="")
        {
        if(pos1Val===pos2Val && pos2Val===pos3Val)
            {
                showWinner(pos1Val);
                return true;
            }
        }
    }
    return false;

    
};
newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);