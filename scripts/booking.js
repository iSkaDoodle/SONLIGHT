const bookBtn = document.getElementById('place-book-button');
const form = document.getElementById('booking-form');
const elements = form.elements;
const select = document.getElementById('event-type-dropdown')
let isValid = true;

bookBtn.onclick = function()  {
  validation();
};

function removeForm() {
  form.style.visibility='hidden';
}

function validation() {
  for(let i = 0; i<elements.length; i++) {
    let element = elements[i];

    if(element.type === "text" && element.hasAttribute("required")) {
      if (!element.value) {
        isValid = false;
        alert("Please fill the required feilds.");
        element.focus();
        return false;
      }
    }

    if(element.type === "tel" && element.hasAttribute("required")) {
      if (!element.value) {
        isValid = false;
        alert("Please enter your contact number.");
        element.focus();
        return false;
      }
    }

    if(element.type === "email" && element.hasAttribute("required")) {
      if (!element.value) {
        isValid = false;
        alert("Please enter a valid email address.");
        element.focus();
        return false;
      }
    }

    if(element.hasAttribute("required")) {
      if(select.value==="None") {
        isValid = false;
        alert("Please choose an event type.");
        element.focus();
        return false;
      }
    }

    if(element.type === "date" && element.hasAttribute("required")) {
      if (!element.value) {
        isValid = false;
        alert("Please enter a date.");
        element.focus();
        return false;
      }
    }

    if(element.type === "time" && element.hasAttribute("required")) {
      if (!element.value) {
        isValid = false;
        alert("Please enter a time.");
        element.focus();
        return false;
      }
    }

  }

  if(isValid) {
    alert("Form is valid and ready to submit!");
    return true;
  } else {
    return false;
  }
}