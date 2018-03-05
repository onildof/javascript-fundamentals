/* All functions start with the function keyword.
Function names follow the same conventions as variable names.
You can assign a function to a variable.

You can call a function before it's defined if it is defined on the same file*/
var $height = 15
var _width = 10

var answer = area($height, _width)
console.log(answer)

//a function declaration does not use var in its parameters
function area(height, width)
{
	return height*width
}

