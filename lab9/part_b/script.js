/* Global Variables */
var customer = {};

/* Functions */
function saveData() {
	customer.fname = document.getElementById('fname').value;
	customer.bday = document.getElementById('birthdate').value;

	var ajaxUpdate = new XMLHttpRequest();
	ajaxUpdate.open("POST", "test.txt", true);

	ajaxUpdate.onreadystatechange = function() {
		console.log(this);
	}


	ajaxUpdate.setRequestHeader("Content-type", "application/")

	ajaxUpdate.send(customer);

}

function loadData() {

	var ajaxLoad = new XMLHttpRequest();
	ajaxLoad.onreadystatechange = function () {
		document.getElementById('display-box').innerHTML = this.responseText;
	}
	ajaxLoad.open("GET", "test.txt", true);
	ajaxLoad.send();

}