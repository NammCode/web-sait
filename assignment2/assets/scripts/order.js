// on page load 
window.onload = initialize;

var customer = {};

customer.info = {
    fname: '',
    lname: '',
    address: '',
    phone: 0
};

customer.order = {
    pizzas: [],
    sandwichs: [],
    drinks: [],
    orderCost: 0
};



function initialize() {
    var todayDate = new Date();
    document.getElementById('currentDate').innerHTML = todayDate;
}

function getOrder() {

    var pizza = {
        pizzaType: '',
        pizzaSize: '',
        numOfPizza: 3,
        pizzaToppings: [],
        pizzaCost: 0
    };

    var sandwich = {
        sandwichType: '',
        numOfSand: 0,
        sandwichCost: 0
    };

    var drink = {
        drinkType: '',
        drinkSize: '',
        numOfDrink: 0
    };

    pizza.pizzaType = document.querySelector('input[name="pizzaType"]:checked').value;
    pizza.numOfPizza = document.getElementById('pizzaCount').value;
    pizza.pizzaSize = document.getElementById('pizzaSize').value;

    var checkboxs = document.querySelectorAll('input[name="pizzaToppings"]:checked');
    for (var i = 0; i < checkboxs.length; i++) {
        pizza.pizzaToppings.push(checkboxs[i].value);
    }

    switch (pizza.pizzaSize) {
        case 'Small':
            pizza.pizzaCost = 8.5;
            break;
        case 'Medium':
            pizza.pizzaCost = 11.5;
            break;
        case 'Large':
            pizza.pizzaCost = 14;
            break;
        case 'Extra Large':
            pizza.pizzaCost = 16.5;
            break;
        default:
            pizza.pizzaCost = 0;
    }
    pizza.pizzaCost *= pizza.numOfPizza;

    sandwich.sandwichType = document.querySelector('input[name="sandwichType"]:checked').value;
    sandwich.numOfSand = document.getElementById('sandwichCount').value;

    switch (sandwich.sandwichType) {
        case 'All Garden Vegetarian':
            sandwich.sandwichCost = 7.5;
            break;
        case 'Big Beef on a Bun':
            sandwich.sandwichCost = 8.5;
            break;
        case 'Mixed Grill':
            sandwich.sandwichCost = 9.5;
            break;
        case 'Grilled Pork':
            sandwich.sandwichCost = 9.5;
            break;
        default:
            sandwich.sandwichCost = 0;
    }
    sandwich.sandwichCost *= sandwich.numOfSand;

    drink.drinkType = document.querySelector('input[name="drinkType"]:checked').value;
    drink.drinkSize = document.getElementById('drinkSize').value;
    drink.numOfDrink = document.getElementById('drinkCount').value;

    switch (drink.drinkSize) {
        case 'Small':
            drink.drinkCost = 1.25;
            break;
        case 'Medium':
            drink.drinkCost = 1.75;
            break;
        case 'Large':
            drink.drinkCost = 2;
            break;
        default:
            drink.drinkCost = 0;
    }
    drink.drinkCost *= drink.numOfDrink;

    customer.order.pizzas.push(pizza);
    customer.order.sandwichs.push(sandwich);
    customer.order.drinks.push(drink);
}

function calcOrder() {

    document.getElementById('calOrder').disabled = true;
    document.getElementById('newOrder').disabled = false;
    document.getElementById('updateInfo').disabled = false;
    getOrder();
    disable();
    displayOrder();
}

function disable() {

    document.getElementById('firstName').disabled = true;
    document.getElementById('lastName').disabled = true;
    document.getElementById('address').disabled = true;
    document.getElementById('phone').disabled = true;
    document.getElementById('meaty').disabled = true;
    document.getElementById('veggy').disabled = true;
    document.getElementById('chessy').disabled = true;
    document.getElementById('pizzaSize').disabled = true;
    document.getElementById('cheese').disabled = true;
    document.getElementById('pepper').disabled = true;
    document.getElementById('mush').disabled = true;
    document.getElementById('bacon').disabled = true;
    document.getElementById('olives').disabled = true;
    document.getElementById('pizzaCount').disabled = true;
    document.getElementById('garden').disabled = true;
    document.getElementById('beef').disabled = true;
    document.getElementById('grill').disabled = true;
    document.getElementById('pork').disabled = true;
    document.getElementById('sandwichCount').disabled = true;
    document.getElementById('cola').disabled = true;
    document.getElementById('orange').disabled = true;
    document.getElementById('lemon').disabled = true;
    document.getElementById('rootbeer').disabled = true;
    document.getElementById('drinkSize').disabled = true;
    document.getElementById('drinkCount').disabled = true;

}

function refresh() {
    document.getElementById('meaty').checked = false;
    document.getElementById('veggy').checked = false;
    document.getElementById('chessy').checked = false;
    document.getElementById('pizzaSize').value = "";
    document.getElementById('cheese').checked = false;
    document.getElementById('pepper').checked = false;
    document.getElementById('mush').checked = false;
    document.getElementById('bacon').checked = false;
    document.getElementById('olives').checked = false;
    document.getElementById('pizzaCount').value = 0;
    document.getElementById('garden').checked = false;
    document.getElementById('beef').checked = false;
    document.getElementById('grill').checked = false;
    document.getElementById('pork').checked = false;
    document.getElementById('sandwichCount').value = 0;
    document.getElementById('cola').checked = false;
    document.getElementById('orange').checked = false;
    document.getElementById('lemon').checked = false;
    document.getElementById('rootbeer').checked = false;
    document.getElementById('drinkSize').value = "";
    document.getElementById('drinkCount').value = 0;
}

function active() {

    document.getElementById('firstName').disabled = false;
    document.getElementById('lastName').disabled = false;
    document.getElementById('address').disabled = false;
    document.getElementById('phone').disabled = false;
    document.getElementById('meaty').disabled = false;
    document.getElementById('veggy').disabled = false;
    document.getElementById('chessy').disabled = false;
    document.getElementById('pizzaSize').disabled = false;
    document.getElementById('cheese').disabled = false;
    document.getElementById('pepper').disabled = false;
    document.getElementById('mush').disabled = false;
    document.getElementById('bacon').disabled = false;
    document.getElementById('olives').disabled = false;
    document.getElementById('pizzaCount').disabled = false;
    document.getElementById('garden').disabled = false;
    document.getElementById('beef').disabled = false;
    document.getElementById('grill').disabled = false;
    document.getElementById('pork').disabled = false;
    document.getElementById('sandwichCount').disabled = false;
    document.getElementById('cola').disabled = false;
    document.getElementById('orange').disabled = false;
    document.getElementById('lemon').disabled = false;
    document.getElementById('rootbeer').disabled = false;
    document.getElementById('drinkSize').disabled = false;
    document.getElementById('drinkCount').disabled = false;

}

function displayOrder() {
    var receipt = '';

    customer.info.fname = document.getElementById('firstName').value;
    customer.info.lname = document.getElementById('lastName').value;
    customer.info.address = document.getElementById('address').value;
    customer.info.phone = document.getElementById('phone').value;

    receipt += '<h4>Customer Order</h4>';
    receipt += '<p><b>Full Name: </b>' + customer.info.fname + ' ' + customer.info.lname + '</p>';
    receipt += '<p><b>Address: </b>' + customer.info.address + '</p>';
    receipt += '<p><b>Phone Number: </b>' + customer.info.phone + '</p>';
    receipt += '<h4>Your Order:</h4>';

    receipt += '<h5>Pizza:</h5>';
    for (let i = 0; i < customer.order.pizzas.length; i++) {
        receipt += '<p>' + customer.order.pizzas[i].numOfPizza + ' ' + customer.order.pizzas[i].pizzaSize
            + ' ' + customer.order.pizzas[i].pizzaType + ' Pizza $' + customer.order.pizzas[i].pizzaCost + '</p>';
        receipt += '<p>Extra: ';
        for (var j = 0; j < customer.order.pizzas[i].pizzaToppings.length; j++) {
            receipt += customer.order.pizzas[i].pizzaToppings[j] + ' ';
        }
        customer.order.orderCost += customer.order.pizzas[i].pizzaCost;
    }

    receipt += '<h5>Sandwichs:</h5>';
    for (let i = 0; i < customer.order.sandwichs.length; i++) {
        receipt += '<p>' + customer.order.sandwichs[i].numOfSand + ' ' +
            customer.order.sandwichs[i].sandwichType + ' Sandwiches $' + customer.order.sandwichs[i].sandwichCost + '</p>';
        customer.order.orderCost += customer.order.sandwichs[i].sandwichCost;
    }

    receipt += '<h5>Drinks:</h5>';
    for (let i = 0; i < customer.order.drinks.length; i++) {
        receipt += '<p>' + customer.order.drinks[i].numOfDrink + ' ' + customer.order.drinks[i].drinkSize + ' '
            + customer.order.drinks[i].drinkType + ' $' + customer.order.drinks[0].drinkCost + '</p>';
        customer.order.orderCost += customer.order.drinks[i].drinkCost;
    }

    receipt += '<h5>Order Total:   $' + customer.order.orderCost + '</h5>'; 


    document.getElementById('displayOrder').innerHTML = receipt;
}

function updateOrder(i) {

}

function updateInfo() {
    document.getElementById('newOrder').disabled = true;
    document.getElementById('updateInfo').disabled = true;
    document.getElementById('saveInfo').style.display = "inline";
    active();
}

function saveInfo() {
    document.getElementById('calOrder').disabled = true;
    document.getElementById('newOrder').disabled = false;
    document.getElementById('updateInfo').disabled = false;
    document.getElementById('saveInfo').style.display = "none";
    customer.order.pizzas.pop();
    customer.order.sandwichs.pop();
    customer.order.drinks.pop();
    getOrder();
    disable();
    displayOrder();
}

function newOrder() {

    document.getElementById('calOrder').disabled = false;
    document.getElementById('newOrder').disabled = true;
    document.getElementById('updateInfo').disabled = true;
    //document.getElementById('saveNew').style.display = "inline";
    active();
    document.getElementById('firstName').disabled = true;
    document.getElementById('lastName').disabled = true;
    document.getElementById('address').disabled = true;
    document.getElementById('phone').disabled = true;
    refresh();

}
