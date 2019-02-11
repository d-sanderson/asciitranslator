function convertToAscii() {
//creation of alpha and ascii arrays

	const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

	let ascii = []
	let textArea = document.getElementById("textArea")

	for (var i = 0; i < alphabet.length; i++) {
		ascii[i] = 65 + i;
	}

	//grab the text input and store it in a variable
	let text = textArea.value;

	//turn it into upper case for matching with alphabet array
	text = text.toUpperCase();

	//empty string to hold the ascii sentence
	let asciiText = "";

	//loop through all the letters in the user input
	for (let i = 0; i < text.length; i++) {

		//loop through all the letters of the alphabet
		for (let j = 0; j < alphabet.length; j++) {

			//if a letter in the user input matches with a letter in the alphabet
			if (text[i] === alphabet[j]) {

// turn that letter into its corresponding ascii number
				asciiText += ascii[j];
			}
		}

// if theres a space add it to the asciiText string
		if (text[i] === " ") {
			asciiText += " ";
		}

	}

	//spit asciiText string out onto the dom
	document.getElementById("asciiArea").textContent = asciiText;
}
