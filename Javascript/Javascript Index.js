// JavaScript For Welcome
var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
	greeting = 'Good Evening Welcome to the Cinema House';
}	else if (hourNow >12) {
	greeting = 'Good Afternon Welcome to the Cinema House';
}	else if (hourNow > 0) {
	greeting = 'Good Morning Welcome to the Cinema House';
}	else {
	greeting = 'Welcome';
}
document.write(greeting);
