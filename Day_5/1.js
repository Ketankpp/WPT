function findLargestNumber() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const num3 = parseFloat(document.getElementById("num3").value);
  
    let largestNumber;
  
    if (num1 > num2 && num1 > num3) {
      largestNumber = num1;
    } else if (num2 > num1 && num2 > num3) {
      largestNumber = num2;
    } else {
      largestNumber = num3;
    }
  
    document.getElementById("result").value = largestNumber;
  }
  