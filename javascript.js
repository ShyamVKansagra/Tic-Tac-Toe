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

//One Player logic
function onePlayer() {
  document.getElementById("menuScreen").style.display = "none";
  
  document.getElementById("xoSelector1p").style.display = "block"; 
}

function start1p(thisBtn) {
  document.getElementById("xoSelector1p").style.display = "none";
  
  document.getElementById("tttBoard1p").style.display = "block"; 
  
  play1p(thisBtn.value);
}

function play1p(p1Choice) {
  
  var compChoice = p1Choice == "X"? "O":"X";
  
  var turn = document.getElementById("turn1p");
  
  if(p1Choice == "O") {
  document.getElementById("_zerozero").value = "X";
    turn.innerHTML = "Hooman ("+p1Choice+") turn";
  }
  
  else {
  turn.innerHTML = "Hooman ("+ p1Choice +") turn";
  }
}

function _nextMove(tile) {
  var turnText = document.getElementById("turn1p").textContent;
  var noSym = turnText.split(" ")[1];
  
  document.getElementById(tile.id).value = noSym[1];
  
  _checkForWin(turnText);
  
  var nextPlayer = turnText.split(" ")[0] == "Hooman"? "Computer" : "Hooman";
  
  var nextSym = noSym[1] == "X"? "O":"X";
  
  document.getElementById("turn1p").innerHTML = nextPlayer+" ("+nextSym+") turn";
  //Computer's turn
  turnText = document.getElementById("turn1p").textContent;
  noSym = turnText.split(" ")[1];
  
  if(nextPlayer == "Computer") {
    aiMove(turnText);
    nextPlayer = turnText.split(" ")[0] == "Hooman"? "Computer" : "Hooman";
    nextSym = noSym[1] == "X"?"O":"X";
    document.getElementById("turn1p").innerHTML = nextPlayer+" ("+nextSym+") turn";
  }
}

function _checkForWin(turnText) {
  var winningStates = [["_zerozero","_zeroone","_zerotwo"],["_onezero","_oneone","_onetwo"],["_twozero","_twoone","_twotwo"],["_zerozero","_onezero","_twozero"],["_zeroone","_oneone","_twoone"],["_zerotwo","_onetwo","_twotwo"],["_zerozero","_oneone","_twotwo"],["_zerotwo","_oneone","_twozero"]];
  
  var noSym = turnText.split(" ")[1];
  
  var winningSym = noSym[1] == "X"?"X":"O";
  
  for(var i=0; i<winningStates.length; i++) {
          if(document.getElementById(winningStates[i][0]).value == winningSym && document.getElementById(winningStates[i][1]).value == winningSym && document.getElementById(winningStates[i][2]).value == winningSym) {
            alert(turnText.split(" ")[0]+" wins!");
            document.getElementById("menuScreen").style.display = "block";
            
            document.getElementById("tttBoard1p").style.display = "none";
            
            for(var k=0; k<winningStates.length; k++) {
              for(var l=0; l<3; l++) {
                document.getElementById(winningStates[k][l]).value = "";
              }
            }            
          }  
     } 
}

function aiMove(turnText) {
  var winningStates = [["_zerozero","_zeroone","_zerotwo"],["_zerozero","_zerotwo","_zeroone"],["_zeroone","_zerotwo","_zerozero"],
                       ["_onezero","_oneone","_onetwo"],["_onezero","_onetwo","_oneone"],["_oneone","_onetwo","_onezero"],
                       ["_twozero","_twoone","_twotwo"],["_twozero","_twotwo","_twoone"],["_twoone","_twotwo","_twozero"],
                       ["_zerozero","_onezero","_twozero"],["_zerozero","_twozero","_onezero"],["_onezero","_twozero","_zerozero"],
                       ["_zeroone","_oneone","_twoone"],["_zeroone","_twoone","_oneone"],["_twoone","_oneone","_zeroone"],
                       ["_zerotwo","_onetwo","_twotwo"],["_zerotwo","_twotwo","_onetwo"],["_twotwo","_onetwo","_zerotwo"],
                       ["_zerozero","_oneone","_twotwo"],["_zerozero","_twotwo","_oneone"],["_twotwo","_oneone","_zerozero"],
                       ["_zerotwo","_oneone","_twozero"],["_zerotwo","_twozero","_oneone"],["_twozero","_oneone","_zerotwo"]];
  var noSym = turnText.split(" ")[1];

  for(var i=0; i<winningStates.length; i++) {
      if(document.getElementById(winningStates[i][0]).value == noSym[1]
        && document.getElementById(winningStates[i][1]).value == noSym[1]
        && document.getElementById(winningStates[i][2]).value == "") {
        document.getElementById(winningStates[i][2]).value = noSym[1];
        _checkForWin(turnText);
      }
  }
  
  var possibleTiles = ["_zerozero","_oneone","_twotwo","_zerotwo","_twozero","_zeroone","_twoone","_onetwo","_onezero"];
  for(var k=0; k<possibleTiles.length; k++) {
      if(document.getElementById(possibleTiles[k]).value == "") {
        document.getElementById(possibleTiles[k]).value = noSym[1]; 
        break;
      }
    }
}