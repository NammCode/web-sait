window.onload = dispOrder;

function initialize() {
    var todayDate = new Date();
    document.getElementById('currentDate').innerHTML = todaysDate;
}

function calcOrder() {


var pizzaType, pizzaSize, pizzaCount, pizzaCost, pizzaToppings;
var toppingCost = 0;
var toppingArray = [];
var pizza = {};

pizzaType = document.querySelector('form div input[name="pizzaType[]"]:checked').value;

pizzaSize = document.getElementById('pizzaSize').value;


switch (pizzaSize) {
    case 'Small':
        pizzaCost = 8.50
        break;
    case 'Medium':
        pizzaCost = 11.50
        break;
    case 'Large':
        pizzaCost = 14.00
        break;
    case 'XLarge':
        pizzaCost = 16.50
        break;
    default: 
        pizzaCost = 0.00
        break;


}

pizzaCount = document.getElementById('pizzaCount').value;

toppingCost = document.getElementById('pizzaToppings[]');


for (var pt = 0; pt < pizzaToppings.length; pt++){

    if (pizzaToppings[pt].checked == true) {
    toppingCost += 1.75;
    toppingArray.push(pizzaToppings[pt].value)
    }
    

}
console.log(toppingArray);

pizzaCost = pizzaCost * pizzaCount;


pizzaCost = (pizzaCost + toppingCost) * pizzaCount;

pizza.cost = pizzaCost;
pizza.type = pizzaType;
pizza.size = pizzaSize;
pizza.quantity = pizzaCount;

dispOrder(pizza);

}

function dispOrder(pizza) {
    var fName, lName, address, phone;
    var receipt = '';

    fName = document.getElementById('firstName').value;
    lName = document.getElementById('lastName').value;
    address = document.getElementById('address').value;
    phone = document.getElementById('phone').value;

    receipt += '<h4>Customer Order</h4>';
    receipt += '<p><strong>Full Name: </strong> ' + fName + ' ' + lName + '</p>';
    receipt += '<p><strong>Address: </strong> ' + address + '</p>';
    receipt += '<p><strong>Phone #: </strong> ' + phone + '</p>';
    receipt += '<h4>Order Details</h4>';
    receipt += pizza.quantity + ' ' + pizza.size + ' ' + pizza.type + ' ' + pizza.cost;
    receipt += '<ul>'
    for (var pt = 0; pt < 5; pt++){
        receipt += '<li>' + pizza.toppings[pt] + '</li>';
    }
    receipt += '</ul>;'


    document.getElementById('displayOrder').innerHTML = receipt;
}
