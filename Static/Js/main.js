// Global Constants ------------------------------------

// Levels
/*
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
	  	},
	  	2 : {
	  		"totalColors": 2,
	      "totalSegmentInOneBottle": 3,
	      "totalBottle": 4,
	      "colorArr":[ ["R", "B", "R"], ["B","R","B"], [], [] ]
	  	}
  }
};
*/
// console.log(LEVELS);
// Levels end


// Colors
const ALL_COLORS = ["B","C","F","G","I","M","O","P","R","T","V","Y"];
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
let selectedBottles = [];
let currentComboObject = { 	
	  "totalColors": 1,
	  "totalSegmentInOneBottle": 2,
	  "totalBottle": 4,
	  "colorArr": []
	};
let bottleNumberWhichAreSorted = [];
let currentLevel = 1;
let generatedColorsPallet;


// SelectedBottle end

// Global Variables end------------------------------------





//-----------------------------------------------------------------------------------------


// main function ( its a self executing function run when the html is rendered completely )
(function() {

   // alert(getRandomInt( min = 5, max = 10));
   newgGame(currentLevel);
   

})();







// function to start a game
function newgGame( level ){

   //let currentObjectLength = Object.keys(LEVELS[level]).length;
   // let currentComboNumber = getRandomInt(1,currentObjectLength+1);
   // currentComboObject = LEVELS[level][currentComboNumber];

   
   currentComboObject;


   
   // generating randome color pallet here for current level
   randomeColorPalletSelector( currentComboObject.totalColors );
   console.log(generatedColorsPallet);

   
   generatBottleArray( currentComboObject.totalBottle, currentComboObject.totalSegmentInOneBottle, currentComboObject.totalColors );
   //console.table(currentComboObject.colorArr);
   console.log(currentComboObject);

   
   jumbleColors(currentComboObject.totalBottle, currentComboObject.totalSegmentInOneBottle);
   //console.table(currentComboObject.colorArr);
	



   bottleNumberWhichAreSorted = [];

   /*
   //debugging statements
   console.log(LEVELS[level]);
   console.log(currentComboNumber);
   console.log(currentComboObject);
   */
   
   //console.log(currentComboObject);
   bottleDrawer(currentComboObject);
}
// function end







// function to get randome values
function getRandomInt( min = 0 , max = 0) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
// function end







// funtion to draw bottles
function bottleDrawer(){
	// let parentBoxContainingColorBottles = document.getElementById("innerborder");
	let parentBoxContainingColorBottles = document.getElementById("mainPlayArea");
	

	parentBoxContainingColorBottlesInnerHtml = "";
	//alert(parentBox.innerText);

	/*
	console.log("in bottleDrawer funciton");
	console.log(currentComboObject["totalBottle"]);
	console.log(currentComboObject["totalSegmentInOneBottle"]);
	console.log(currentComboObject["colorArr"]);
	*/
	//console.log(currentComboObject);

	// loop to graw bottles
	for(let bottleIter=0; bottleIter<currentComboObject["totalBottle"]; bottleIter++){
		let oneColorBottle = `<div id="${bottleIter}" class="bottles mx-4 d-flex" onclick="bottolSelectToggle(${bottleIter})">`;
		oneColorBottle = oneColorBottle + `<div id="segmentCluster_${bottleIter}" class="segmentCluster align-self-end" >`;
		
		let bottleSegmentcolor = currentComboObject["colorArr"][bottleIter];
		// loop to draw segment in bottles
		for(let segmentIter=0; segmentIter < bottleSegmentcolor.length ; segmentIter++)
		{
			oneColorBottle = oneColorBottle +
			`<div class = "colorSegment" style="background-color:${COLORPALLET[bottleSegmentcolor[segmentIter]]};">`+
			`${bottleSegmentcolor[segmentIter]}`+
			`</div>`; // closing the segment div
		}
		
		oneColorBottle = oneColorBottle + `</div>`;
		oneColorBottle = oneColorBottle + `</div>`;  // closing the bottle div

		parentBoxContainingColorBottlesInnerHtml = parentBoxContainingColorBottlesInnerHtml + oneColorBottle;
	}

	parentBoxContainingColorBottles.innerHTML = parentBoxContainingColorBottlesInnerHtml;
}








function bottolSelectToggle( bottleNumber ){
	//alert("bottle clicked"+bottleNumber.toString());

	if(bottleNumberWhichAreSorted.includes(bottleNumber)){
		//console.log("bottle contain already sorted color");
		document.getElementById(bottleNumber.toString()).style.animation = "bottleShakeAnimation 0.5s ease 0s 1 normal none";;
	}
	else{
		//if( selectedBottles.includes(bottleNumber) && !currentComboObject["sortedBottleNumber"].includes(bottleNumber) ){
		if( selectedBottles.includes(bottleNumber) ){
			//console.log("already selecetd");
			indextoRemove = selectedBottles.indexOf(bottleNumber);
			selectedBottles.splice(indextoRemove,1);
			
			document.getElementById(bottleNumber.toString()).style.transform = "translateY(0px)";
		}
		else{
			selectedBottles.push(bottleNumber);

			// trigerring pourLiquidAToB fucntion when length of the selectedBottles array reach 2 
			if(selectedBottles.length === 2){
				pourLiquidOneBottleToAnother(selectedBottles[0],selectedBottles[1],1);
				
				//document.getElementById(selectedBottles[0].toString()).style.transform = "translateY(0px)";
				//document.getElementById(selectedBottles[1].toString()).style.transform = "translateY(0px)";
			}
			else{
				document.getElementById(bottleNumber.toString()).style.transform = "translateY(-20px)";
			}
		}
	}

	//console.log(selectedBottles);
	
}








function pourLiquidOneBottleToAnother( donnerBottleNumber, recieverBottleNumber, functionRecurtionNumber ){
	//alert("pour liquid function triggered");

	//console.log(donnerBottleNumber,recieverBottleNumber);

	
	let res = matchTop( currentComboObject["colorArr"][donnerBottleNumber], currentComboObject["colorArr"][recieverBottleNumber] )
	//console.log(res);

	if(res === 0){
		//console.log("invalid operation");
		document.getElementById(donnerBottleNumber.toString()).style.animation = "bottleShakeAnimation 0.5s ease 0s 1 normal none";
		document.getElementById(donnerBottleNumber.toString()).style.transform = "translateY(0px)";
		setTimeout(function() {
			bottleDrawer();
		}, 500);
	}
	else{
		//console.log("valid operation");

		// animation trigger
		// alert("function iteration number"+functionRecurtionNumber);

		if(functionRecurtionNumber === 1){
			pourAnimationStart(donnerBottleNumber, recieverBottleNumber);
		}

		setTimeout(function() {
			// actual operation
			let donatedSegment = currentComboObject["colorArr"][donnerBottleNumber].shift();
			currentComboObject["colorArr"][recieverBottleNumber].unshift(donatedSegment);

			if(isBottleSorted(recieverBottleNumber)){
				bottleNumberWhichAreSorted.push(recieverBottleNumber);
			}

			bottleDrawer(recieverBottleNumber);

			// generating a delay
			/*
			setTimeout(function() {
				// calling the pourLiquidOneBottleToAnother recursively so that if more than one segment
				// of same color is on the top they get transfered in one user initiated operation.
			  	pourLiquidOneBottleToAnother( donnerBottleNumber, recieverBottleNumber,functionRecurtionNumber+1 );
			}, 5);
			*/

			res = matchTop( currentComboObject["colorArr"][donnerBottleNumber], currentComboObject["colorArr"][recieverBottleNumber] );

			while(res === 1){
				let donatedSegment = currentComboObject["colorArr"][donnerBottleNumber].shift();
				currentComboObject["colorArr"][recieverBottleNumber].unshift(donatedSegment);

				if(isBottleSorted(recieverBottleNumber)){
					bottleNumberWhichAreSorted.push(recieverBottleNumber);
				}
				bottleDrawer(recieverBottleNumber);
				res = matchTop( currentComboObject["colorArr"][donnerBottleNumber], currentComboObject["colorArr"][recieverBottleNumber] );
			}

			// check 
			isGameCompleted();
		}, 500);
	}

	// empting the selectedBottles array in every case either operation fail or succed
	selectedBottles.splice(0,selectedBottles.length);
	// console.log(selectedBottles);
	
}








// funtion to check the condition for transfereing segment/liquid/color 
function matchTop( donnerArray, recieverArray ){
	//console.log(donnerArray);
	//console.log(recieverArray);

	if( donnerArray.length === 0){
		//console.log("donnerarray is empty so");
		return 0;
	}
	else if( recieverArray.length === 0 ){
		//console.log("recieverArray is empty so");
		return 1;
	}
	else if( recieverArray.length === currentComboObject["totalSegmentInOneBottle"]){
		//console.log("recieverArray is full so");
		return 0;
	}
	else if( donnerArray[0] === recieverArray[0]){
		//console.log("donnerArray top and recieverArray top are same color so");
		return 1;
	}
	else{
		//console.log("donnerArray top and recieverArray top are not same color so");
		return 0;
	}
}
//end








// function to check if the bottle is sorted
function isBottleSorted(bottleNumber){
	//console.log("in isBottleSorted function");
	let allColor = [];
	
	for( coloritr of currentComboObject["colorArr"][bottleNumber]){
		//console.log(coloritr);
		if( !(allColor.includes(coloritr)) ){
			allColor.push(coloritr);
		}
	}

	//console.log(allColor);

	
	if(currentComboObject["colorArr"][bottleNumber].length === currentComboObject["totalSegmentInOneBottle"] && allColor.length === 1){
		//console.log("bottle number "+bottleNumber.toString()+" is sorted");
		return true;	
	}
	else{
		return false;
	}
	
}
// end








// function to check if the current level is complete
function isGameCompleted(){

	if( bottleNumberWhichAreSorted.length === currentComboObject["totalColors"] ){
		setTimeout(function() {
			alert(`${currentLevel} level complete`);
			console.log("level complete");

			/*
			if( currentLevel === (Object.keys(LEVELS).length)+1 ){
				alert("all level completed");
			}
			else{
				newgGame(currentLevel);				
			}*/

			currentLevel++;
			if(currentLevel%2 === 0){
				//console.log("$$$$$$$$$$$$ even level");
				currentComboObject.totalBottle = currentComboObject.totalColors + 2;
			}
			else{
				//console.log("$$$$$$$$$$$$ odd level");	
				currentComboObject.totalColors++;
				currentComboObject.totalBottle = currentComboObject.totalColors + 3;		
			}

			newgGame(currentLevel);				

		}, 800);
	}
}
//end








// function which trigger pour animation
function pourAnimationStart(donnerBottleNumber, recieverBottleNumber){
	//console.log("donnerBottleNumber="+donnerBottleNumber+" recieverBottleNumber="+recieverBottleNumber);

	let donnerBottle = document.getElementById(donnerBottleNumber.toString());
	let recieverBottle = document.getElementById(recieverBottleNumber.toString());

	let donnerBottleSegmentCluster = document.getElementById("segmentCluster_"+donnerBottleNumber);
	let recieverBottleSegmentCluster = document.getElementById("segmentCluster_"+recieverBottleNumber);


	// let donnerCoordinates = donnerBottle.getBoundingClientRect();
	// let recieverCoordinates = recieverBottle.getBoundingClientRect();


	//document.getElementById(donnerBottleNumber.toString()).style.transform = "rotate(-70deg)";
	
	if( donnerBottleNumber < recieverBottleNumber ){
		donnerBottle.style.animation = "bottleTiltAnimationToRight 1s ease 0s 1 normal none";	
		donnerBottleSegmentCluster.style.animation = "liquidTiltAnimationToRight 1s ease 0s 1 normal none";
	}
	else{
		donnerBottle.style.animation = "bottleTiltAnimationToLeft 1s ease 0s 1 normal none";
		donnerBottleSegmentCluster.style.animation = "liquidTiltAnimationToLeft 1s ease 0s 1 normal none";
	}
	
}
// end








// funtion to jumble the colors in bottle
function jumbleColors(numberOfBottle, numberofSegmentInOneBottle){
   for( let jumbleColorOperationIter=0; jumbleColorOperationIter<currentLevel; jumbleColorOperationIter++){
       
		donnerBottle = getRandomInt(0,numberOfBottle);
		receiverBottle = getRandomInt(0,numberOfBottle);

		while(currentComboObject.colorArr[donnerBottle].length < 1){
			//console.log(donnerBottle,receiverBottle);
			console.log("donnerBottle empty");
			donnerBottle = getRandomInt(0,numberOfBottle);
		}

		while( donnerBottle === receiverBottle ){
			//console.log(donnerBottle,receiverBottle);
			console.log("both bottle are same");
			receiverBottle = getRandomInt(0,numberOfBottle);
		}

		while(currentComboObject.colorArr[receiverBottle].length === numberofSegmentInOneBottle){
			//console.log(donnerBottle,receiverBottle);
			console.log("receiverBottle full");
			receiverBottle = getRandomInt(0,numberOfBottle);
		}

		// let newOperation = [1,2,3];
		let newOperation = [donnerBottle,receiverBottle];
		//console.log("final operation",newOperation);

		let donatedSegment = currentComboObject.colorArr[donnerBottle].shift();
		currentComboObject.colorArr[receiverBottle].unshift(donatedSegment);

   }
}
//end









// funtion to generate array of sorted bottle dynamically
function generatBottleArray( totalNumberOfBottle, totalSegmentInOneBottle, totalColors){
	currentComboObject.colorArr = [];
	for( let bottleArrayGenerateItr = 0; bottleArrayGenerateItr < totalNumberOfBottle; bottleArrayGenerateItr++ ){

	 if(bottleArrayGenerateItr < totalColors){
	   oneBottleArray = new Array(totalSegmentInOneBottle).fill(generatedColorsPallet[bottleArrayGenerateItr]);
	   currentComboObject.colorArr.push(oneBottleArray);
	 }
	 else{
	   currentComboObject.colorArr.push([]);
	 }

	}
}
//end








// function to pick randome colors pallet
function randomeColorPalletSelector( numberOfColors ){
  generatedColorsPallet = [];

  let randomColorSelectIter = 0;
  while(randomColorSelectIter < numberOfColors){

    let randomeColor = ALL_COLORS[getRandomInt(0,ALL_COLORS.length)];
    if( !generatedColorsPallet.includes(randomeColor))
      { 
        generatedColorsPallet.push(randomeColor);
        randomColorSelectIter++;
      }
  }
}
//end