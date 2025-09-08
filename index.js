// code your solution here
const record =[
    {year : "2015", result: "W"},
    {year : "2014", result: "N/A"},
    {year :"2013", result: "L"},
]
// function that singles out a single result 
function superbowlWin(records) {
  const win = records.find(function(game) {
    return game.result === "W";
  });
  return win ? win.year : undefined;
}
