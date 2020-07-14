function convertFromCentimeters(centimeters) {
    var inches;

    inches = centimeters / 2.54;

    document.getElementById('inches').value = inches.toFixed(2);
}


function convertFromInches(inches) {
    var centimeters;

    centimeters = inches * 2.54;

    document.getElementById('centimeters').value = centimeters.toFixed(2);

}

function convertFromGallons(gallons) {
    var litres;

    litres = gallons * 4.54;

    document.getElementById('litres').value = litres.toFixed(2);
}

function convertFromLitres(litres) {
    var gallons;

    gallons = litres / 4.54;

    document.getElementById('gallons').value = gallons.toFixed(2);

}

function convertFromSqfeet(sqfeet) {
    var sqmeter;

    sqmeter = sqfeet * 0.09290304;

    document.getElementById('sqmeter').value = sqmeter.toFixed(2);
}

function convertFromSqmeter(sqmeter) {
    var sqfeet;

    sqfeet = sqmeter / 0.09290304;

    document.getElementById('sqfeet').value = sqfeet.toFixed(2);

}

function convertFromMeter(meters) {
    var feet;

    feet = meters * 3.28;

    document.getElementById('feet').value = feet.toFixed(2);

}

function convertFromFeet(feet) {
    var meters;

    meters = feet / 3.28;

    document.getElementById('meters').value = meters.toFixed(2);

}