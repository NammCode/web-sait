function displayDimension() {
	typeOfPlan = document.getElementById('planterType').value;
	switch (typeOfPlan) {
		case 'Square/Rectangular Cubes':
			document.getElementsByClassName('lengthClass')[0].style.display = 'block';
			document.getElementsByClassName('lengthClass')[1].style.display = 'inline-block';
			document.getElementsByClassName('widthClass')[0].style.display = 'block';
			document.getElementsByClassName('widthClass')[1].style.display = 'inline-block';
			document.getElementsByClassName('heightCLass')[0].style.display = 'block';
			document.getElementsByClassName('heightCLass')[1].style.display = 'inline-block';
			document.getElementsByClassName('radius1Class')[0].style.display = 'none';
			document.getElementsByClassName('radius1Class')[1].style.display = 'none';
			document.getElementsByClassName('radius2Class')[0].style.display = 'none';
			document.getElementsByClassName('radius2Class')[1].style.display = 'none';
			break;
		case 'Flat bottomed cylinders':
			document.getElementsByClassName('lengthClass')[0].style.display = 'none';
			document.getElementsByClassName('lengthClass')[1].style.display = 'none';
			document.getElementsByClassName('widthClass')[0].style.display = 'none';
			document.getElementsByClassName('widthClass')[1].style.display = 'none';
			document.getElementsByClassName('heightCLass')[0].style.display = 'block';
			document.getElementsByClassName('heightCLass')[1].style.display = 'inline-block';
			document.getElementsByClassName('radius1Class')[0].style.display = 'block';
			document.getElementsByClassName('radius1Class')[1].style.display = 'inline-block';
			document.getElementsByClassName('radius2Class')[0].style.display = 'none';
			document.getElementsByClassName('radius2Class')[1].style.display = 'none';
			break;
		case '½ Spherical':
			document.getElementsByClassName('lengthClass')[0].style.display = 'none';
			document.getElementsByClassName('lengthClass')[1].style.display = 'none';
			document.getElementsByClassName('widthClass')[0].style.display = 'none';
			document.getElementsByClassName('widthClass')[1].style.display = 'none';
			document.getElementsByClassName('heightCLass')[0].style.display = 'none';
			document.getElementsByClassName('heightCLass')[1].style.display = 'none';
			document.getElementsByClassName('radius1Class')[0].style.display = 'block';
			document.getElementsByClassName('radius1Class')[1].style.display = 'inline-block';
			document.getElementsByClassName('radius2Class')[0].style.display = 'none';
			document.getElementsByClassName('radius2Class')[1].style.display = 'none';
			break;
		case 'Truncated cone':
			document.getElementsByClassName('radius1Class')[0].innerHTML = 'Radius 1';
			document.getElementsByClassName('radius2Class')[0].innerHTML = 'Radius 2';

			document.getElementsByClassName('lengthClass')[0].style.display = 'none';
			document.getElementsByClassName('lengthClass')[1].style.display = 'none';
			document.getElementsByClassName('widthClass')[0].style.display = 'none';
			document.getElementsByClassName('widthClass')[1].style.display = 'none';
			document.getElementsByClassName('heightCLass')[0].style.display = 'block';
			document.getElementsByClassName('heightCLass')[1].style.display = 'inline-block';
			document.getElementsByClassName('radius1Class')[0].style.display = 'block';
			document.getElementsByClassName('radius1Class')[1].style.display = 'inline-block';
			document.getElementsByClassName('radius2Class')[0].style.display = 'block';
			document.getElementsByClassName('radius2Class')[1].style.display = 'inline-block';
			break;
		default:
			break;
	}
}

function calcVolume(typeOfPlan, length, width, height ,radius1 ,radius2) {
	var volume;
	switch (typeOfPlan) {
		case 'Square/Rectangular Cubes':
			volume = length * width * height;
			break;
		case 'Flat bottomed cylinders':
			volume = Math.PI*radius1*radius1*height;
			break;
		case '½ Spherical':
			volume = 1/2 * (4/3 * Math.PI * radius1 * radius1 * radius1);
			break;
		case 'Truncated cone':
			volume = 1/3 * Math.PI * (radius1*radius1 + radius1*radius2 + radius2*radius2)*height;
			break;
		default:
			break;
	}
	return volume;
}

function calcCost(typeOfPlan, volume) {
	var cost;
	switch (typeOfPlan) {
		case 'Square/Rectangular Cubes':
			cost = volume * 10;
			break;
		case 'Flat bottomed cylinders':
			cost = volume * 12;
			break;
		case '½ Spherical':
			cost = volume * 15;
			break;
		case 'Truncated cone':
			cost = volume * 20;
			break;
		default:
			break;
	}
	return cost;
}

function displayOrder() {
	var fName, lName, add, code, typeOfPlan, dimensions, volume, cost;
	var width, height, length, radius1, radius2;
	var receipt = '';

	fName = document.getElementById('firstName').value;
	lName = document.getElementById('lastName').value;
	add = document.getElementById('address').value;
	code = document.getElementById('postalCode').value;

	length = document.getElementById('length').value;
	width = document.getElementById('width').value;
	height = document.getElementById('height').value;
	radius1 = document.getElementById('radius1').value;
	radius2 = document.getElementById('radius2').value;

	typeOfPlan = document.getElementById('planterType').value;

	switch (typeOfPlan) {
		case 'Square/Rectangular Cubes':
			dimensions = 'Length ' + length + ' cm, ' + 'Width ' + width + ' cm, ' + 'Height ' + height + ' cm.';
			break;
		case 'Flat bottomed cylinders':
			dimensions = 'Radius ' + radius1 + ' cm, ' +  'Height ' + height + ' cm.';
			break;
		case '½ Spherical':
			dimensions = 'Radius ' + radius1 + ' cm.';
			break;
		case 'Truncated cone':
			dimensions = 'Radius1 ' + radius1 + ' cm, ' +  'Radius2 ' + radius2 + ' cm, ' + 'Height ' + height + ' cm.';
			break;
		default:
			break;
	}

	volume = calcVolume(typeOfPlan, length, width, height ,radius1 ,radius2);
	cost = calcCost(typeOfPlan, volume);

	receipt += '<h2>Customer Order</h2>';
	receipt += '<p><b>Full Name:</b> ' + fName + ' ' + lName + '</p>';
	receipt += '<p><b>Address:</b> ' + add + '</p>';
	receipt += '<p><b>Postal Code:</b> ' + code + '</p>';
	receipt += '<p><b>Type of Planter:</b> ' + typeOfPlan + '</p>';
	receipt += '<p><b>Dimensions:</b> ' + dimensions + '</p>';
	receipt += '<p><b>Volume:</b> ' + volume.toFixed(2) + ' cm3</p>';
	receipt += '<p><b>Cost:</b> ' + cost.toFixed(2) + '$</p>';
	document.getElementById('displayOrder').innerHTML = receipt;
}



