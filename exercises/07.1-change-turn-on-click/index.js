var currentUser = "Mario";

window.onload = function loadfn() {
	document.getElementById("screen").innerHTML = "It's " + currentUser + "'s turn";
};
let mapper = {
	mario: "juan",
	juan: "josh",
	josh: "mario"
};
window.turnChanger = function turnChanger() {
	currentUser = mapper[currentUser.toLowerCase()];

	document.getElementById("screen").innerHTML = "It's " + currentUser + "'s turn";
};
