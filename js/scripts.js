var treeHeight = 0;

function drawTree(n) {
	star = "";
	for (i = 0; i < n; i++) {
		star += '*';
		console.log(star);	
	}
}

function getNumber() {
	treeHeight = prompt("Podaj wielkość choinki:");
	return treeHeight;
}


do {
	getNumber();
	drawTree(treeHeight);
	if (treeHeight < 0) alert("Tylko liczby całkowite, dodatnie!");
	else if (treeHeight == 0) alert("Nie lubisz świąt, co ponuraku?");	
}
while(treeHeight < 0)

