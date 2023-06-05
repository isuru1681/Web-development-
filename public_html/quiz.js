function start(){
  var x = document.getElementById("quiz");
  x.style.display = "block";
 
}


var totalScore;
var correctScore=0;
var incorrectScore=0;
var result=[];
var output;


function getRadioValue( radioArray ) {
	var i;
	for ( i = 0; i < radioArray.length; i++ ) {
		if ( radioArray[ i ].checked ) { 
			return radioArray[ i ].value;
		}
	}
	return "";
}
    //Checking the answer
function displayResults(){
          if (getRadioValue(document.quiz.q1)==2){
              correctScore+=2;
              result[0]="correct";
          }
          else{
             incorrectScore+=1;
             result[0]="incorrect";
          }
		   if (getRadioValue(document.quiz.q2)==1){
              correctScore+=2;
              result[1]="correct";
          }
          else{
             incorrectScore+=1;
             result[1]="incorrect";
          }
		            if (getRadioValue(document.quiz.q3)==4){
              correctScore+=2;
              result[2]="correct";
          }
          else{
             incorrectScore+=1;
             result[2]="incorrect";
          }
		            if (getRadioValue(document.quiz.q4)==4){
              correctScore+=2;
              result[3]="correct";
          }
          else{
             incorrectScore+=1;
             result[3]="incorrect";
          }
		  if (getRadioValue(document.quiz.q5)==1){
              correctScore+=2;
              result[4]="correct";
          }
          else{
             incorrectScore+=1;
             result[4]="incorrect";
          }
		  if (getRadioValue(document.quiz.q6)==1){
              correctScore+=2;
              result[5]="correct";
          }
          else{
             incorrectScore+=1;
             result[5]="incorrect";
          }
		  if (getRadioValue(document.quiz.q7)==4){
              correctScore+=2;
              result[6]="correct";
          }
          else{
             incorrectScore+=1;
             result[6]="incorrect";
          }
          if (getRadioValue(document.quiz.q8)==2){
              correctScore+=2;
              result[7]="correct";
          }
          else{
             incorrectScore+=1;
             result[7]="incorrect";
          }		  
          if (getRadioValue(document.quiz.q9)==4){
              correctScore+=2;
              result[8]="correct";
          }
          else{
             incorrectScore+=1;
             result[8]="incorrect";
          }	
          if (getRadioValue(document.quiz.q10)==4){
              correctScore+=2;
              result[9]="correct";
          }
          else{
             incorrectScore+=1;
             result[9]="incorrect";
          }	 
	 	
	//Cunting the total score
    totalScore = correctScore - incorrectScore;
	displayScore();
}
    //Displaying the score
function displayScore(){	
output="You have Scored = " + totalScore;

    //Displaying your answer is correct or incorrect
var one = "Question 1 : Your Answer is " + result[0];
var two = "Question 2 : Your Answer is " + result[1];
var three = "Question 3 : Your Answer is " + result[2];
var four = "Question 4 : Your Answer is " + result[3];
var five = "Question 5 : Your Answer is " + result[4];
var six = "Question 6 : Your Answer is " + result[5];
var seven = "Question 7 : Your Answer is " + result[6];
var eight = "Question 8 : Your Answer is " + result[7];
var nine = "Question 9 : Your Answer is " + result[8];
var ten = "Question 10 : Your Answer is " + result[9];

var y = document.getElementById("end");
  y.style.display = "block";
  
var timeCount = "Time : " + timeElapsed + " Seconds "; 

document.getElementById("end").innerHTML="<span>" + output + "</span><br><span>" +timeCount+ "</span><br><br><span>" + one + "</span><br><span>" + two + "</span><br><span>" + three + "</span><br><span>" + four + "</span><br><span>" + five + "</span><br><span>" + six + "</span><br><span>" + seven + "</span><br><span>" + eight + "</span><br><span>" + nine + "</span><br><span>" + ten + "</span><br>";

    //Color will change, depend on your score
if (correctScore>15){
document.getElementById("backColor").style.backgroundColor="#03AC13";
}
else if (correctScore>9){
document.getElementById("backColor").style.backgroundColor="#DFFF00";
}
else if (correctScore > 0){
document.getElementById("backColor").style.backgroundColor="orange";
}
else {
document.getElementById("backColor").style.backgroundColor="#CC1100";
}
}

    //Timer warning
var myVar;
function myFunction(){
    myVar=setTimeout(function (){stop();alert("Times Up! Check Your Score");displayResults() ;},60000);
}



//Stop the timer and display the score
function endQuiz(){
clearTimeout(myVar);
displayResults();
}

var timeElapsed = 0;
var myTimer = 0;

//Start the timer
function timer() {
    myTimer = setInterval(function(){
        timeElapsed += 1;
         document.getElementById("time").innerText = timeElapsed;
    }, 1000) ;

}
function stop() {
    clearInterval(myTimer);
}
//Relod the quiz
function backToQuiz(){
    location.reload();
}
