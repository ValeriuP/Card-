const cardholderName=document.getElementById("cardholder-name");
const cardNumber=document.getElementById("cardholder-namber");
const expirationDate=document.getElementById("intro-day");
const expirationYear=document.getElementById("intro-year-nr");
const securityCode=document.getElementById("intro-cvc-nr");


const invalidNameMessage=document.getElementById("intro-error-name");
const invalidNumberMessage=document.getElementById("intro-error-namber");
const invalidExpirationDate=document.getElementById("intro-error-day");
const invalidExpirationYeare=document.getElementById("intro-error-year");
const invalidsecurityCode=document.getElementById("intro-error-code");


cardNumber.addEventListener("keyup", () =>{
    let cardNumberValue=cardNumber.value;
    let newValue="";
    // inlocuire spatiu
    cardNumberValue=cardNumberValue.replace(/\s/g, ''); 
    for(let i=0;i<cardNumberValue.length;i++){
        if(i%4==0 && i>0){
            // introducere spatiu la fiecare 4 cifre
            newValue=newValue.concat(" ");
        }
        newValue=newValue.concat(cardNumberValue[i]);
        cardNumber.value=newValue
    }  
})
function submitValidation(){
    let validator =[];
    let frontCardNumberContainer = document.getElementById("cardholderName");
    let frontCardName = document.getElementById("card-name");
    let cardFrontExpirationDate =document.getElementById("card-data");
    let cardFrontSecurityCode =document.getElementById("card-cvv");

    let registeredCardNumber =document.createElement("p");
    let registeredCardholderName = document.createElement("span");
    let registeredExpirationDate =document.createElement("span");
    let registeredsecurityCode = document.createElement("span");


    registeredCardNumber.classList.add("card-front-number");
    registeredCardholderName.classList.add("card-front-name");
    registeredExpirationDate.classList.add("card-exp-date");
    registeredsecurityCode.classList.add("card-security-code");

    // validarea cardholder 
    validator.push(validadation(invalidNameMessage));
    validator.push(validadation(cardNumber,invalidNumberMessage));
    validator.push(validadation(expirationDate,invalidExpirationDate,2));
    validator.push(validadation(expirationYear, invalidExpirationYeare,2));
    validator.push(validadation(securityCode, invalidsecurityCode));


    // verifica imputurile sa fie valide

    if(validator.length==5 && validator.every((el) => el.valid ==true)){
        registeredCardNumber.innerText= cardholderName.value;
        registeredCardholderName.innerText=cardholderName.value;
        registeredExpirationDate.innerText=expirationDate.value + "/" + expirationYear.value;
        registeredsecurityCode.innerText= securityCode.value;


        // afisarea pe card 

        frontCardNumberContainer.appendChild(registeredCardNumber);
        frontCardName.appendChild(registeredCardholderName);
        cardFrontExpirationDate.appendChild(registeredExpirationDate);
        cardFrontSecurityCode.appendChild(registeredsecurityCode);


        const mainDateContainer =document.getElementById("main-date-container");
        const completValid =document.getElementById("complete-valid-container");
        mainDateContainer.style.display="none"
        completValid.style.display= "flex";


        
    }

}
const cardHolder=document.getElementById("cardholder-name");





function checkLength(inputValue, number) {
    return inputValue.length >= number;
  }