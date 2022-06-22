let alphabet = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z'
];

function randNum() {
	return Math.floor(Math.random() * 26);
}

function formRandWord() {
	let htmlString = '';
	for (i = 0; i < 5; i++) {
		let j = randNum();
		htmlString += alphabet[j];
	}
	return htmlString;
}

let word = formRandWord();
const parentHTMLElement = document.querySelector('.randWord');
parentHTMLElement.innerHTML += word;
