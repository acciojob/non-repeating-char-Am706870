function firstNonRepeatedChar(str) {
	let charcount = {};
	for(let char of str){
		char = char.toLowerCase();
		charcount[char] = (charcount[char] || 0)+1;
	}

	for(char of str){ 
		if(charcount[char.toLowerCase()]===1){
			return char;
		}
	}
	return null;
 // Write your code here
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
