function myMoveFunction(ev) {
  document.getElementById("demo").innerHTML =
  "offsetX= " + ev.offsetX;
}

function myEnterFunction(ev) {
  document.getElementById("demo2").innerHTML =
  "offsetX= " + ev.offsetX;
}

function myOverFunction(ev) {
  document.getElementById("demo3").innerHTML =
  "offsetX= " + ev.offsetX;
}

var clickCounter = 0;

function myClickFunction(ev) {
  clickCounter++
  if(clickCounter % 2 == 0)
  { 
	document.getElementById("demo4").innerHTML = "X" ;
  }
  else
  { 
	document.getElementById("demo4").innerHTML = "O";
  }
}

var clickXO = 1;

function myTicTacToeFunction(ev) {
	clickXO++
	
	if (clickXO % 2 == 0)
	{
		ev.target.innerHTML = "X";
	}
	else
	{
		ev.target.innerHTML = "O";
	}
}

