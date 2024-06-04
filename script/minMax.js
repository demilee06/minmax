document.getElementById("check").addEventListener("click", function() {
    var input1 = document.getElementById("minMaxinp1").value;
    var input2 = document.getElementById("minMaxinp2").value;
    var minSpan = document.getElementById("min");
    var maxSpan = document.getElementById("max");
    var num1 = parseFloat(input1);
    var num2 = parseFloat(input2);
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers");
        return;
    }
    var minValue = Math.min(num1, num2);
    var maxValue = Math.max(num1, num2);
    minSpan.textContent = minValue;
    maxSpan.textContent = maxValue;
});
