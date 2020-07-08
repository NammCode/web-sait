window.onload = initialize;

function initialize() {
    var todayDate = new Date();
    document.getElementById('currentDate').innerHTML = todayDate;
}

function calcOrder() {
    var pizzaType, pizzaSize, numOfPizza, sandwichType, numOfSand,
        drinkType, drinkSize, numOfDrink;
    var pizzaToppings = [];
    var orders = '';
    var pizzaCost, sandCost, drinkCost, toppingCost = 0;
    pizzaType = document.querySelector('input[name="pizzaType"]:checked').value;
    numOfPizza = document.getElementById('pizzaCount').value;
    pizzaSize = document.getElementById('pizzaSize').value;

    var checkboxs = document.querySelectorAll('input[name="pizzaToppings"]:checked');
    for (var i = 0; i < checkboxs.length; i++) {
        pizzaToppings.push(checkboxs[i].value);
    }

    switch (pizzaSize) {
        case 'Small':
            pizzaCost = 8.5;
            break;
        case 'Medium':
            pizzaCost = 11.5;
            break;
        case 'Large':
            pizzaCost = 14;
            break;
        case 'Extra Large':
            pizzaCost = 16.5;
            break;
        default:
            pizzaCost = 0;
    }
    pizzaCost *= numOfPizza;

    sandwichType = document.querySelector('input[name="sandwichType"]:checked').value;
    numOfSand = document.getElementById('sandwichCount').value;

    switch (sandwichType) {
        case 'All Garden Vegetarian':
            sandCost = 7.5;
            break;
        case 'Big Beef on a Bun':
            sandCost = 8.5;
            break;
        case 'Mixed Grill':
            sandCost = 9.5;
            break;
        case 'Grilled Pork':
            sandCost = 9.5;
            break;
        default:
            sandCost = 0;
    }
    sandCost *= numOfSand;

    drinkType = document.querySelector('input[name="drinkType"]:checked').value;
    drinkSize = document.getElementById('drinkSize').value;
    numOfDrink = document.getElementById('drinkCount').value;

    switch (drinkSize) {
        case 'Small':
            drinkCost = 1.25;
            break;
        case 'Medium':
            drinkCost = 1.75;
            break;
        case 'Large':
            drinkCost = 2;
            break;
        default:
            drinkCost = 0;
    }
    drinkCost *= numOfDrink;

    orders += '<p>' + numOfPizza + ' ' + pizzaSize + ' ' + pizzaType + ' Pizza $' + pizzaCost + '</p>';
    orders += '<p>Extra: ';
    for (var i = 0; i < pizzaToppings.length; i++) {
        orders += pizzaToppings[i] + ' ';
        toppingCost += 1.75;
    }
    orders += '$' + toppingCost + '</p>';
    orders += '<p>' + numOfSand + ' ' + sandwichType + ' Sandwiches $' + sandCost + '</p>';
    orders += '<p>' + numOfDrink + ' ' + drinkSize + ' ' + drinkType + ' $' + drinkCost + '</p>';

    displayOrder(orders);
}

function displayOrder(orders) {
    var fName, lName, address, phoneNumber;
    var receipt = '';

    fName = document.getElementById('firstName').value;
    lName = document.getElementById('lastName').value;
    address = document.getElementById('address').value;
    phoneNumber = document.getElementById('phone').value;

    receipt += '<h4>Customer Order</h4>';
    receipt += '<p><b>Full Name: </b>' + fName + ' ' + lName + '</p>';
    receipt += '<p><b>Address: </b>' + address + '</p>';
    receipt += '<p><b>Phone Number: </b>' + phoneNumber + '</p>';
    receipt += '<h4>Order Details</h4>';
    receipt += orders;

    document.getElementById('displayOrder').innerHTML = receipt;
}