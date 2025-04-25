// <== Unused ==>
// const elements = form.elements;
// const select = document.getElementById('event-type-dropdown')
// let isValid = true;

// elements declaration
const bookBtn = document.getElementById('place-book-button');
const form = document.getElementById('booking-form');
const viewDetailsBtn = document.getElementById('view-details-button');
const message = document.getElementById('message-div');
const receipt = document.getElementById('receipt-div');


// customer details
const customerName = document.getElementById('customer-name');
const customerTel = document.getElementById('customer-number');
const customerEmail = document.getElementById('customer-email');
const customerSysSet = document.getElementById('system-set');
const date = document.getElementById('event-date').value;
const time = document.getElementById('event-time').value;
let strDate = String(date);
let dateTime = strDate.concat(' ' + time);


// message
const messageCustomerName = document.getElementById('message-customer-name');

// booking details
const refNumDetail = document.getElementById('refNum-detail');
const nameDetail = document.getElementById('name-detail');
const telDetail = document.getElementById('tel-detail');
const emailDetail = document.getElementById('email-detail');
const lightSoundSet = document.getElementById('light-sound-set');
const dateTimeDetail = document.getElementById('date-time-detail');

// reference number generator
const min = 100000000000000;
const max = 999999999999999;
let refNumber = Math.floor(Math.random() * (max - min) ) + min;


bookBtn.onclick = function()  {
  messageCustomerName.textContent = customerName.value;

  refNumDetail.textContent = refNumber;
  nameDetail.textContent = customerName.value;
  telDetail.textContent = customerTel.value;
  emailDetail.textContent = customerEmail.value;
  lightSoundSet.textContent = customerSysSet.value;
  dateTimeDetail.textContent = date;
  hideForm();
};

viewDetailsBtn.onclick = function() {
  hideMessage();
}

function hideForm() {
  form.style.display = "none";
  message.style.display = "block";
}

function hideMessage() {
  message.style.display = "none";
  receipt.style.display = "block";

}

// <== Definetely Unused ==>

// function validation() {
//   for(let i = 0; i<elements.length; i++) {
//     let element = elements[i];

//     if(element.type === "text" && element.hasAttribute("required")) {
//       if (!element.value) {
//         isValid = false;
//         // alert("Please fill the required feilds.");
//         element.focus();
//         return false;
//       }
//     }

//     if(element.type === "tel" && element.hasAttribute("required")) {
//       if (!element.value) {
//         isValid = false;
//         // alert("Please enter your contact number.");
//         element.focus();
//         return false;
//       }
//     }

//     if(element.type === "email" && element.hasAttribute("required")) {
//       if (!element.value) {
//         isValid = false;
//         // alert("Please enter a valid email address.");
//         element.focus();
//         return false;
//       }
//     }

//     if(select.value==="None") {
//       isValid = false;
//       alert("Please choose an event type.");
//       element.focus();
//       return false;
//     }

//     if(element.type === "date" && element.hasAttribute("required")) {
//       if (!element.value) {
//         isValid = false;
//         // alert("Please enter a date.");
//         element.focus();
//         return false;
//       }
//     }

//     if(element.type === "time" && element.hasAttribute("required")) {
//       if (!element.value) {
//         isValid = false;
//         // alert("Please enter a time.");
//         element.focus();
//         return false;
//       }
//     }
//   }

//   if(isValid) {
//     // alert("Form is valid and ready to submit!");
//     return true;
//   } else {
//     return false;
//   }
// }