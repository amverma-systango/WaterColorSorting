(function() {

   // Levels

   const LEVELS = {
      1 : {
         1 : {
            totalColors: 1,
            totalSegmentInOneBottle: 2,
            totalBottle:2,
            "arr":[ ["R"], ["R"] ]
         },
         2 : {
            totalColors: 1,
            totalSegmentInOneBottle: 3,
            totalBottle:3,
            "arr":[ ["B"], ["B"], ["B"] ]
         },
         3 : {
            totalColors: 1,
            totalSegmentInOneBottle: 2,
            totalBottle:2,
            "arr":[ ["G"], ["G"] ]
         },
      }
   };

   // Levels end






   // alert(getRandomInt( min = 5, max = 10));

   let currentLevel = 1;
   let currentObjectLength = Object.keys(LEVELS[currentLevel]).length;
   let currentComboNumber = getRandomInt(1,currentObjectLength+1);
   let currentComboArray = LEVELS[currentLevel][currentComboNumber];

   console.log(LEVELS[currentLevel]);
   console.log(currentComboNumber);
   console.log(currentComboArray);

})();



// function to get randome values
function getRandomInt( min = 0 , max = 0) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
// function end

//console.log(levels);


