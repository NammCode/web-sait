function convert() {
	var fromCur, amount, toCur, value, type, ratio;

	fromCur = document.getElementById('fromCurrency').value;
	amount = document.getElementById('amount').value;
	toCur = document.getElementById('toCurrency').value;

	switch (toCur) {
		case 'Euro':
			type = 'EUR';
			switch (fromCur) {
				case 'Euro':
					value = (amount * 1).toFixed(2);
					ratio = '1:1';
					break;
				case 'US Dollar':
					value = (amount * 0.89).toFixed(2);
					ratio = '0.89:1';
					break;
				case 'UK Pound Sterling':
					value = (amount * 1.10).toFixed(2);
					ratio = '1.10:1';
					break;
				case 'Japanese Yen':
					value = (amount * 0.00832).toFixed(2);
					ratio = '0.008:1';
					break;
				case 'Canadian Dollar':
					value = (amount * 0.65223).toFixed(2);
					ratio = '0.65:1';
					break;
				default:
					break;
			}
			break;
		case 'US Dollar':
			type = 'USD';
			switch (fromCur) {
				case 'Euro':
					value = (amount * 1.12).toFixed(2);
					ratio = '1.12:1';
					break;
				case 'US Dollar':
					value = (amount * 1).toFixed(2);
					ratio = '1:1';
					break;
				case 'UK Pound Sterling':
					value = (amount * 1.23782).toFixed(2);
					ratio = '1.24:1';
					break;
				case 'Japanese Yen':
					value = (amount * 0.0093).toFixed(2);
					ratio = '0.0093:1';
					break;
				case 'Canadian Dollar':
					value = (amount * 0.73).toFixed(2);
					ratio = '0.73:1';
					break;
				default:
					break;
			}
			break;
		case 'UK Pound Sterling':
			type = 'GPB';
			switch (fromCur) {
				case 'Euro':
					value = (amount * 0.906).toFixed(2);
					ratio = '0.906:1';
					break;
				case 'US Dollar':
					value = (amount * 0.8077).toFixed(2);
					ratio = '0.8077:1';
					break;
				case 'UK Pound Sterling':
					value = (amount * 1).toFixed(2);
					ratio = '1:1';
					break;
				case 'Japanese Yen':
					value = (amount * 0.00754).toFixed(2);
					ratio = '0.007:1';
					break;
				case 'Canadian Dollar':
					value = (amount * 0.59).toFixed(2);
					ratio = '0.59:1';
					break;
				default:
					break;
			}
			break;
		case 'Japanese Yen':
			type = 'JPY';
			switch (fromCur) {
				case 'Euro':
					value = (amount * 120.17).toFixed(2);
					ratio = '120.17:1';
					break;
				case 'US Dollar':
					value = (amount * 107.10).toFixed(2);
					ratio = '107.10:1';
					break;
				case 'UK Pound Sterling':
					value = (amount * 132.57).toFixed(2);
					ratio = '132.57:1';
					break;
				case 'Japanese Yen':
					value = (amount * 1).toFixed(2);
					ratio = '1:1';
					break;
				case 'Canadian Dollar':
					value = (amount * 78.38).toFixed(2);
					ratio = '78.38:1';
					break;
				default:
					break;
			}
			break;
		case 'Canadian Dollar':
			type = 'CAD';
			switch (fromCur) {
				case 'Euro':
					value = (amount * 1.53).toFixed(2);
					ratio = '1.53:1';
					break;
				case 'US Dollar':
					value = (amount * 1.37).toFixed(2);
					ratio = '1.37:1';
					break;
				case 'UK Pound Sterling':
					value = (amount * 1.69).toFixed(2);
					ratio = '1.69:1';
					break;
				case 'Japanese Yen':
					value = (amount * 0.0127).toFixed(2);
					ratio = '0.0127:1';
					break;
				case 'Canadian Dollar':
					value = (amount * 1).toFixed(2);
					ratio = '1:1';
					break;
				default:
					break;
			}
			break;
		default:
			break;
	}



	// document.getElementById('centimeters').value = centimeters.toFixed(2);

	document.getElementById('value').innerHTML = value + ' ' + type + '<br>' + '(' + ratio + ')';

}