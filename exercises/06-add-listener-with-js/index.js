window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	let alertButton = document.querySelector("#theGreen").addEventListener("click", function() {
		alert("woohoo!");
	});
};

//the listener function here
