//#THESTRUGGLEISREAL
var k = -1; 
var numOfFortunesGenerated = 0;

var generateFortuneCookie = function () {


    if (k < 0) {
        randArray = shuffle(randArray);
    }
    k++;
    numOfFortunesGenerated++
    if (k > fortunesList.length - 1) {
        k = 0;
        randArray = shuffle(randArray);
    }


    document.getElementById("fortune-text").innerHTML = fortunesList[randArray[k]];


    var node = document.createElement("LI");
    var divnode = document.createElement("DIV");
    var textnode = document.createTextNode(fortunesList[randArray[k]]);
    var ulList = document.getElementById("fortune-cookie-text");
    
    if (k===0) {  
        divnode.appendChild(textnode);
        node.appendChild(divnode);
        document.getElementById("fortune-cookie-text").appendChild(node);
    } else {
        divnode.appendChild(textnode);
        node.appendChild(divnode);
        ulList.insertBefore(node, ulList.childNodes[0]);
    }


    document.getElementById("stats").innerHTML = numOfFortunesGenerated + " fortunes generated";
}


//1/11/17 11:40PM PSA:PLEASE CHECK IF EVERYTHING HAS A COMMA AFTER IT OR EVERYTHING BREAKS
var fortunesList = [
    "You disonah yoru famiry!",
    "You will meet the love of your life! But they're already married.",
    "SUPRISE PIMP SLAP!",
    "The sorusuru sutone says 'KILL YOUR SELF'",
    "The noob is strong with this one",
    "Irritated I have become. Annoying your face is.",
    "Why do you need a fortune? Is your life that sad?",
    "Justice rai--HUEEEGH",
    "A-Mei-zing that you are still reading this.",
    "ブタ!",
    "やめろう！！",
    "なに？！ まさか？！ ",
    "I would say i'm dissapointed in you, but thats your parents job.",
    "Want life advice? Call now! @ 1-800-273-8255",
    "HOLY SHI- Oh, it's just you.",
    "The person next to you is in love with you and remember, love knows no age/gender!",
    "You are now aware of your blinking.",
    "You are now aware of your breathing",
    "You now feel the clothes on your body",
    "You: :D Life: No. You: :(",
    "Remeber if life gives you lemos, Cave Johnson.",
    "Always remember Cave Johnson.",
    "Anyone else want Soulja boy and Chris Brown knock each other out?",
    "It's 11 PM, WTH am I doing with my life writing fortunes for a living? What went wrong?",
    "YOU WANT SAD? WATCH THE END OF MARLEY & ME!",
    "The entire Bee movie but everytime the word 'bee' is said it switches to a 10 hour version of He-Man's 'Heyyayyayyayy' song, and every time 'whats goin on?' is said it switches back to the bee movie.",
    "Don't wanna be a loser? Just friendly life advice: https://suicidepreventionlifeline.org/"
//1/11/17 11:10 PM... KILL ME
//11:12 PM ... WHHHHHHHHHHHHHHYYYYYYYYYYYYY WONT THIS CODE WORK WARUGUHUHUHUH

]

for (var randArray = [], i = 0; i < fortunesList.length; i++) {
    randArray[i] = i;
}

function shuffle(array) {
    var tmp, current, top = array.length;
    if (top)
        while (--top) {
            current = Math.floor(Math.random() * (top + 1));
            tmp = array[current];
            array[current] = array[top];
            array[top] = tmp;
        }
    return array;
}
//DONE! FINALLY...WAIT I FORGOT TO DO CSS... FFFFFFFFFFFFFUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU-
