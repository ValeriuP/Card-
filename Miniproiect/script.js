const form=document.querySelector("#form");
const email=document.getElementById("email");
const password = document.getElementById("password");
const userName=document.getElementById("username");
const cpassword=document.getElementById("cpassword");

let users=[]

form.addEventListener("submit",(e)=>{
  e.preventDefault();
 
  if(validInputs()){
    users.push(userName.value, email.value, password.value);
    localStorage.setItem("user",JSON.stringify(users));
    console.log(userName.value);
    window.location.href="login.html"
  }
})

function validInputs(){
  let result=true
  const emailVal=email.value;
  if(emailVal==""){
    setError(email,"email is required");
    result=false;
  }
  else if(!isValidEmail(emailVal)){
    setError(email,"please enter valid email");
    result=false;
  
  }
  const passwordVal=password.value;
  if(passwordVal==""){
    setError(password,"password is required ");
    result=false;
    
  }
  else if(passwordVal.length<5){
    result=false;
    setError(password, "password must be atleast 5 characters");
  }
  const cpasswordVal=cpassword.value;
  if(cpasswordVal==""){
    setError(cpassword,"password is required ");
    result=false;
    
  }
  else if(cpasswordVal !==passwordVal){
    result=false;
    setError(cpassword, "password does not match");
  }
  return result
}


function setError(element,message){
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector('.error');

  errorElement.innerText = message;
  inputGroup.classList.add('error');
}

function isValidEmail(email) {
    // Split the email address into local part and domain part
    const parts = email.split('@');
    
    
    // Check if there are exactly two parts
    if (parts.length !== 2) {
      return false;
    }
  
    // Check if the local part and domain part are not empty
    const localPart = parts[0];
    const domainPart = parts[1];
  
    if (localPart.length === 0 || domainPart.length === 0) {
      return false;
    }
  
    // Check if there is at least one dot in the domain part
    if (!domainPart.includes('.')) {
      return false;
    }
  
    // If all conditions pass, the email is considered valid
    return true;
  }
  