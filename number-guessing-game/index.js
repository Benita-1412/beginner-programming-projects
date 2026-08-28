
let minNum=1;
let maxNum=100;

let attempts =0;
let guess;
let answer=Math.floor(Math.random() *(maxNum-minNum +1)) + minNum;

let running=true;     // without it the loop goes on

while(running){
    guess=window.prompt(`Guess the number between ${minNum} - ${maxNum}`);
    guess=Number(guess);
    
    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }
    else if(guess<minNum || guess>maxNum){
        window.alert(`Enter a valid number between ${minNum}- ${maxNum}`);
    }
    else{
        attempts++;
        if(guess<answer){
            window.alert("Too Low! Guess Higher..");
        }
        else if(guess>answer){
            window.alert("Too High! Guess Lower..");
        }
        else{
            window.alert(`yeah! CORRECT.. The number is ${answer}. The total attempt taken is ${attempts}`);
            running=false;
        }
    }
}    
