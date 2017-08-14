function twoPlayers() {
  document.getElementById("menuScreen").style.display = "none";
  
  document.getElementById("xoSelector").style.display = "block"; 
}

function start(thisBtn) {
  document.getElementById("xoSelector").style.display = "none";
  
  document.getElementById("tttBoard").style.display = "block"; 
  
  play(thisBtn.value);
}

function play(p1Choice) {
  var p2Choice = p1Choice == "X"? "O":"X";
  
  var turn = document.getElementById("turn");
  
  p1Choice == "X"? turn.innerHTML = "Player 1("+ p1Choice +") turn":turn.innerHTML = "Player 2("+ p2Choice +") turn";
}

function nextMove(tile) {
  var turnText = document.getElementById("turn").textContent;
  var noSym = turnText.split(" ")[1];
  
  document.getElementById(tile.id).value = noSym[2];
  
  checkForWin(noSym);
  
  var nextPlayer = noSym[0] == 1? 2 : 1;
  var nextSym = noSym[2] == "X"? "O":"X";
  document.getElementById("turn").innerHTML = "Player "+nextPlayer+"("+nextSym+") turn";
}

function checkForWin(noSym) {
  var winningStates = [["zerozero","zeroone","zerotwo"],["onezero","oneone","onetwo"],["twozero","twoone","twotwo"],["zerozero","onezero","twozero"],["zeroone","oneone","twoone"],["zerotwo","onetwo","twotwo"],["zerozero","oneone","twotwo"],["zerotwo","oneone","twozero"]];
  
  var winningSym = noSym[2] == "X"?"X":"O";
  
  for(var i=0; i<winningStates.length; i++) {
          if(document.getElementById(winningStates[i][0]).value == winningSym && document.getElementById(winningStates[i][1]).value == winningSym && document.getElementById(winningStates[i][2]).value == winningSym) {
            alert("Player "+noSym[0]+" wins! Congratulations!");
            document.getElementById("menuScreen").style.display = "block";
            
            document.getElementById("tttBoard").style.display = "none";
            
            for(var k=0; k<winningStates.length; k++) {
              for(var l=0; l<3; l++) {
                document.getElementById(winningStates[k][l]).value = "";
              }
            }
            
          }
       
     }
  
}
