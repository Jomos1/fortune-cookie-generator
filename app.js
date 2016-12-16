function generateFortuneCookie() {
	var node = document.createElement("li");
	var textnode = document.createTextNode(fortuneList);
	node.appendChild(textnode);
	document.getElementById("furtyurn").appendChild(node);
}

var fortuneList = ["KYSN", "LOL", "HI"]

for (var i = fortuneList.length - 1; i >= 0; i--) {
	fortuneList[i]
}