let user_score = 0;
let computer_score = 0;

const choicesAll = document.querySelectorAll(".choices");

const user_final_score = document.getElementById("user-score");
const com_final_score = document.getElementById("com-score");

const genCompChoices = () => {
    const options = ["rock","paper","scissors"];
    const random_idx = Math.floor(Math.random()*3);
    return options[random_idx];
}

const message = document.getElementById("msg")

const draw_game = () =>{
    message.innerText = "😐 It's Draw 😐 \n  play again";
}

const showWinner = (user_win) =>{
    if (user_win) {
        user_score++;
        user_final_score.innerText = user_score;
        message.innerText = "🏆 you Win 🏆"
    }
    else {
        computer_score++;
        com_final_score.innerText = computer_score;
        message.innerText = "☹️ You Lost ☹️"
    }
} 

const play_game = (user_choice)=>{
    console.log("User Choice was Clicked",user_choice)
    //Generated random number
    const computer_choices = genCompChoices();
    console.log("computer was clicked",computer_choices);
    // Logic
    if(computer_choices === user_choice){
        draw_game();
    }   
    else{
        let user_win = true;
        if(user_choice === "rock"){
            user_win = (computer_choices ==="scissors") ? true : false ;
        }
        else if(user_choice ==="paper"){
            user_win = (computer_choices==="rock") ? true : false ;
        }
        else{
            user_win = (computer_choices ==="paper") ? true : false;
        }

    showWinner(user_win)
    }
}

choicesAll.forEach((choices)=>{
    choices.addEventListener("click",()=>{
        const user_choice = choices.getAttribute("id");
        play_game(user_choice);
    })
})



















