let boxes = document.querySelectorAll(".box");
let restart = document.querySelector(".re-start");
let newGame = document.querySelector(".new_game");
let msg_container = document.querySelector(".msg_container");
let msg = document.querySelector("#msg");

let turn0 = true;

const win_pettern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
let cnt = 0;
boxes.forEach((box)=>{
    
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0){
            box.innerText = 'O';
            turn0 = false;
        }else{
            box.innerText = 'X';
            turn0 = true;
        }
        cnt++;
        box.disabled = true;
        let iswinner = checkWiner();
        if(cnt === 9 && !iswinner){
            showDrow();
        }
    })
});
const showDrow = () =>{
    msg.innerText = `opps the game is drow.`;
    msg_container.classList.remove("hide");
    disabled_box();
}
const disabled_box = () =>{
     for(let box of boxes)box.disabled = true;
};
const showWinner = (p) =>{
    msg.innerText = `Winner is ${p}.`;
    msg_container.classList.remove("hide");
    disabled_box();
};
const checkWiner = ()=>{
    for(p of win_pettern){
        let p1 = boxes[p[0]].innerText;
        let p2 = boxes[p[1]].innerText;
        let p3 = boxes[p[2]].innerText;

        if(p1 != '' && p2 !='' && p3 != ''){
            if(p1 === p2 && p2 === p3){
                showWinner(p1);
                return  true;
            }
        }

    }
    if(cnt === 9){
        showDrow();
    }
};

const resetGame = () =>{
    msg_container.classList.add("hide");
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
    turn0 = true;
    cnt = 0;
};
restart.addEventListener("click",resetGame);
newGame.addEventListener("click",resetGame);