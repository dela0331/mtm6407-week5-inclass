import { mtm6407, colors, points } from './data.js';

//done declaratively

//1. loop thorugh each student and provide these in a new variable (array)
/* 
   - first name
   - last name
   - letter grade + (number grade)
*/

const students = mtm6407.map((students) => console.log(`${students.firstName}, ${students.lastName}, ${students.gradeLetter} (${students.gradeNumber}%)`))


//2. go through each colour and return the colour that is red


function isRed(color){
    return color === "red"
}

console.log( `Here is your color: ${colors.find(isRed)}`);

//3. create a compass variable (object)
/*
   - north - "N"
   - south - "S
   - east - "E
   - west - "W"
*/

points.forEach(points => console.log(`${points.name} - "${points.symbol}"`))


//bonus. if you can add this to an html object and return this to the body and make it look somewhat like a compass

//repo mtm6407-week5-inclass

//send github repo link to email - rodneyl@algonquincollege.com - 9pm