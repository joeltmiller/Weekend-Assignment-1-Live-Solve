function Claim(name, type, cost){
	this.patientName = name;
	this.visitType = type;
	this.visitCost = cost;
}

var claim1 = new Claim("John Doe", "Specialist", 1100);
var claim2 = new Claim("Jane Doe", "Optical", 100);
var claim3 = new Claim("Joe Johnson", "Emergency", 31000);
var claim4 = new Claim("Sharon Smith", "Emergency", 1300);
var claim5 = new Claim("Steve Wright", "Primary Care", 770);
var claim6 = new Claim("Dominic Terreto", "Primary Care", 1);
var claim7 = new Claim("Namey McNameface", "Emergency", 12344);
var claim8 = new Claim("Boaty McBoatface", "Specialist", 87975);
var claim9 = new Claim("Stephen Colbert", "Optical", 53453);
var claim10 = new Claim("John Oliver", "Optical", 465356456456);

var initialList = [claim1, claim2, claim3, claim4, claim5];

var newList = [claim6, claim7, claim8, claim9, claim10];

var totalList = initialList.concat(newList);

console.log('Created list', totalList);

var totalPayedOut = 0;

function kickOffEstimation() {
	for(var i = 0; i < totalList.length; i++){

		var claim = totalList[i];
		var percentage = getPercentage(claim);
		var totalPatientAmount = getAmountPaidOut(claim, percentage);

		console.log('Payed out', convertDisplay(totalPatientAmount), 'for', claim.patientName);

	}

	console.log('Payed out', convertDisplay(totalPayedOut), 'total');

}

function convertDisplay(value) {
	// return '$' + value.toFixed(2);
	return value.toLocaleString('en-us', {style: 'currency', currency: 'USD'});
}


//function to determine percent covered

function getPercentage(patientClaim) {

	var tempPercentage = 0;

	var tempVisitType = patientClaim.visitType.toLowerCase();

	// console.log('Created tempVisitType', tempVisitType);

	switch (tempVisitType) {
		case 'optical':
			tempPercentage = 0;
			break;
		case 'specialist':
			tempPercentage = 10;
			break;
		case 'primary care':
			tempPercentage = 50;
			break;
		case 'emergency':
			tempPercentage = 100;
			break;
		default :
			tempPercentage = -1;

	}

	// console.log('Sending pack percentage for', patientClaim.patientName, tempPercentage);

	return tempPercentage;
}

//function to determine amount covered

function getAmountPaidOut(patientClaim, bananaSandwich) {
	var tempAmount = patientClaim.visitCost * ( bananaSandwich / 100 );
	totalPayedOut += tempAmount;
	return tempAmount;
}





kickOffEstimation();
