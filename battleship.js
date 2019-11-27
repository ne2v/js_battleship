function battleship1() {
var location1=1, location2=2, location3=3; //ship's coordinates
//window.alert("tro lolo "+location2);
var guess=-1 //current houp number
var hits=0; // hits counter
var guesses =0; //total guesses counter
var isSunk =false; //
while (isSunk!=true) {
while(guess<0 || guess>6){
	guess=window.prompt("Enter your coordinates btw 0 and 6: ");
	if (guess<0 || guess>6 ) {
		window.alert("try againg "+guess+" is wrong");
	}
	else {guesses+=1;}
}

//window.alert("guess = "+guess);
if (guess==location1 || guess==location2 || guess==location3) {
	hits+=1;
	window.alert("Yohoho! your hits = "+hits);
	}
	if(hits==3){
	isSunk=true;
	window.alert("You win!!!! and your guesses = "+guesses);
}
else {
window.alert("next hope!");
guess=-1;
}
}
window.alert("the end");
}
battleship1();
