let  userChoice;
let compChoice;
let choices = document.querySelectorAll(".icon");
Array.from(choices).forEach((val)=>{
    val.addEventListener('click',(e)=>{
       userChoice = e.target.id;   
       compPlay();
       decideDraw();
       decideWinner();
       updateResult();
       console.log(userChoice);
       console.log(compChoice);
       console.log(winner);
       console.log(draw);
    })
})

let compOptions=['rock','paper','scissor'];
let compPlay = ()=>{
  compChoice =   compOptions[Math.floor(Math.random()*3)];
  
}
 
let winner;
let draw;

let decideDraw=()=>{
   
   if(userChoice === compChoice)
   {
    draw='true';
   }
   else
   {
     draw='false';
   }
}
let decideWinner = ()=>{
    
   if(userChoice==='rock')
   {
       if(compChoice==='paper')
       {
            winner='comp';
       }
       else
       {
        winner = 'user';
       }
   }
   if(userChoice==='paper')
    {
        if(compChoice==='scissor')
        {
             winner='comp';
        }
        else
        {
         winner = 'user';
        }
    }
    if(userChoice==='scissor')
    {
            if(compChoice==='rock')
            {
                 winner='comp';
            }
            else
            {
             winner = 'user';
            }
    }
}
let resultBar = document.getElementById('res');

let updateResult = ()=>{
    if(winner==='user' && draw==='false')
    {
       resultBar.innerText = "You Win!!!";
       resultBar.style.backgroundColor = 'green';
       resultBar.style.color = 'white';
       
    }
    if(winner==='comp' && draw==='false')
    {
       resultBar.innerText = "Computer Wins!!!";
        resultBar.style.backgroundColor = 'red';
       resultBar.style.color = 'white';
      
    }
    if(winner==='user' && draw==='true')
    {
       resultBar.innerText = "It's Draw.Play Again!!!";
       resultBar.style.backgroundColor = 'blue';
       resultBar.style.color = 'white';
       
    }    
}
