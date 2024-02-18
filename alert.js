#!/usr/bin/env node

// This tool was created to allow the user to set a timer for a specific amount of time
// and then be alerted when the time is up. The user can also pause and resume the timer
// It is a simple CLI tool that runs in the terminal
const notifier = require('node-notifier');
const readLineSync = require('readline-sync');


const args = process.argv.slice(2);

// Function to dsiplay a notification
const disaplayNotification = () => {

	notifier.notify({
		title: 'Time is up!',
		message: 'Pomodoro is up!',
		sound: true,
		wait: true
	});
};


// Get the time from the user
const time = readLineSync.question('Enter the time in minutes: ');
console.log(`Timer set for ${time} minutes`);




// Calculate the time after time minutes
const alertTime = new Date();
alertTime.setMinutes(alertTime.getMinutes() + parseInt(time));




//Schedule the notification
const timeoutId = setTimeout(() => {
	disaplayNotification();
}, alertTime - Date.now());



// Log that the timer has started
console.log('Timer started!');


// Prompt user that the timer has started
process.on('SIGINT', () => {
	clearTimeout(timeoutId);
	console.log('Timer stopped!');
	process.exit();
});





