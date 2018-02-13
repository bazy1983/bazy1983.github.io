var pool  = "abcdefghijklmnopqrstuvwxyz",
    userInput,
    keyStorage = [],
    win = 0,
    lose = 0,
    counter = 0,
    compChoice = Math.floor(Math.random()*pool.length);

function reset () // resets the game after losing or winning the game.
{
    compChoice = Math.floor(Math.random()*pool.length);
    counter = 0;
    keyStorage.length = 0;
    document.getElementById("letterArray").textContent = "";
}

document.onkeyup = function (event) 
{
    userInput = String.fromCharCode(event.keyCode).toLowerCase(); //will capture user input and convert it to lowercase letters
    
    if (userInput !== pool[compChoice]) 
    { // if the key doesn't match computer guess
        if (counter <= 10) 
        {//number of tries counter
            if (keyStorage.indexOf(userInput) === -1)
            {// this will prevent the system from storing the same letter
             // more than once.
                keyStorage[counter] = userInput;
                document.getElementById("tries").textContent = 10 - counter;
                document.getElementById("keyStroke").textContent = userInput;
                document.getElementById("letterArray").textContent += keyStorage[counter] + "; ";

                counter++;
            }
        } 
        else 
        {// counting losing point and resets the game
            lose++;
            document.getElementById("compWin").textContent = lose;
            document.getElementById("keyStroke").textContent = userInput;
            reset();
        }

    } 
    else 
    { // if the key matches computer guess
        win++;
        document.getElementById("userWin").textContent = win;
        document.getElementById("keyStroke").textContent = userInput;
        reset();
    }
    
}