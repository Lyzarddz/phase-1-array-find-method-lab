// code your solution here

function superbowlWin(arr){
   const winner = arr.find(el => el.result === "W");
   if (winner){
       return winner.year
   } else {
       return undefined;
   }
}

