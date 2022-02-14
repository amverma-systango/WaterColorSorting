// main function ( its a self executing function run when the html is rendered completely )

(function() {

	// Levels
	const LEVELS = {
	  1 : {
	     1 : {
	        "totalColors": 1,
	        "totalSegmentInOneBottle": 2,
	        "totalBottle": 2,
	        "colorArr":[ ["R"], ["R"] ]
	     },
	     2 : {
	        "totalColors": 1,
	        "totalSegmentInOneBottle": 3,
	        "totalBottle": 3,
	        "colorArr":[ ["B"], ["B"], ["B"] ]
	     },
	     3 : {
	        "totalColors": 1,
	        "totalSegmentInOneBottle": 2,
	        "totalBottle": 2,
	        "colorArr":[ ["G"], ["G"] ]
	     },
	  }
	};
	// console.log(LEVELS);
	// Levels end


	// Colors
	const COLORPALLET= {
		"B": "blue", 
		"C": "cyan",
		"F": "firebrick",
		"G": "green",
		"I": "indigo",
		"M": "moccasin",
		"O": "orange",
		"P": "purple",
		"R": "red",
		"T": "teal",
		"V": "violet",
		"Y": "yellow",
	};
	// console.log(COLORPALLET);
	// Colors end






   // alert(getRandomInt( min = 5, max = 10));

   let currentLevel = 1;
   let currentObjectLength = Object.keys(LEVELS[currentLevel]).length;
   let currentComboNumber = getRandomInt(1,currentObjectLength+1);
   let currentComboObject = LEVELS[currentLevel][currentComboNumber];

   /*
   //debugging statements
   console.log(LEVELS[currentLevel]);
   console.log(currentComboNumber);
   console.log(currentComboObject);
   */

   bottleDrawer(currentComboObject["totalBottle"],currentComboObject["totalSegmentInOneBottle"], currentComboObject["colorArr"]);

})();



// function to get randome values
function getRandomInt( min = 0 , max = 0) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
// function end



function bottleDrawer( totalBottlesToDraw, totalSegmentInOneBottle, colorArr ){
	let parentBoxContainingColorBottles = document.getElementById("parentBox");

	parentBoxContainingColorBottlesInnerHtml = "";
	//alert(parentBox.innerText);

	console.log("in bottleDrawer funciton");
	console.log(totalBottlesToDraw);
	console.log(totalSegmentInOneBottle);
	console.log(colorArr);

	for(let bottleIter=0; bottleIter<totalBottlesToDraw; bottleIter++){
		let oneColorBottle = `<div id="${bottleIter+1}" class="bottles mx-4 p-1">`;

		for(let segmentIter=0; segmentIter < totalSegmentInOneBottle ; segmentIter++)
		{
			oneColorBottle = oneColorBottle +
			`<div class = "colorSegment my-1 mx-auto">`+
			`${bottleIter+1}`+
			`</div>`; // closing the segment div
		}

		oneColorBottle = oneColorBottle + `</div>`;  // closing the bottle div

		parentBoxContainingColorBottlesInnerHtml = parentBoxContainingColorBottlesInnerHtml + oneColorBottle;
	}

	parentBoxContainingColorBottles.innerHTML = parentBoxContainingColorBottlesInnerHtml;
}


