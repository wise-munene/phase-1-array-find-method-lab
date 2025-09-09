// code your solution here
const record =[
    {year : "2015", result: "W"},
    {year : "2014", result: "N/A"},
    {year :"2013", result: "L"},
]
// function that singles out a single result 
function superbowlWin(record) {
  const win = record.find(function(game) {        // game is the object eg year:2015, result: w
    return game.result === "W";
  });
  return win ? win.year : undefined; // if a winning game is found return the year of that win , if no winning game return unefined
}
