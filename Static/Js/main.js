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
	  },
	  2 : {
	  	1 : {
	  		"totalColors": 2,
        "totalSegmentInOneBottle": 2,
        "totalBottle": 3,
        "colorArr":[ ["R", "B"], ["B","R"], [] ]
	  	}
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


//-----------------------------------------------------------------------------------------


// main function ( its a self executing function run when the html is rendered completely )
(function() {

   // alert(getRandomInt( min = 5, max = 10));

   let currentLevel = 2;
   let currentObjectLength = Object.keys(LEVELS[currentLevel]).length;
   let currentComboNumber = getRandomInt(1,currentObjectLength+1);
   let currentComboObject = LEVELS[currentLevel][currentComboNumber];

   /*
   //debugging statements
   console.log(LEVELS[currentLevel]);
   console.log(currentComboNumber);
   console.log(currentComboObject);
   */

   bottleDrawer(currentComboObject);

})();



// function to get randome values
function getRandomInt( min = 0 , max = 0) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
// function end



function bottleDrawer( currentComboObject ){
	let parentBoxContainingColorBottles = document.getElementById("parentBox");

	parentBoxContainingColorBottlesInnerHtml = "";
	//alert(parentBox.innerText);

	console.log("in bottleDrawer funciton");
	console.log(currentComboObject["totalBottle"]);
	console.log(currentComboObject["totalSegmentInOneBottle"]);
	console.log(currentComboObject["colorArr"]);

	// loop to graw bottles
	for(let bottleIter=0; bottleIter<currentComboObject["totalBottle"]; bottleIter++){
		let oneColorBottle = `<div id="${bottleIter+1}" class="bottles mx-4 p-1">`;

		let bottleSegmentcolor = currentComboObject["colorArr"][bottleIter];
		// loop to draw segment in bottles
		for(let segmentIter=0; segmentIter < bottleSegmentcolor.length ; segmentIter++)
		{
			oneColorBottle = oneColorBottle +
			`<div class = "colorSegment my-1 mx-auto" style="background-color:${COLORPALLET[bottleSegmentcolor[segmentIter]]};">`+
			`${bottleIter+1}`+
			`</div>`; // closing the segment div
		}

		oneColorBottle = oneColorBottle + `</div>`;  // closing the bottle div

		parentBoxContainingColorBottlesInnerHtml = parentBoxContainingColorBottlesInnerHtml + oneColorBottle;
	}

	parentBoxContainingColorBottles.innerHTML = parentBoxContainingColorBottlesInnerHtml;
}


