function getValue(data){
    var input = document.getElementById('inputfield')
    input.value += data
    console.log(data)
}
function square(){
    var input = document.getElementById('inputfield')
    input.value = input.value * input.value
}
function delChar(){
    var input = document.getElementById('inputfield')
    input.value = input.value.slice(0,-1)
}
function clearAll(){
    var input = document.getElementById('inputfield')
    input.value = " "
}
function evaluateExpression(expression) {
    try {
        var result = Function('"use strict"; return (' + expression + ')')();
        return result;
    } 
    catch (error) {
        return 'Error';
    }
}
function equal(){
    var input = document.getElementById('inputfield')
    input.value =  evaluateExpression(input.value)
}