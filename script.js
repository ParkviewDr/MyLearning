  //Lecture: variables

/*
var name = 'John':
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/


// Lecture: variable 2
//var name = 'John';
// var age = 26;

//console.log(name + age);
//console.log(age + age);
/*
var job, isMarried;

//console.log(job);

job = 'teacher';
isMarried = false;

console.log(name + ' is a ' + age + ' years old ' + job + ' Is he married? ' + isMarried + '.');

age = 'thirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' years old ' + job + ' Is he married? ' + isMarried + '.');

//var lastName = prompt('Whatis the last name?');
//console.log(lastName);


alert(name + ' is a ' + age + ' years old ' + job + ' Is he married? ' + isMarried + '.');


*/

///////////////////////

// Lecture: operators
/*
var now= 2016;
var birthYear = 2016 - 26;

birthYear = now - 26 * 2;
// 2016 - 52
//1964


console.log(birthYear)

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;
//ageJohn = ageMark = 26
//ageJohn = 26

ageJohn++;
//this mean ageJohn + 1

ageMark *= 2;
//same thing as writing ageMark = ageMark * 2;

console.log(ageJohn);
console.log(ageMark);
*/



////////////////////////////

//Lecture if/else statements
/*
var name = 'John';
var age = 26;
var isMarried = 'no';

if (isMarried === 'yes') {
	console.log(naem + ' is married!');
	
	} else {
		console.log(name + ' will hopefully get married soon :)');
	}


isMarried = true;

if(isMarried) {
	console.log('no!');
}

if (23 == "23") {
	console.log('Something to print...')
}



////Lecture; boolean logic and switch


var age = 20;

if (age < 20) {
	console.log('John is a teenager');
} else if (age >= 20 && age < 30) {
	console.log('John is a young man.');
} 
else {
	console.log('John is a man.');
}


var job = 'teacher';

job = prompt('What does john do?')

switch(job) {
	case 'teacher':
		console.log('John teaches kids.');
		break;
	case 'driver':
		console.log('John drives a cab in Lisbon.')
		break;
	case 'cop':
		console.log('John helps fight crime.');
		break;
	default:
		console.log('John does something else.');
}

var mileage = 'running';

mileage = prompt('How many miles do you run a week?')

switch(mileage) {
		
		
	case '10':
		console.log('Rome wasn');
														break;
														case '20':
														console.log('Keep building that mileage');
		break;
		default:
		console.log('Some running is better than no running, no zero days!');
														}

  

/////code challenge


var heightJohn = 172;
var heightMike = 165;
var ageJohn = 16;
var ageMike = 19;


var scoreJohn = heightJohn + 5 * ageJohn;
var scoreMike = heightMike + 5 * ageMike;


if (scoreJohn > scoreMike) {
	console.log('John wins the game with ' + scoreJohn + ' points!');
	} else if (scoreMike > scoreJohn) {
		console.log('Mike win the game with ' + scoreMike +' points! ');
	}



////Functions

function calculateAge(yearOfBirth) {
	var age = 2016 - yearOfBirth;
	return age;
	
}

var ageJohn = calculateAge(1990);
var ageMike =calculateAge(1943);


function yearsUntilRetirement(name, year) {
	var age = calculateAge(year);
	var retirement = 65 - age;
	
	if (retirement >= 0) {
			console.log(name + ' retires in ' + retirement + ' years.');
	} else {
	console.log(name + ' is already retired.');
	}
}


yearsUntilRetirement('Matt', 1988);
yearsUntilRetirement('Nicole', 1984);
yearsUntilRetirement('John', 1948);






///Expressions

3 + 4;
var x = 3;

/// Statements

if (x === 5) {
	////do something
}


///// Arrays

var names = ['john', 'jane', 'mark'];
var years = new Array (1990, 1969, 1948);

console.log(names);
names[1] = 'Ben';
console.log(names);


var john = ['john', 'smith' , 1990, 'developer', false];

john.push('blue');///adds blue to the end of the array
john.unshift('Mr.') /// mr. to the beginning of the array
john.pop();///removes the last value of the array
john.shift();///removes first value from the array
console.log(john);


if (john.indexOf('teacher') === -1) {
	console.log('John is not a teacher.');
}
	


/*


////////lectures objects

var john = {
	name: 'John', 
	lastName:'Smith',
	yearofBirth: 1990,
	job: 'teacher',
	isMarried: false
 calculateTheAge: function() {
	this.age = 2016 - this.yearofBirth;
}




};
console.log(john);
	
	

console.log(john['lastName']);


john.lastName = 'miller';
john['job'] = 'programmer';

console.log(john);


var age = john.calculateAges();
john.age = age;


*/
/*
//// FOR LOOPS
for (var i = 0; i < 10; i++) {
	console.log(i);
}

var names = ['John', 'Jane', 'Mary', 'Samantha'];

/*
for (var i =0; i < names.length: i++)
	console.log(names[i]);

for (var i = names.length -1; i>= 0; i--) {console.log(names[i]);




//WHILE LOOPS

var i = 0;
while(i < names.length) {
	console.log(names[i]);
i++;
}
															

																															
	for (var i = 1; i <=5; i++) {
		console.log(i);
	

if (i===3){
	break;
}
	}
*/

var years = [2001, 1985, 1994, 2014, 1973];
function printFullAge(years) {
	var ages =[];
	var fullAge =[];

for (var i=0; i < years.length; i++) {
	ages[i] = 2016 - years [i];
	
}



for (i =0; i < ages.length; i++)    {
	
	ages[i]=2016- years[i];
}


for (i = 0; i < ages.length; i++) {
	
	if (ages[i] >= 18) {
		
		console.log('Person ' + (i +1) + ' is ' + ages[i] + ' years old, and is of full age.');
		fullAge.push(true);
		} else {
			console.log('Person ' + (i +1) + ' is ' + ages[i] + ' years old, and is NOT of full age.');	
			fullAge.push(false);
		}
}
	
	return fullAge;
	
}
var years = [2001, 1985, 1994, 2014, 1973];
var full_1 = printFullAge(years);
var full_2 = printFullAge([2012, 1915, 1999]);














