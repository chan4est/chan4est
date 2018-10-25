function generateEmails() {
  var firstname = document.getElementById('fname').value.toLowerCase();
  var lastname = document.getElementById('lname').value.toLowerCase();
  var email = document.getElementById('cname').value.toLowerCase();
  if (!(firstname.length) || !(lastname.length) || !(email.length)) {
    console.log("Incorrect Parameters");
  } else {
    console.log(firstname + " " + lastname + " " + email);
    var result = document.getElementById('emails');
    result.innerHTML = "";
    result.innerHTML += (firstname + '@' + email + ',\n');
    result.innerHTML += (firstname + '.' + lastname + '@' + email + ',\n');
    result.innerHTML += (firstname.charAt(0) + lastname + '@' + email+ ',\n');
    result.innerHTML += (firstname + lastname + '@' + email+ ',\n');
    result.innerHTML += (firstname + '.' + lastname.charAt(0) + '@' + email+ '\n');
    result.innerHTML += (firstname.charAt(0) + '.' + lastname.charAt(0) + '@' + email+ ',\n');
    result.innerHTML += (lastname + '@' + email+ ',\n');
    result.innerHTML += (firstname.charAt(0) + '.' + lastname + '@' + email+ ',\n');
    result.innerHTML += (firstname + lastname.charAt(0) + '@' + email+ ',\n');
    result.innerHTML += (firstname + '_' + lastname + '@' + email+ ',\n');
    
    // copyDiv to Clipboard
    var range = document.getSelection().getRangeAt(0);
    range.selectNode(document.getElementById('emails'));
    window.getSelection().addRange(range);
    document.execCommand("copy");
    console.log("Text properly copied");
  }
}

function clearScreen(first, last, company, emails) {
  document.getElementById(first).value = "";
  document.getElementById(last).value = "";
  document.getElementById(company).value = "";
  var result = document.getElementById(emails);
  result.innerHTML = ""; 
}

// Can use these funcions later
function hideButton(button) {
  document.getElementById(button).style.display='none';
}

function showButton(button){
  document.getElementById(button).style.display='block';
}

function sendEmail() {
  var senderEmail = document.getElementById('ue').value.toLowerCase();
  var bodyText = document.getElementById('ut').value;
  console.log(bodyText);
  if (!(senderEmail.length) || !(bodyText.length)) {
    console.log("Incorrect Parameters");
  } else {
    console.log(senderEmail);
    console.log(body);
  }
}
