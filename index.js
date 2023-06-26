let homeScore = document.getElementById("homeScore");
let awayScore = document.getElementById("awayScore");
let initialScoreHome = 0;
let initialScoreAway = 0;

let foulHomeH = document.getElementById("foulHome");
let foulAwayA = document.getElementById("foulAway");
let initialFoulHome = 0;
let initialFoulAway = 0;

let periodCount = document.querySelector("#period")
let initialPeriod = 0;

function newGame(){
    
 periodCount.textContent = 0;
 homeScore.textContent = 0;
 awayScore.textContent = 0;
 foulHomeH.textContent =0;
 foulAwayA.textContent = 0;

 initialScoreHome = 0;
 initialScoreAway = 0;
 initialFoulHome = 0;
 initialFoulAway = 0;
 initialPeriod = 0;
    
}
function period(){
    initialPeriod+=1;
    periodCount.textContent = initialPeriod;
    let reset = initialPeriod;
    if(reset === 5)
    {
 periodCount.textContent = 0;
 homeScore.textContent = 0;
 awayScore.textContent = 0;
 foulHomeH.textContent =0;
 foulAwayA.textContent = 0;

 initialScoreHome = 0;
 initialScoreAway = 0;
 initialFoulHome = 0;
 initialFoulAway = 0;
 initialPeriod = 0;
    }
    
 
}


function add1home(){
    initialScoreHome+=1;
     homeScore.textContent = initialScoreHome;
    
}
function add2home(){
     initialScoreHome+=2;
     homeScore.textContent = initialScoreHome;
     
}
function add3home(){
     initialScoreHome+=3;
     homeScore.textContent = initialScoreHome;   
}

function add1away() {

    initialScoreAway+=1;
    awayScore.textContent = initialScoreAway;
}
function add2away() {
     initialScoreAway+=2;
    awayScore.textContent = initialScoreAway;   
}
function add3away() {
     initialScoreAway+=3;
    awayScore.textContent = initialScoreAway;   
}

function foulHome(){
    initialFoulHome+=1;    
    foulHomeH.textContent = initialFoulHome;
}
function foulAway(){
    initialFoulAway +=1;
    foulAwayA.textContent = initialFoulAway;
}





