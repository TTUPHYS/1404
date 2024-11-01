const buttonEl = document.getElementById("roll-button");
const buttonEl2 = document.getElementById("num-button");

const diceEl = document.getElementById("dice");
const rollHistoryEl = document.getElementById("roll-history");
const rollHistoryEl2 = document.getElementById("roll-history2");
const currentDieEl = document.getElementById("currentNumDices");
const x = document.getElementById("countTable");

let historyList = [];
let historyList2 = [];
let maxNum=document.getElementById("num").value;
let iniNumDices=document.getElementById("numDices").value;


function rollDice() {
  let tot=currentNumDices.value;
  
  let rollResult;
  historyList=[];
  if(tot==0){
    diceEl.innerHTML="All your dices decayed...&#9762";
  }
  for (let i = 0; i<currentNumDices.value;i++){
    rollResult = Math.floor(Math.random() * maxNum) + 1;
    if (rollResult==1){
        tot--;
    }
    // historyList.push("tot"+tot);
    historyList.push(rollResult);
  }
  //historyList.push(tot);
  //const rollResult = Math.floor(Math.random() * maxNum) + 1;
  //const diceFace = getDiceFace(rollResult);
  //diceEl.innerHTML = diceFace;
  historyList2.push(tot);
  currentNumDices.value=tot;
  
  updateRollHistory();
addRow();
}

function addRow(){
let i = historyList2.length
  var row = x.insertRow(i);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML=i
    cell2.innerHTML=getDiceFace(historyList2[i-1])
    // const listItem = document.createElement("li");
    // listItem.innerHTML = `${i + 1}&nbsp&nbsp<span>${getDiceFace(historyList2[i])}</span>`;
    rollHistoryEl2.appendChild(listItem);
//   for (let i = 1; i <historyList2.length; i++) {
//     var row = x.insertRow(i);
//     var cell1 = row.insertCell(0);
//     var cell2 = row.insertCell(1);
//     cell1.innerHTML=i
//     cell2.innerHTML=getDiceFace(historyList2[i-1])
//     // const listItem = document.createElement("li");
//     // listItem.innerHTML = `${i + 1}&nbsp&nbsp<span>${getDiceFace(historyList2[i])}</span>`;
//     rollHistoryEl2.appendChild(listItem);
//   }
}

function updateRollHistory() {
  rollHistoryEl.innerHTML = "";
  rollHistoryEl2.innerHTML = "";
  for (let i = historyList.length-1; i >=0; i--) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(historyList[i])}</span>`;
    rollHistoryEl.appendChild(listItem);
  }
  
}

function getDiceFace(rollResult) {
    return rollResult;
  switch (rollResult) {
    case 1:
      return "&#9856;";
    case 2:
      return "&#9857;";
    case 3:
      return "&#9858;";
    case 4:
      return "&#9859;";
    case 5:
      return "&#9860;";
    case 6:
      return "&#9861;";
    default:
      return "";
  }
}

//reset
buttonEl2.addEventListener("click", () => {
    let rowLen=x.rows.length;
    for (let i = 1; i <rowLen; i++) {
        x.deleteRow(1);
    }
    // var row = x.insertRow(0);
    // var cell1 = row.insertCell(0);
    // var cell2 = row.insertCell(1);
    // cell1.innerHTML='Time';
    // cell2.innerHTML='Count';
    

  maxNum=document.getElementById("num").value;
  iniNumDices=document.getElementById("numDices").value;
  historyList = [];
  historyList2 = [];
  currentNumDices.value=iniNumDices;
  diceEl.innerHTML = "&#9860;";
  //historyList.push(maxNum);
  updateRollHistory();
  
});

buttonEl.addEventListener("click", () => {
  rollDice();
});
