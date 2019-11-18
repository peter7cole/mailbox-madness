'use strict';

// SCRIPT mailboxJS.js for indexMailbox.html

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

    // Set up the Map Descriptions

var map = [];

map[0] = "Parking Lot";
map[1] = "<abbr title='Department of Natural Resources'>DNR</abbr> Access Gate";
map[2] = "New Trailhead";
map[3] = "Old Trailhead";
map[4] = "Great Massive Boulder";
map[5] = "Ye Olde Bridge";
map[6] = "Shattered Tree";
map[7] = "Steep Ice - Spikes Required";
map[8] = "Snowy Traverse";
map[9] = "Snowfall in the Trees";
map[10] = "New and Old Trail Junction";
map[11] = "Snack Tree, may contain Snacks";
map[12] = "Meet the Hikers";
map[13] = "Meet the Hikers";
map[14] = "False Summit - Axe Required";
map[15] = "Mailbox Peak";

    // Set up Extra Map Descriptions 

map[16] = "";
map[17] = "";
map[18] = "";
map[19] = "";
map[20] = "The Mailbox Opens";
map[21] = "It's a Letter";
map[22] = "A Thank You Card";
map[23] = "Thank You for Playing!";
map[24] = "";


    // Variable - Player is Here

var here = 0;

    // Flavor Text for each Image

var mapText = [];

mapText[0] = "An ice <strong>axe</strong> rides shotgun in the <strong>Outback</strong>";
mapText[1] = "Something glistens behind the <strong>gate</strong>";
mapText[2] = "<abbr title='Washington Trails Association'>WTA</abbr> " + 
            "Trail Crews' did fine work on this long trail";
mapText[3] = "The direct steep shot up the mountain established decades ago";
mapText[4] = "The snow pack begins to show on the trail";
mapText[5] = "Stout wooden beams abound";
mapText[6] = "A testament to the winds that tear through here";
mapText[7] = "Can't get up this way without <strong>spikes</strong>!";
mapText[8] = "Relatively little slide danger today on this aspect, " + 
            "thanks <abbr title='Northwest Avalanche Center'>NWAC</abbr>";
mapText[9] = "Fallen snow blankets the forest floor";
mapText[10] = "A three-way junction, a curious cluster of " + 
            "<strong>logs</strong> around the <strong>sign</strong>";
mapText[11] = "Bright colors and sweet aroma beckon from the <strong>snacks</strong>";
mapText[12] = "Peter and Mike, Mailbox Peak, 3/21/17" + "<p>Press Enter</p>";
mapText[13] = "Peter and Mike, Mailbox Peak, 3/21/17";
mapText[14] = "A steep, exposed hillside heading east" +
            ", high risk of falling without an ice <strong>axe</strong>";
mapText[15] = "Welcome to the summit! But how to dig out the mailbox?";
mapText[16] = "";
mapText[17] = "";
mapText[18] = "";
mapText[19] = "";
mapText[20] = "Press Enter";
mapText[21] = "Press Enter";
mapText[22] = "Press Enter";
mapText[23] = "Press Enter to Play Again";
mapText[24] = "";


    // Set up Map Images

var images = [];

images[0] = "image0.jpg";
images[1] = "image1.jpg";
images[2] = "image2.jpg";
images[3] = "image3.jpg";
images[4] = "image4.jpg";
images[5] = "image5.jpg";
images[6] = "image6.jpg";
images[7] = "image7.jpg";
images[8] = "image8.jpg";
images[9] = "image9.jpg";
images[10] = "image10a.jpg";
images[11] = "image11a.jpg";
images[12] = "image16.jpg";
images[13] = "image16.jpg";
images[14] = "image14.jpg";
images[15] = "image15a.jpg";

    // Set up Extra Map Images

images[16] = "image10b.jpg";
images[17] = "image11b.jpg";
images[18] = "image15b.jpg";
images[19] = "image15c.jpg";
images[20] = "image15d.jpg";
images[21] = "image15e.jpg";
images[22] = "image15f.jpg";
images[23] = "image15g.jpg";
images[24] = "mailboxMap.png";

    // Set up Image manipulation Variable

var image = document.querySelector("img");

    // Set up Items on Map (in pack or not (1 or 0), location, third entry listed below)

var axe = [0, 0, 0];        // Third array entry is 0 = unused, 1 = used
var spikes = [0, 1, 0];     // Third array entry is 0 = unused, 1 = used
var snacks = [0, 11, 0];    // Third array entry is 0 = unused, 1 = used
var shovel = [0, 10, 0];    // The third array entry is 0 = available or 1 = unavailable
var mail = 0;               // Mail is available when = 1, unavailable when = 0

var itemList = ["axe", "spikes", "snacks", "shovel", "logs"
                , "mail", "outback", "gate", "sign"];

var item = ""; // item Variable to check from lists


    // Set up Pack

var pack = [];


    // Accepted Inputs & Action variable & Input Field Variable

var okActs = ["take", "use", "check"];

var action = "";


    // Raw Input Data & Declare Refined Input

var inputRaw = document.querySelector("#input");

var inputNew = "";

    // Message Variable

var message = mapText[here];

    // Game Completion Variable

var win = 0;

    // Opener Text

var opener = 1;

        // Dispay the player's location

if (win === 0) {display();}
else {}

    // Button & Listen: Click

var button = document.querySelector("button");

button.style.cursor = "pointer";

document.getElementById("button").addEventListener("click", clickHandler);

    // Listen: Key 13

window.addEventListener("keydown", keydownHandler, false);


    // FUNCTION - Run when Button Clicked

function clickHandler() {
                        if (win === 0) {run();}
                        else if (win === 5) {endGame();}
                        else if (win > 0) {display();}    
                        else {}
                        }

    // FUNCTION - Run when Enter key Pressed

function keydownHandler(event) {
    
    if ((event.keyCode === 13) && (win === 0)) {run();}
    else if ((event.keyCode === 13) && (win === 5)) {endGame();}
    else if ((event.keyCode === 13) && (win > 0)) {display();}
    else {}
}


    // FUNCTION - Run Game Program

function run() {

    // Clean up Input to lowercase
    
inputNew = inputRaw.value;
inputNew = inputNew.toLowerCase();
console.log("action requested: " + inputNew);
      
    // Clear message field

message = mapText[here];

    // Directional Manipulation Options

if (inputNew === "north" && ((here == 2) || (here == 3) || (here == 4) || ((here == 7) && (spikes[2] == 1)) 
                             || (here == 10))) {here += 4; message = mapText[here]; }
else if (inputNew === "south" && ((here == 6) || (here == 7) || (here == 8) || (here == 11) || (here == 14)))
        {here -= 4; message = mapText[here];}
else if (inputNew === "east" && (((here >= 0) && (here < 3)) || ((here >= 4) && (here < 6)) ||
        ((here >= 8) && (here < 11)) || ((here == 14) && (axe[2] === 1)))) {here += 1; message = mapText[here];}
else if (inputNew === "west" && (((here > 0) && (here <= 3)) || ((here > 4) && (here <= 6)) ||
        ((here > 8) && (here <= 11)) || (here == 15))) {here -= 1; message = mapText[here];}
else if (inputNew === "north" || inputNew === "south" || inputNew === "east" || inputNew === "west") 
        {message = "Impossible to travel " + inputNew}

    // Action Manipulation Options
    
else if (inputNew === "use axe" || inputNew === "use spikes" 
         || inputNew === "use snacks" || inputNew === "use shovel") {useF();}
else if (inputNew === "take axe" || inputNew === "take spikes" 
         || inputNew === "take snacks" || inputNew === "take shovel") {takeF();}   
else if (inputNew === "check axe" || inputNew === "check spikes" || inputNew === "check mail" 
         || inputNew === "check snacks" || inputNew === "check shovel" || inputNew === "check outback" 
         || inputNew === "check logs" || inputNew === "check gate" || inputNew === "check sign") {checkF();}
    
    // Miscellaneous

else if (inputNew === "pack") {
    if (pack[0] === undefined) {message = "Pack: empty";}
    else {message = "Pack: " + pack;}}
else if (inputNew === "ronaustin") {window.open("images/mailboxMap.png");}
else if (inputNew === "reset") {endGame();}
else if (inputNew === "credits") {credits();}
else if (inputNew === "") {display();}
else {message = "Unacceptable Request";}

display(); // necessary to map navigation
}


        // FUNCTION - Use Item

function useF() {
    
        // For Loop sets item/action into variable
    
    for (i = 0; i < itemList.length; i++) {
    
        if (inputNew.indexOf(itemList[i]) !== -1) {
            item = itemList[i];
            console.log("item is " + item);
            break;
        }
    }
    
    switch (item) {
        case "axe": // options for axe use
            if ((here === 14) && (axe[0] === 1)) {
                axe[2] = 1;
                message = "Pulling out your axe, you're ready to climb safely to the <strong>east</strong>";
                mapText[14] = "A steep and exposed hillside heading <strong>east</strong>" + 
                            ", but you'll be fine with your axe";
            }
            else if ((here !== 14) && (axe[0] === 1)) {
                message = "Can't use the axe here";
            }
            else if (axe[0] === 0) {
                message = "You don't have the axe in your pack";
            }
            else {console.log("error use axe");}
            break;
            
        case "spikes": // options for spikes use
            if ((here === 7) && (spikes[0] === 1)) {
                spikes[2] = 1;
                mapText[7] = "Your spikes are attached, ready to keep heading <strong>north</strong>!";
                message = "Attaching the spikes to your boots, you gain traction and may proceed";
            }
            else if ((here !== 7) && (spikes[0] === 1)) {
                message = "Can't use the spikes here";
            }
            else if (spikes[0] === 0) {
                message = "You don't have the spikes in your pack";
            }
            else {console.log("error use spikes");}
            break;
            
        case "snacks": // options for snacks use
            if ((snacks[0] === 1) && (snacks[2] === 0)) {
                pack.pop("snacks");
                snacks[2] = 1;
                message = "SNACKS ARE DELICIOUS. YOU ARE OVERJOYED.";
            }
            else if ((snacks[2] === 1)) {
                message = "You ate all the snacks already...";
            }
            else if (snacks[0] === 0) {
                message = "You didn't pack any snacks, rookie";
            }
            else {console.log("error use snacks");}
            break;
        
        case "shovel": // options for shovel use
            if ((here === 15) && (shovel[0] === 1)) {
                mail = 1;
                mapText[15] = "What a beautiful view, let's <strong>check</strong> the mail!";
                message = "You dug out the mailbox and can now <strong>check</strong> the mail!";
                images[15] = images[19];
            }
            else if ((here !== 15) && (shovel[0] === 1)) {
                message = "Can't use the shovel here";
            }
            else if (shovel[0] === 0) {
                message = "You don't have the shovel in your pack";
            }
            else {console.log("error use shovel");}
            break;
            
        default:
            console.log("error use");
            break;
    }
        
    display();
}


        // FUNCTION - Take Item

function takeF() {
    
        // For Loop sets item/action into variable

    for (i = 0; i < itemList.length; i++) {
    
        if (inputNew.indexOf(itemList[i]) !== -1) {
            item = itemList[i];
            console.log("item is " + item);
            break;
        }
    }
    
    switch (item) {
        case "axe": // options for take axe
            if ((axe[0] === 0) && (axe[1] === here)) {
                pack.push("axe");
                axe[0] = 1;
                mapText[0] = "The Outback is locked with Discovery Pass displayed";
                message = "Axe placed in the pack";
                console.log("pack: " + pack);
            }
            else if (axe[0] === 1) {
                message = "Axe is already in pack";
            }
            else if (axe[1] !== here) {
                message = "Axe can't be found";
            }
            else {console.log("error take axe");}
            break;
            
        case "spikes": // options for take spikes
            if ((spikes[0] === 0) && (spikes[1] === here)) {
                pack.push("spikes");
                spikes[0] = 1;
                mapText[1] = "There is a foot path around the locked gate";
                mapText[7] = "You should put your <strong>spikes</strong> on to get up this";
                message = "Spikes placed in the pack";
                console.log("pack: " + pack);
            }
            else if (spikes[0] === 1) {
                message = "Spikes are already in pack";
            }
            else if (spikes[1] !== here) {
                message = "Spikes can't be found";
            }
            else {console.log("error take spikes");}
            break;
            
        case "snacks": // options for take snacks
            if ((snacks[0] === 0) && (snacks[1] === here)) {
                pack.push("snacks");
                snacks[0] = 1;
                mapText[11] = "Ready to push <strong>west</strong> to the junction";
                message = "Snacks placed in the pack";
                console.log("pack: " + pack);
            }
            else if ((snacks[0] === 1) && (snacks[2] === 0)) {
                message = "Snacks are already in pack";
            }
            else if ((snacks[1] !== here) || (snacks[2] === 1)){
                message = "Snacks can't be found";
            }
            else {console.log("error take snacks");}
            break;   
        
        case "shovel": // options for take shovel
            if ((shovel[0] === 0) && (shovel[1] === here) && (shovel[2] === 1)) {
                pack.push("shovel");
                shovel[0] = 1;
                mapText[10] = "Junction - North (Summit), West (New Trail), East (Old Trail)";
                message = "Shovel placed in the pack";
                images[10] = "image10a.jpg";
                console.log("pack: " + pack);
            }
            else if (shovel[0] === 1) {
                message = "Shovel is already in pack";
            }
            else if ((shovel[1] !== here) || (shovel[2] === 0)) {
                message = "Shovel can't be found";
            }
            else {console.log("error take shovel");}
            break; 
            
        default:
            console.log("error take");
            break;
    }
    
    display();
}


        // FUNCTION - Check Item/Area

function checkF() {
    
        // For Loop sets item/action into variable
    
    for (i = 0; i < itemList.length; i++) {
    
        if (inputNew.indexOf(itemList[i]) !== -1) {
            item = itemList[i];
            console.log("item is " + item);
            break;
        }
    }
    
    switch (item) {
            
        case "axe": // options for check axe
            if (axe[0] === 1) {
                message = "An ice axe for arresting a fall on steep icy/snowy slopes";
            }
            else if (axe[0] === 0) {
                message = "Axe can't be found";
            }
            else {console.log("error check axe");}
            break;
            
        case "spikes": // options for check spikes
            if (spikes[0] === 1) {
                message = "Traction devices for gaining purchase on icy trail";
            }
            else if (spikes[0] === 0) {
                message = "Spikes can't be found";
            }
            else {console.log("error check spikes");}
            break;
            
        case "snacks": // options for check snacks
            if ((snacks[0] === 1) && (snacks[2] === 0)) {
                message = "Sour gummy worms, Rips, and an apple. DELICIOUS trail jet fuel.";
            }
            else if (snacks[0] === 0) {
                message = "You didn't pack any snacks yourself, rookie";
            }
            else if (snacks[2] === 1) {
                message = "You ate all the snacks already..."
            }
            else {console.log("error check snacks");}
            break;
        
        case "shovel": // options for check shovel
            if ((shovel[0] === 1) || ((here === 10) && (shovel[2] === 1))){
                message = "A packable snow shovel for digging out snowy deposits";
            }
            else if (shovel[0] === 0) {
                message = "Shovel can't be found";
            }
            else {console.log("error check shovel");}
            break;
         
        case "logs": // options for check logs
            if ((here === 10) && (shovel[0] === 0)) {
                message = "A snow <strong>shovel</strong> is under the logs, you should take it";
                mapText[10] = "A three-way junction, a <strong>shovel</strong> lays by the sign";
                shovel[2] = 1;
                images[10] = images[16];
            }
            else if ((shovel[0] === 1) && (here === 10)) {
                message = "Nice pile of logs";
            }
            else if (here !== 10) {
                message = "You are not by the logs";
            }
            else {console.log("error check shovel");}
            break;
            
        case "outback": // options for check Subary Outback 2.5XT
            if ((here === 0) && (axe[0] === 0)) {
                message = "There is an <strong>axe</strong> in the car, you should take it";
            }
            else if ((here === 0) && (axe[0] === 1)) {
                message = "Manual transmission, all-wheel drive, 2.5L turbo Outback...";
            }
            else if (here !== 0) {
                message = "You are not in the parking lot";
            }
            else {console.log("error check outback");}
            break;
            
        case "gate": // options for check gate
            if ((here === 1) && (spikes[0] === 0)) {
                message = "There is a pair of <strong>spikes</strong> by the gate, you should take them";
            }
            else if ((here === 1) && (spikes[0] === 1)) {
                message = "What a good looking gate. Let's keep hiking!";
            }
            else if (here !== 1) {
                message = "You are not at the gate";
            }
            else {console.log("error check subaru");}
            break;
            
        case "sign": // options for check the various signs
            if (here === 2) {
                message = "New Trail: Longer than Old Trail, but less steep. " + 
                "Thanks <abbr title='Washington Trails Association'>WTA</abbr>!";
            }
            else if (here === 3) {
                message = "Old Trail: Short and steep, spikes required ahead";
            }
            else if (here === 10) {
                message = "Junction - North (Summit), West (New Trail), East (Old Trail)";
            }
            else {message = "There is no sign here";}
            break;
            
        case "mail": // options for check mail and ending the game
            if ((here === 15) && (mail === 1)) {
                images[15] = images[19];
                win = 1;
                here = 19;
            }
            else if ((here === 15) && (mail === 0)) {
                message = "You must dig out the mailbox with a <strong>shovel</strong> before checking the mail";
            }
            else if (here !== 15) {
                message = "You are not at the mailbox";
            }
            else {console.log("error check mail");}
            break;
            
        default:
            console.log("error check");
            break;
    }
    
    if (win === 0) {display();} // necessary to not skip first finish scene
    else{}
}

    // FUNCTION - Credits

function credits() {
    document.getElementById("hide").style.display = "none"; // Hide Input div
    message = mapText[12];
    here = 12;
    win = 5;
}

    // FUNCTION ( DISPLAY ) - Display the Game on screen

function display() {
        
    console.log(here);
    
        // Display Location

    document.getElementById("location").innerHTML = map[here];

        //Display Message
    
    document.getElementById("message").innerHTML = message;

        // Display Image
    
    document.getElementById("image").src = "images/" + images[here];   
  
        // Clear and refocus on input field

    input.value = "";
    document.getElementById("input").focus();
    
        // WIN GAME Check and Cycle through Pictures
    
    switch (win) {
        case 0:
            break;
        
        case 1:
            document.getElementById("hide").style.display = "none"; // Hide Input div
            mapText[15] = "Press Enter"; 
            here = 20;
            message = mapText[here];
            document.getElementById("message").innerHTML = message;
            document.getElementById("image").src = "images/" + images[here];
            document.getElementById("location").innerHTML = map[here];
            input.value = "";
            console.log("win: " + win);
            win++;
            break;
        
        case 2:
            here++;
            message = mapText[here];
            document.getElementById("message").innerHTML = message;
            document.getElementById("image").src = "images/" + images[here];
            document.getElementById("location").innerHTML = map[here];
            console.log("win: " + win);
            win++;
            break;
        
        case 3:
            here++;
            message = mapText[here];
            document.getElementById("message").innerHTML = message;
            document.getElementById("image").src = "images/" + images[here];
            document.getElementById("location").innerHTML = map[here];
            console.log("win: " + win);
            win++;
            break;
        
        case 4:
            here++;
            message = mapText[here];
            document.getElementById("message").innerHTML = message;
            document.getElementById("image").src = "images/" + images[here];
            document.getElementById("location").innerHTML = map[here];
            console.log("win: " + win);
            win++;
            break;
        
        default:
            break;
    }        
}

    // FUNCTION - End Game, Reset

function endGame() {
    location.href = "index.html";
}
