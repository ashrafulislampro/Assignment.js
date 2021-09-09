var name = ["Hazrat Omar Ebnol Khattab","kamal", "Jama", "Tomals", "Abdullah", "Khalid ben Oalid","tererer", "tyutyrr",];
var longest_length = 0;
// var friend_name = "";
var index = 0;
var largestNameArray = [];

for (var i = 0; i < name.length; i++) {
          var friends = name[i];
          if (friends.length > longest_length) {
                    longest_length = friends.length;
                    index = i;
                    var friend_name = name[index];
                    //    console.log(index);
                     largestNameArray.push(friend_name);
          }
}
// console.log(friend_name);
// console.log(largestNameArray);
// console.log(index);
// console.log(longest_length);

function findLongestWord(array) {
          var longestWord = "";
          var arr = [];
          array.forEach(function(word) {
            if(word.length > longestWord.length) {
              longestWord = word;
              arr.push(longestWord);
            }
          });
        
          return arr;
        }
        
        var word = findLongestWord(["The","quick","brown", "fox", "jumped", "over", "the","qwertyuiop", "lazy", "dog"]);
        console.log(word);

var plor = ["bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa","jjjjjjjjjjjjjjj", "xxwwkktt", "iu", "qqquuhii", "dvvvwz"];


function longestString(plorp) {
    var tlength = 0;
    var wholeArr = [];
    for(var i =0; i < plorp.length; i++){
      if(tlength < plorp[i].length){
        tlength = plorp[i].length;
      }
    }
    for(var j =0; j < plorp.length; j++){
      if(plorp[j].length == tlength){
         wholeArr.push(plorp[j]);
      }
    }
   return wholeArr;
}


// console.log(longestString(plor));