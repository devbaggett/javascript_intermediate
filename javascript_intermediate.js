// Assignment: JavaScript Intermediate


// Part I

// Create a function called starString() that takes a number and returns a string of that many *.

function starString(num){
	if (typeof(num) != "number"){
		console.log("Not a valid number.")
		return false;
	}
	else{
		var newString = "";
		for (var i = 0; i < num; i++){
			newString += "*";
		}
	}
	return newString;
}


// Part II

// Create a function called drawStars() that takes an array of numbers and prints out *.

function drawStars(arr){
	var newString = "";
	for (var i = 0; i < arr.length; i++){
		while (arr[i] > 0){
			newString += "*";
			arr[i]--;
		}
		console.log(newString);
		newString = "";
	}
}


// Part III

// Modify the function above. Allow an array containing integers and strings to be passed to the drawStars() function. 
// When a string is passed, instead of displaying *, display the first letter of the string according to the example below. 
// You may use the .toLowerCase() string method for this part.

function drawStarStrings(arr){
	var newString = "";
	for (var i = 0; i < arr.length; i++){
		if (typeof(arr[i]) == "number"){
			while (arr[i] > 0){
				newString += "*";
				arr[i]--;
			}
		}
		else if (typeof(arr[i]) == "string"){
			for (var j = 0; j < arr[i].length; j++){
				newString += arr[i][0];
			}
		}
		console.log(newString);
		newString = "";
	}
}

let x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"];
drawStarStrings(x);