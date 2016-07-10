
// Instructions for your homework
// //////////////////////////////////////////////////////////////////
// 1.   Here is where your functions should be defined
// 2.	 What should you name your functions?  Hint:  check the console to see which functions are already being called.  Are they all "defined?"  If not yet defined... then define them here!
// 3.	 Be sure to link up this file in your HTML doc
/////////////////////////////////////////////////////////////////////

// Faranheit <> Celcius conversion
function calcFahrenheitToCelcius(f) {
	return (f - 32) * (5/9)
}
// Circumference from radias conversion 
function calcCircumference(c) {
	return (2 * Math.PI) * c 
}
// Hypotenuse calculator, using sides A and B 
function calcLongestSide(h) {
	return Math.sqrt((pyA.value * pyA.value) + (pyB.value * pyB.value))
}
