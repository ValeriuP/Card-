const cardholderName = document.getElementById("cardholder-name");
const cardNumber = document.getElementById("cardholder-number");
const expirationDateMonth = document.getElementById("expiration_date_month");
const expirationDateYear = document.getElementById("expiration_date_year");
const securityCode = document.getElementById("security_code");

const invalidNameMessage = document.getElementById("invalid-name-message");
const invalidNumberMessage = document.getElementById("invalid-number-message");
const invalidExpirationDateMessage = document.getElementById("invalid_expiration_date_message");
const invalidSecurityCodeMessage = document.getElementById("invalid_security_code_message");


cardNumber.addEventListener('keyup', () => {
  let cardNumberValue = cardNumber.value;
  let newValue = '';
   cardNumberValue = cardNumberValue.replace(/\s/g, ''); //replace whitespace with empty string
   for(let i = 0; i<cardNumberValue.length; i++){
    if(i%4 == 0 && i>0){
      newValue = newValue.concat(' ');  //insert a space every 4 digits
    }
    newValue = newValue.concat(cardNumberValue[i]);
    cardNumber.value = newValue;
   }
})


function submitForm(){
  let validator = [];

  let registeredCardNumberContainer = document.getElementById("shown-namber-card");
  let registeredCardholderNameContainer = document.getElementById("shown-name-card");
  let registeredExpirationDateContainer = document.getElementById("shown-expiration-data-card");
  let registeredSecurityCodeContainer = document.getElementById("shown-security-code-card");

  let registeredCardNumber = document.createElement("p");
  let registeredCardholderName = document.createElement("span");
  let registeredExpirationDate = document.createElement("span");
  let registeredSecurityCode = document.createElement("span");

  registeredCardNumber.classList.add("card_front_number");
  registeredCardholderName.classList.add("card_front_details_content");
  registeredExpirationDate.classList.add("card_front_details_content");


  //Validate the cardholder name input
  validator.push(validation(cardholderName, invalidNameMessage));
  validator.push(validation(cardNumber, invalidNumberMessage,19));
  validator.push(validation(expirationDateMonth, invalidExpirationDateMessage,2));
  validator.push(validation(expirationDateYear, invalidExpirationDateMessage,2));
  validator.push(validation(securityCode, invalidSecurityCodeMessage));
 
  //Check if all inputs are valid

  if(validator.length==5 && validator.every((el) => el.valid == true)){
    registeredCardholderName.innerText = cardholderName.value;
    registeredCardNumber.innerText = cardNumber.value;
    registeredExpirationDate.innerText = expirationDateMonth.value + "/" + expirationDateYear.value;
    registeredSecurityCode.innerText =  securityCode.value;

    registeredCardNumberContainer.appendChild(registeredCardNumber);
    registeredCardholderNameContainer.appendChild(registeredCardholderName);
    registeredExpirationDateContainer.appendChild(registeredExpirationDate);
    registeredSecurityCodeContainer.appendChild(registeredSecurityCode);

    const fromContainer = document.getElementById("name-container");
    const completeStateContainer = document.getElementById("complete_state_container");
    fromContainer.style.display = "none";
    completeStateContainer.style.display = "flex";


  }
}

function containsOnlyNumbers(inputValue) {
  return /^(\d+ )*(\d+)$/.test(inputValue); 
}

function checkLength(inputValue, number) {
  return inputValue.length === number;
}