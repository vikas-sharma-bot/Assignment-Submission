let words=[
    {
        jumbled:"papel",
        correct:"apple"
    },
   {
        jumbled: "mputcoer",
        correct: "computer"
    },
    {
        jumbled: "boilem",
        correct: "mobile"
    },
    {
        jumbled: "letobt",
        correct: "bottle"
    },
    {
        jumbled: "arphenoe",
        correct: "aearphone"
    }
    

]

let currentword=0;
let score=0;

function displayword()
{
    document.querySelector('#jword').innerText= 
    words[currentword].jumbled;

    document.querySelector('#score').innerText=score;
}

displayword();

function checkAnswer()
{
    if (currentword == words.length - 1) {
       let msg="";
       if(score===5){
           msg = "Amazing Game" + score;
       }
        else if (score === 4) {
            msg = "Good Game" + score;
        }
       
      else if(score<4){
          msg="Good Try"+score
      } 
        
        alert(msg);
         
        location.reload();



    }
    
    if (currentword >= words.length - 1) {
        alert("Final Score" + score);
    }
    
     let answer=document.querySelector('#inp').value;
     if(answer.toLowerCase()===words[currentword].correct.toLowerCase()){
         
        score++;

     } 
     else{ 
        currentword++; 
        displayword(); 

        document.querySelector('#inp').value="";
     } 
     
     
}






