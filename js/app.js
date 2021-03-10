"use strict";
while(true){
    let responsePet = prompt('Do you have a pet, ' + userName + '?'); 
    if (responsePet.toLowerCase()=='yes') {
        console.log('The user likes pets');
        alert("It's great!");
        break;
    } else if (responsePet.toLowerCase()=='no') {
        console.log('The user doesn\'t like pets');
        alert("Maybe you should get a pet?");
        break;
    } else{
        alert("Sorry, please answer 'Yes' or 'No'"); 
    }
} 
while(true){
    let responseVacation = prompt('Do you like a beach vacation, ' + userName + '?'); 
    if (responseVacation.toLowerCase()=='yes') {
        console.log('The user likes a beach vacation');
        alert("Good, me too");
        break;
    } else if (responseVacation.toLowerCase()=='no') {
        console.log('The user doesn\'t like a beach vacation');
        alert("Maybe you should try it?");
        break;
    } else{
        alert("Sorry, please answer 'Yes' or 'No'"); 
    }
} 
while(true){
    let responseMusic = prompt('Do you like a music, ' + userName + '?'); 
    if (responseMusic.toLowerCase()=='yes') {
        console.log('The user likes a music');
        alert("Great, me too!");
        break;
    } else if (responseMusic.toLowerCase()=='no') {
        console.log('The user doesn\'t like a music');
        alert("In vine, life is more fun with music");
        break;
    } else{
        alert("Sorry, please answer 'Yes' or 'No'"); 
    }
} 
while(true){
    let responseDevice = prompt('Do you like a Apple devices?'); 
    if (responseDevice.toLowerCase()=='yes') {
        console.log('The user likes an Apple');
        alert('Fine, I like Apple too!');
        break;
    } else if (responseDevice.toLowerCase()=='no') {
        console.log('The user doesn\'t like an Apple');
        alert('Cool, but I like Apple');
        break;
    } else{
        alert("Sorry, please answer 'Yes' or 'No'"); 
    }
} 
while(true){
    let responseSite = prompt('Do you like this site?'); 
    if (responseSite.toLowerCase()=='yes') {
        console.log('The user likes my site');
        alert('Thank you, ' + userName + '!');
        break;
    } else if (responseSite.toLowerCase()=='no') {
        console.log('The user doesn\'t like my site');
        alert('This is the wrong answer :(');
        break;
    } else{
        alert("Sorry, please answer 'Yes' or 'No'"); 
    }
} 
        