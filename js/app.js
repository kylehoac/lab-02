let responsePet = prompt('Do you have a pet, ' + userName + '?');
    if(responsePet.toLowerCase()=='yes'){
       console.log('The user likes the pets');
       alert("It's great!");
    }
    else if(responsePet.toLowerCase()=='no'){
        console.log('The user doesn\'t like the pets');
        alert("Maybe you should get a pet?");
    }
    else {
        alert("Sorry, please answer 'Yes' or 'No'");
    } 
let responseVacation = prompt('Do you like a beach vacation?');
    if(responseVacation.toLowerCase()=='yes'){
    console.log('The user likes the beach vacation');
    alert("Fine, me too");
    }
    else if(responseVacation.toLowerCase()=='no'){
    console.log('The user doesn\'t the beach vacation');
    alert("It looks like you don't have much time. Or you live near the sea :)");
    }
    else {
    alert("Sorry, please answer 'Yes' or 'No'");
    }
let responseMusic = prompt('Do you like a music?');
    if(responseMusic.toLowerCase()=='yes'){
    console.log('The user likes a music');
    alert("Great, me too!");
    }
    else if(responseMusic.toLowerCase()=='no'){
    console.log('The user doesn\'t like a music');
    alert("In vine, life is more fun with music");
    }
    else {
    alert("Sorry, please answer 'Yes' or 'No'");
    }
let responseDevice = prompt('Do you like a Apple devices?');
    if(responseDevice.toLowerCase()=='yes'){
       console.log('The user likes a Apple');
       alert("Fine, I like Apple too!");
    }
    else if(responseDevice.toLowerCase()=='no'){
        console.log('The user doesn\'t like a Apple');
        alert("Cool, but I like Apple");
    }
    else {
        alert("Sorry, please answer 'Yes' or 'No'");
    }
let responseSite = prompt('Do you like this site?');
    if(responseDevice.toLowerCase()=='yes'){
       console.log('The user likes this site');
       alert("Thank you " + userName + "!");
    }
    else if(responseDevice.toLowerCase()=='no'){
        console.log('The user doesn\'t like this site');
        alert("This is the wrong answer((");
    }
    else {
        alert("Sorry, please answer 'Yes' or 'No'");
    }


   

    /* switch(responsePet.toLowerCase()){
        case('yes'):
        console.log('The user likes the pets');
        alert("It's great!");
        break;
        case('no'):
        console.log('The user doesn\'t like the pets');
        alert("Maybe you should get a pet?");
        break;
        default: 
        alert("Sorry, please answer 'Yes' or 'No'");
    } */


    /* var responseCorrect = true;
    while(responseCorrect == true){
        let responsePet = prompt('Do you have a pet, ' + userName + '?'); 
        if (responsePet.toLowerCase()=='yes') {
            console.log('The user likes the pets');
            alert("It's great!");
            responseCorrect = true;
            break;
        } else if (responsePet.toLowerCase()=='no') {
            console.log('The user doesn\'t like the pets');
            alert("Maybe you should get a pet?");
            responseCorrect = true;
            break;
        } else{
            alert("Sorry, please answer 'Yes' or 'No'"); 
            responseCorrect = false;
        }
    } */


        