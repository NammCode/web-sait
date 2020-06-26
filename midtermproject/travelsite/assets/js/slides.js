/**Based on code from Javascript and Ajax 7th Edition
 * 
 */
window.onload = showSlides;

//global variables

var myPix = new Array("assets/images/exner.jpg", "assets/images/countach.jpg", "assets/images/shelby_daytona.jpg", 
"assets/images/coffeBeautiful.jpg", "assets/images/coffecup.jpg", "assets/images/coffeEat.jpg", "assets/images/coffeFlower.jpg", "assets/images/coffeSeed.jpg");
var figure = new Array("Exner", "Countach", "Shelby Daytona", "Beautiful Coffe", "Cup Of Coffee", "Eating Coffee", "Flower Coffee", "Seed Coffee");
var thisPic = 0;

function showSlides() {
	if (thisPic < myPix.length) {
		document.getElementById("myPicture").src = myPix[thisPic];
		document.getElementById("text").innerHTML = figure[thisPic];
		thisPic++;
		setTimeout(showSlides, 2000);
	} else {
		thisPic = 0;
		document.getElementById("text").innerHTML = figure[thisPic];
		document.getElementById("myPicture").src = myPix[thisPic];
		thisPic++;
		setTimeout(showSlides, 2000);
	}
}
