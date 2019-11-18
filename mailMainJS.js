'use strict';

// SCRIPT mailMainJS.js for index.html

/*
        Text Adventure: 'Mailbox Madness' 
        by PETER COLE 
        for Mr. RON AUSTIN
        PROG109 3/15/17
        BELLEVUE COLLEGE

        All pictures taken by Peter Cole
        on Mailbox Peak, WA,
        for the Assignment,
        except for image15a.jpg and image30.jpg,
        by user "jrod" for wta.org
        
        NOTE TO RON AUSTIN : 

            Type "ronaustin" into Input in game to open game map
            in pop up window with quick solve description
*/

    // Button & Listen: Click

var button = document.querySelector("button");

button.style.cursor = "pointer"; // neat pointer for links

document.getElementById("entryButton").addEventListener("click", clickHandler);

    // Listen: Key 13

window.addEventListener("keydown", keydownHandler, false);


    // FUNCTION - Run when Button Clicked

function clickHandler() {location.href= "indexMailbox.html";}

    // FUNCTION - Run when Enter key Pressed

function keydownHandler(event) {
    
    if (event.keyCode === 13) {location.href = "indexMailbox.html";}
    else {}
}

