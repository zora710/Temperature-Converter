function convert() {
    var celsius = parseFloat(document.getElementById('celsius').value);
    var fahrenheit = (celsius * 9/5) + 32;
    if (!isNaN(fahrenheit)) {
        document.getElementById('result').innerHTML = celsius + " degrees Celsius is " + fahrenheit + " degrees Fahrenheit.";
    } else {
        document.getElementById('result').innerHTML = "Please enter a valid number.";
    }
}
