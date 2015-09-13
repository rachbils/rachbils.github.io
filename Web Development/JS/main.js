function askQuestions () {


	var firstName = prompt ('What is your first name?');
	var lastName = prompt ('What is your last name?');
	var faveColour = prompt ('What\'s your favourite colour?');


	var fullName = firstName + ' ' + lastName;
	$('h2').text('Hello ' + fullName);


	var age = prompt('How old are you');
	age = parseInt (age);

	if (age >= 18) {
	console.log ('User is an adult.');
	} else if (age >= 13) {

	console.log('User is a tweenie.');
	} else {
	console.log ('User is a child');
	}

	if (firstName.toLowerCase() == 'general' && lastName.toLowerCase() != 'assembly'){
	console.log ('Greetings General');

	$('h2').text('Greetings ' + fullName)
	}

	if (faveColour == 'red' ||
	faveColour == 'blue' ||
	faveColour == 'green' ||
	faveColour == 'yellow') {
	$('h2').css('color',faveColour);

}
}
// When the page has loaded 
$(function()  {

	$('h2').on('click', askQuestions);

	$('h3').next().hide();

// When the user clicks on an h3
$('h3').on('click', function () {

	// Find the next element and hide it 
	$(this).next().slideToggle(200);

	});

});
