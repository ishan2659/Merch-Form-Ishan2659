function defError(id, error) {
  var errorElement = document.querySelector(`#${id} .inputerror`);

  errorElement.innerHTML = error;
}
//////////////////////////////////////////////////////////////
function Flag() {
  var returnval = true;

  var nameElement = document.getElementById("name-input");

  var name = nameElement.value;
  var usernameRegex = /^[a-zA-Z]+/;

  if (name.length < 3) {
    defError("name-error-container", "*The Length of Name is too short");
    returnval = false;
    return;
  }
  else if (name.length > 50) {
    defError("name-error-container", "*The Length of Name is too long");
    returnval = false;
    return;
  }
  else if (!usernameRegex.test(name)) {
    defError("name-error-container", "*Please use only Alphabets");
    returnval = false;
    return;
  }
  else if (name.length == 0) {
    defError("name-error-container", "*Please Fill Your Name");
    returnval = false;
    return;
  } else {
    defError("name-error-container", "");
  }

  var emailElement = document.getElementById("email-input");
  var email = emailElement.value;
  var emailRegex =
    /^(f|h|p)(19[6-9][0-9]|20[0-1][0-9]|202[0-4])([0-4][0-9][0-9][0-9])@(pilani|goa|hyderabad)(\.bits-pilani\.ac\.in)$/;

  if (email.length < 5) {
    defError("email-error-container", "*The Length of email is too short");
    returnval = false;
    return;
  }
  else if (email.length > 50) {
    defError("email-error-container", "*The Length of email is too long");
    returnval = false;
    return;
  }
  else if (!emailRegex.test(email)) {
    defError("email-error-container", "*Please enter a valid BITS email only");
    returnval = false;
    return;
  } else {
    defError("email-error-container", "");
  }

  var phoneElement = document.getElementById("phone-input");
  var phone = phoneElement.value;
  var phoneRegex = /^([6-9])([0-9])*$/;

  
  if (!phoneRegex.test(phone)) {
    defError("phone-error-container", "*Please enter a valid mobile number");
    returnval = false;
    return;
  }else if (phone.length > 10) {
    defError("phone-error-container", "*Please enter a valid mobile number");
    returnval = false;
    return;
  } 
  else {
    defError("phone-error-container", "");
  }

  var bitsidElement = document.getElementById("id-input");
  bitsid = bitsidElement.value;

  var bitsidRegex =
    /^(19[6-9][0-9]|20[0-1][0-9]|202[0-3])(B1|B2|B3|B4|B5|D2){0,1}(A1|A2|A3|A4|A5|A7|A8|AA|AB|AD){1}(PS|TS)([0-4][0-9][0-9][0-9])(P|G|H)$/;
  var bitsidRegex2 =
    /^(2024)(A1|A2|A3|A4|A5|A7|A8|AA|AB|AD|B1|B2|B3|B4|B5|D2)(PS|TS)([0-4][0-9][0-9][0-9])(P|G|H)$/;

  if (!bitsidRegex.test(bitsid) && !bitsidRegex2.test(bitsid)) {
    defError("id-error-container", "*Please enter a valid BITS ID");
    returnval = false;
    return;
  } else {
    defError("id-error-container", "");
  }

  
  var hostelInput = document.querySelector('select[name="hostel-name"]').value;
  if(!hostelInput){
    defError("hostel-error-container", "*Please Choose your Hostel!")
    returnval=false;
    return;
  }else{
    defError("hostel-error-container", "");
  }

  var radioInput = document.querySelector('input[name="r"]:checked');
  if(!radioInput){
    defError("radio-error-container", "(*Choose one of the Sizes!)");
    returnval = false;
    return;
  }else{
    defError("radio-error-container", "");
  }

  var checkboxInput = document.querySelector('input[name="checkbox-input"]:checked');
  if(!checkboxInput){
    defError("checkbox-error-container", "*Please check this!");
    returnval=false;
    return;

  }else{
    defError("checkbox-error-container", "");
  }

 

  return returnval;
}
///////////////////////////////////////////////////////////////
function uniqueSubmission() {
  var flag = true;
  var newid = document.getElementById("id-input").value;
  
    var storedBitsId = localStorage.getItem("Bits-ID");
    if (newid === storedBitsId) {
      flag = false;
    }
  
  return flag;
}

//////////////////////////////////////////////////////////
function storeData(event) {
  event.preventDefault();
  if (!Flag()) {
    return;
  }
  if (!uniqueSubmission()) {
    defError(
      "uniquesubmission-error-container",
      "*We only accept unique Submission"
    );
    return;
  } else{
    defError("uniquesubmission-error-container", "");

  }

  var nameElement = document.getElementById("name-input");
  var Name = nameElement.value;
  var phoneElement = document.getElementById("phone-input");
  var phone = phoneElement.value;

  var emailElement = document.getElementById("email-input");
  var email = emailElement.value;
  var bitsidElement = document.getElementById("id-input");
  var bitsid = bitsidElement.value;
 
  var hostelElement = document.querySelector('select[name="hostel-name"]');
  var hostel = hostelElement.options[hostelElement.selectedIndex].text;

  var size = document.querySelector('input[name="r"]:checked');

 
  if (size) {
    size = size.value;
  } else {
    size = ''; 
  }
  console.log(Name, email, phone, bitsid, hostel, size);
  localStorage.setItem("Name", Name);
  localStorage.setItem("Email", email);
  localStorage.setItem("Phone-no.", phone);
  localStorage.setItem("Bits-ID", bitsid);
  localStorage.setItem("Hostel", hostel);
  localStorage.setItem("Size", size);
}

function fillData() {
  if (localStorage.getItem("Name")) {
    var nameFill = document.getElementById("name-input");
    nameFill.value = localStorage.getItem("Name");
  } else {
    var nameFill = document.getElementById("name-input");
    nameFill.value = "";
  }

  if (localStorage.getItem("Email")) {
    var emailFill = document.getElementById("email-input");
    emailFill.value = localStorage.getItem("Email");
  } else {
    var emailFill = document.getElementById("email-input");
    emailFill.value = "";
  }

  if (localStorage.getItem("Phone-no.")) {
    var phoneFill = document.getElementById("phone-input");
    phoneFill.value = localStorage.getItem("Phone-no.");
  } else {
    var phoneFill = document.getElementById("phone-input");
    phoneFill.value = "";
  }

  if (localStorage.getItem("Bits-ID")) {
    var idFill = document.getElementById("id-input");
    idFill.value = localStorage.getItem("Bits-ID");
  }else{
    var idFill = document.getElementById("id-input");
    idFill.value = "";
  }

  if (localStorage.getItem("Hostel")) {
    var hostelSelect = document.querySelector('select[name="hostel-name"]');
    if (hostelSelect) {
      hostelSelect.value = localStorage.getItem("Hostel");
    }else{
      hostelSelect = "";
    }
  }
  
}
document.querySelector("form").addEventListener("submit", storeData);
document.addEventListener("DOMContentLoaded", fillData());
  

