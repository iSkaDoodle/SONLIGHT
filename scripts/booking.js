// <== Unused ==>
// const elements = form.elements;
// const select = document.getElementById('event-type-dropdown')
// let isValid = true;

// elements declaration
const bookBtn = document.getElementById('place-book-button'),
      form = document.getElementById('booking-form'),
      viewDetailsBtn = document.getElementById('view-details-button'),
      message = document.getElementById('message-div'),
      receipt = document.getElementById('receipt-div'),
      goBack = document.getElementById('go-back');

// customer details
const customerName = document.getElementById('customer-name'),
      customerTel = document.getElementById('customer-number'),
      customerEmail = document.getElementById('customer-email'),
      customerSysSet = document.getElementById('system-set'),
      eventType = document.getElementById('event-type-dropdown'),
      Evntvenue = document.getElementById('booking-venue'),
      date = document.getElementById('event-date'),
      time = document.getElementById('event-time');


// message
const messageCustomerName = document.getElementById('message-customer-name');

// booking details
const refNumDetail = document.getElementById('refNum-detail'),
      nameDetail = document.getElementById('name-detail'),
      telDetail = document.getElementById('tel-detail'),
      emailDetail = document.getElementById('email-detail'),
      eventVenue = document.getElementById('event-venue-detail'),
      lightSoundSet = document.getElementById('light-sound-set'),
      dateTimeDetail = document.getElementById('date-time-detail');

// reference number generator
const min = 100000000000000,
      max = 999999999999999;
let refNumber = Math.floor(Math.random() * (max - min) ) + min;

// System Set choices
const setChoices = document.getElementById('choices-div');
let choice = document.getElementById('lght-snd-btn-p');
let choice_bg = document.getElementById('light-and-sound-btn');

function chngSetColors() {
  choice.style.color = "#000";
  choice_bg.style.background = "rgb(232, 240, 254)";
}

let setChoice;
function showChoices() {
  setChoices.style.display = "block";
}
// bunch of choice functions
function set1() {
  setChoice = "Set 1";
  choice.textContent = setChoice;
  chngSetColors();
  closeChoices();
}

function set2() {
  setChoice = "Set 2";
  choice.textContent = setChoice;
  chngSetColors();
  closeChoices();
}

function set3() {
  setChoice = "Set 3";
  choice.textContent = setChoice;
  chngSetColors();
  closeChoices();
}

function set4() {
  setChoice = "Set 4";
  choice.textContent = setChoice;
  chngSetColors();
  closeChoices();
}

function set5() {
  setChoice = "Set 5";
  choice.textContent = setChoice;
  chngSetColors();
  closeChoices();
}

function set6() {
  setChoice = "Set 6";
  choice.textContent = setChoice;
  chngSetColors();
  closeChoices();
}

function set7() {
  setChoice = "Set 7";
  choice.textContent = setChoice;
  chngSetColors();
  closeChoices();
}

function set8() {
  setChoice = "Set 8";
  choice.textContent = setChoice;
  chngSetColors();
  closeChoices();
}

function closeChoices() {
  setChoices.style.display = "none";
}

// 24-hour to 12-hour format converter
function convertTime(time) {
  let timeStr = String(time).split(":");
  let hour = Number(timeStr[0]);
  let minute = String(timeStr[1]);
  let timeSuffix;

  if(hour>=12) {
    hour = hour % 12;
    if(hour==0) hour = 12;
    timeSuffix = 'PM';
    return `${String(hour)}:${String(minute)} ${timeSuffix}`;
  } else {
    if(hour==0) hour = 12;
    timeSuffix = 'AM';
    return `${String(hour)}:${String(minute)} ${timeSuffix}`;
  }
}

// shows the message
bookBtn.onclick = function()  {
  convertTime(time.value);
  messageCustomerName.textContent = customerName.value;
  refNumDetail.textContent = refNumber;
  nameDetail.textContent = customerName.value;
  telDetail.textContent = customerTel.value;
  eventVenue.textContent = `${Evntvenue.value} ${eventType.value}`;
  emailDetail.textContent = customerEmail.value;
  lightSoundSet.textContent = setChoice;
  dateTimeDetail.textContent = `${date.value} | ${convertTime(time.value)}`;
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
  goBack.style.display = "block";

}

// pre-loads user email
const usrEmail = JSON.parse(localStorage.getItem('sonlight-user'));
if (user.email) {
  customerEmail.value = usrEmail.email;
}

// <== messy booking validation ==>

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