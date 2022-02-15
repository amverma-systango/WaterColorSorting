// Global Constants ------------------------------------

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

// Global Constants end------------------------------------






// Global Variables ---------------------------------------


// SelectedBottle
selectedBottles = [];
let currentComboObject;
let bottleNumberWhichAreSorted;

// SelectedBottle end

// Global Variables end------------------------------------





//-----------------------------------------------------------------------------------------


// main function ( its a self executing function run when the html is rendered completely )
(function() {

   // alert(getRandomInt( min = 5, max = 10));
   newgGame(1);
   

})();

// function to start a game
function newgGame( level ){
	let currentLevel = level;
   let currentObjectLength = Object.keys(LEVELS[currentLevel]).length;
   let currentComboNumber = getRandomInt(1,currentObjectLength+1);
   currentComboObject = LEVELS[currentLevel][currentComboNumber];
   bottleNumberWhichAreSorted = [];

   /*
   //debugging statements
   console.log(LEVELS[currentLevel]);
   console.log(currentComboNumber);
   console.log(currentComboObject);
   */

   bottleDrawer(currentComboObject);
}



// function to get randome values
function getRandomInt( min = 0 , max = 0) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
// function end



function bottleDrawer(){
	let parentBoxContainingColorBottles = document.getElementById("parentBox");

	parentBoxContainingColorBottlesInnerHtml = "";
	//alert(parentBox.innerText);

	/*
	console.log("in bottleDrawer funciton");
	console.log(currentComboObject["totalBottle"]);
	console.log(currentComboObject["totalSegmentInOneBottle"]);
	console.log(currentComboObject["colorArr"]);
	*/
	console.log(currentComboObject);

	// loop to graw bottles
	for(let bottleIter=0; bottleIter<currentComboObject["totalBottle"]; bottleIter++){
		let oneColorBottle = `<div id="${bottleIter}" class="bottles mx-4 p-1" onclick="bottolSelectToggle(${bottleIter})">`;

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


function bottolSelectToggle( bottleNumber ){
	//alert("bottle clicked"+bottleNumber.toString());

	if( selectedBottles.includes(bottleNumber) && !currentComboObject["sortedBottleNumber"].includes(bottleNumber) ){
		console.log("already selecetd");
		indextoRemove = selectedBottles.indexOf(bottleNumber);
		selectedBottles.splice(indextoRemove,1);
	}
	else{
		selectedBottles.push(bottleNumber);

		// trigerring pourLiquidAToB fucntion when length of the selectedBottles array reach 2 
		if(selectedBottles.length === 2){
			pourLiquidOneBottleToAnother(selectedBottles[0],selectedBottles[1]);
		}
	}

	//console.log(selectedBottles);
	
}



function pourLiquidOneBottleToAnother( donnerBottleNumber, recieverBottleNumber ){
	//alert("pour liquid function triggered");

	console.log(donnerBottleNumber,recieverBottleNumber);

	
	res = matchTop( currentComboObject["colorArr"][donnerBottleNumber], currentComboObject["colorArr"][recieverBottleNumber] )
	//console.log(res);

	if(res === 0){
		console.log("invalid operation");	
	}
	else{
		console.log("valid operation");
		let donatedSegment = currentComboObject["colorArr"][donnerBottleNumber].shift();
		currentComboObject["colorArr"][recieverBottleNumber].unshift(donatedSegment);
		bottleDrawer();
	}

	// empting the selectedBottles array in every case either operation fail or succed
	selectedBottles.splice(0,selectedBottles.length);
	console.log(selectedBottles);
	
}


function matchTop( donnerArray, recieverArray ){
	console.log(donnerArray);
	console.log(recieverArray);

	if( donnerArray.length === 0){
		console.log("donnerarray is empty so");
		return 0;
	}
	else if( recieverArray.length === 0 ){
		console.log("recieverArray is empty so");
		return 1;
	}
	else if( recieverArray.length === currentComboObject["totalSegmentInOneBottle"]){
		console.log("recieverArray is full so");
		return 0;
	}
	else if( donnerArray[0] === recieverArray[0]){
		console.log("donnerArray top and recieverArray top are same color so");
		return 1;
	}
	else{
		console.log("donnerArray top and recieverArray top are not same color so");
		return 0;
	}
}