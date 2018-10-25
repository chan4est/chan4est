function verify() {
  var input = document.getElementById('credit-card').value.toLowerCase();  
  
  
  var input = input.replace(/-|\s/g,"");
  // Verification stuffs
  var counter = 0;
  var sum = 0;
  for (i = 0; i < input.length; i++) {
    if (input[0] == input[i]) {
      counter++;
    }
    sum += input[i] - 0;
  }
  
  if (isNaN(input)) {
    output = "Input contains non-numeric characters, not valid";
  } else if (input.length != 16) {
    output = "Input doesn't contain 16 numbers, not valid";
  } else if (counter == input.length) {
    output = "Input contains the same numbers, not valid";
  } else if  (sum < 16) {
    output = "Input has sum less than 16, not valid";
  } else if ((input.substr(input.length -1 ) - 0) % 2) {
    output = "Input has an odd last number, not valid";
  } else {
    output = "Valid!";
  }
  
  var warning = document.getElementById("warning");
  var warning_message = document.getElementById("warning-message");
  if (output == "Valid!") {
    warning_message.innerHTML = "Valid gift card!";
    warning.style.backgroundColor = '#2E86C1';
    warning.style.color = "white";
    warning.style.display = "block";
  }
  else {
    warning_message.innerHTML = output;
    warning.style.backgroundColor = '#E74C3C';
    warning.style.color = "white";
    warning.style.display = "block";
  }
}

function hide() {
  var warning = document.getElementById("warning");
  var warning_message = document.getElementById("warning-message");
  warning.style.display = "none";
}

