"use strict";
let summ = 0;
while(true){
    let responsePet = prompt(userName + ', do I have a dog?'); 
    if (responsePet.toLowerCase()=='no') {
        console.log('The user answered "No"');
        alert('Correct, I only have a cat');
        summ++;
        break;
    } else if (responsePet.toLowerCase()=='yes') {
        console.log('The user answered "Yes"');
        alert("Wrong, I only have a cat");
        break;
    } else{
        alert("Sorry, please answer 'Yes' or 'No'"); 
    }
} 
while(true){
    let responseVacation = prompt('Do I like a travel, ' + userName + '?'); 
    if (responseVacation.toLowerCase()=='yes') {
        console.log('The user answered "Yes"');
        alert('Sur!');
        summ++;
        break;
    } else if (responseVacation.toLowerCase()=='no') {
        console.log('The user answered "No"');
        alert("Wrong");
        break;
    } else{
        alert("Sorry, please answer 'Yes' or 'No'"); 
    }
} 
while(true){
    let responseLive = prompt('I was born in US?'); 
    if (responseLive.toLowerCase()=='yes') {
        console.log('The user answered "Yes"');
        alert("Oh no, I was born and lived in Russia");
        break;
    } else if (responseLive.toLowerCase()=='no') {
        console.log('The user answered "No"');
        alert("You're right!");
        summ++;
        break;
    } else{
        alert("Sorry, please answer 'Yes' or 'No'"); 
    }
} 
while(true){
    let responseDevice = prompt('I am single?'); 
    if (responseDevice.toLowerCase()=='yes') {
        console.log('The user answered "Yes"');
        alert('No, I am married');
        break;
    } else if (responseDevice.toLowerCase()=='no') {
        console.log('The user answered "No"');
        alert('Cool!');
        summ++;
        break;
    } else{
        alert("Sorry, please answer 'Yes' or 'No'"); 
    }
}
while(true){
    let responseSite = prompt('Do you like this site?'); 
    if (responseSite.toLowerCase()=='yes') {
        console.log('The user likes my site');
        alert('Thanks, ' + userName + '!');
        summ++;
        break;
    } else if (responseSite.toLowerCase()=='no') {
        console.log('The user doesn\'t like my site');
        alert('This is the wrong answer :(');
        break;
    } else{
        alert("Sorry, please answer 'Yes' or 'No'"); 
    }
} 
//Guess the number
let correctAnser = 14;
  for (let i=4; i>0; i--){
    let userAnswer = prompt('Guess the number from 1 to 20. You have ' + i + ' attempts.');
    if (userAnswer == correctAnser){
      alert('Congratulations, you did it!')
      summ++;
      break;
    }
    if (userAnswer > correctAnser){
      alert('This is too much.');}
    else{alert('This is very little.');}
    if (i==1){
      alert('You do not have any more attempts((( Correct answer is: ' + correctAnser)}
    }
//Guess my favorit thing
let favoritThing = ['travel', 'family', 'cat', 'animals'];
let n=6;
while (n>0){
    let userFavorit = prompt('What is one of my favorit things? You have ' + n + ' attempts');
    for(let i=0; i<favoritThing.length; i++){
        if (userFavorit.toLocaleLowerCase() == favoritThing[i]){
            alert("Great, you are genius!");
            summ++;
            n=-1;
            break;    
        }     
   } 
   if (n>0){
   alert('Wrong, try again');
   }
   n--;
}   
if (n==0){
    alert('Correct answers are: ' + favoritThing);
}
alert('You answered ' + summ + ' out of 7 questions correctly');


        