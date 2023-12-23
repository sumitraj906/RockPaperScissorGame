let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const lastPara=document.querySelector("#last-para");

const userCountValue=document.querySelector("#user-count");
const compCountValue=document.querySelector("#comp-score");
const genCompChoice=()=>{
 const options=["rock", "paper", "scissors"];
 const randIdx=Math.floor(Math.random()*3);
 return options[randIdx];
};
const showWinner=(userWin)=>{
    if(userWin){
        console.log("You Win");
        lastPara.innerText="You Win";
        userScore++;
        userCountValue.innerText=userScore;
        lastPara.style.backgroundColor="green";
    }else{
        console.log("you Lose");
        lastPara.innerText="You Lose";
        compScore++;
        compCountValue.innerText=compScore
        lastPara.style.backgroundColor="red";

    }
    };

const playGame=(userChoice)=>{
console.log("user choice= ",userChoice);
const compChoice=genCompChoice();
console.log("user choice= ",compChoice);
if(userChoice===compChoice){
    drawGame();
}else{
    let userWin=true;
    if(userChoice==="rock"){
       userWin= compChoice==="paper"?false:true;
    }else if(userChoice==="paper"){
        userWin=compChoice==="scissors"?false:true;
    }else{
        userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin); 
}
};
choices.forEach((choice)=>{
    console.log(choice);
choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
    playGame(userChoice);
});
});
const drawGame=()=>{
    console.log("game was draw");
    lastPara.innerText="Game Draw";
    lastPara.style.backgroundColor="brown";

}

