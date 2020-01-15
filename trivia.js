var score = 0
var i = 1
var ans = 1
function submitAnswer(){
    y = document.getElementById("qans").value
    var yy=y.toUpperCase();
    x = document.getElementById("question").value
if (ans===1){
    y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
        score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
else if (ans===2){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
else if (ans===3){
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
	}
    document.view.qscore.value=score
}
else if (ans===4){
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
	}
    document.view.qscore.value=score
}
else if (ans===5){
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
	}
    document.view.qscore.value=score
}
else if (ans===6){
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
	}
    document.view.qscore.value=score
}
else if (ans===7){
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
	}
    document.view.qscore.value=score
}
else if (ans===8){
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
	}
    document.view.qscore.value=score
}
else if (ans===9){
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
	}
    document.view.qscore.value=score
}
else if (ans===10){
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
	}
    document.view.qscore.value=score
	}
	ans++; 

}

function main(){ 
if (i===1){ 
	document.view.qnum.value=i;
   	document.view.question.value ="What Year did Ac Milan last win the Champions League Title? \na)2007 \nb)2008 \nc)2006 \nd)2010";
    document.view.qans.value=""
}
else if (i===2){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Who was the keeper for Ac when they last won the Champions League ? \na)Dida \nb)Donnarumma  \nc)Reina \nd) Kalac";
    document.view.qans.value=""
}
else if (i===3){ 
	document.view.qnum.value=i;	
	document.view.question.value ="When was Ac Milan Founded ? \na)1899 \nb)1900 \nc)1903 \nd)1889";
    document.view.qans.value=""
}
else if (i===4){ 
	document.view.qnum.value=i;	
	document.view.question.value ="How many goals did ronaldinho score while at AC Milan? \na)34 \nb)24 \nc)26 \nd)41";
    document.view.qans.value=""
}
else if (i===5){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What postition did Pirlo play while at Ac Milan? \na)CM \nb)CAM \nc)CDM \nd)CB ";
    document.view.qans.value=""
}
else if (i===6){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What Years did Ibrohimovic play for Ac Milan? \na)2009-2010 \nb)2010-2012 \nc)2000-2005 \nd)From the beginnning of his Career till now";
    document.view.qans.value=""
}
else if (i===7){ 
	document.view.qnum.value=i;	
	document.view.question.value ="How many goals did Ac Milan conceed in total through 2010 and 2018? \na)More than 30 \nb)More than 50 \nc)Less than 40 \nd)More than 73";
    document.view.qans.value=""
}
else if (i===8){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Who was the manager of Ac Milan in 2019? \na)GiamPaolo \nb)Cannavaro \nc)Maldini \nd)Gattusso";
    document.view.qans.value=""
}
else if (i===9){ 
	document.view.qnum.value=i;	
	document.view.question.value ="How much is the Club worth? \na)$828 M \nb)$700 M \nc)$945 M \nd)$455 M";
    document.view.qans.value=""
}
else if (i===10){ 
	document.view.qnum.value=i;	
	document.view.question.value ="How many games did Donnarumma Play for Ac Milan since he first signed? \na)More than 100 \nb)Between 93 and 150 \nc)57 \nd)217";
    document.view.qans.value=""
}


	i++; 
}