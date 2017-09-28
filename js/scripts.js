var treeHeight = 0;

function drewTree(n) {
	star = "";
	console.log('');
	while (n > 0) {
		n--;
		star+='*';
		console.log(star);	
	}
}

function getNumber(n) {
	treeHeight = prompt("Podaj wielkość choinki:");
	return treeHeight;
}

getNumber();

while(treeHeight < 0) {
	alert("Tylko liczby całkowite, dodatnie!");
	getNumber();	
}

if (treeHeight == 0) alert("Nie lubisz świąt, co ponuraku?");	

drewTree(treeHeight);