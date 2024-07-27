 
// define a variable for index number
// declare a function
// define a local variable for all colors
// add logic
// add conditon for loop 
 
var index = 0 
function ChangeColor() {
    var colors = ['red', 'blue', 'orange', 'yellow', 'green', 'purple']
    document.getElementsByTagName('body')[0].style.background= colors[index++]
    if( index > colors.length - 1){
        index = 0 
    }    
}