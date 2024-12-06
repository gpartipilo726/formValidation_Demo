
const email = document.getElementById('email');
const emailErrorMessage = document.getElementById('emailError');
const passwordErrorMessage = document.getElementById('passwordError');
const confirmPasswordErrorMessage = document.getElementById('confirmPasswordError');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm_password');
const postalCode = document.getElementById('postalCode');
const postalCodeErrorMessage = document.getElementById('postalCodeError');

email.addEventListener("blur", (e) =>{
 if(email.validity.typeMismatch){
    emailErrorMessage.textContent = "Email is missing '@'. Please try again."
    email.classList.add('error');
 } else{
   emailErrorMessage.textContent = ''
    email.classList.remove('error');;
 }
});


password.addEventListener('blur', ()=>{
   if(password.validity.tooShort){
      passwordErrorMessage.textContent = "Password is too short. Passwords should be atleast 5 characters."
      password.classList.add('error');
   }else{
      passwordErrorMessage.textContent = '';
      password.classList.remove('error');;
   }

});

confirmPassword.addEventListener('blur', () =>{
   if(!confirmPassword.value){
      confirmPasswordErrorMessage .textContent = '';
      confirmPassword.classList.remove('error');
      return;
   }

   if(password.value){

      if(confirmPassword.value !== password.value){
         confirmPasswordErrorMessage.textContent = "Passwords do not match.";
         confirmPassword.classList.add('error');

      } else{
         confirmPasswordErrorMessage .textContent = '';
         confirmPassword.classList.remove('error');
      }
   }
});

function checkPostalCode (option){
   
areaCodeConstraints = {
   US: ["^\\d{5}(-{1}\\d{4,6})", "US Postal Codes must be 5 numerical values (ex: 22345, 33456)"],
   IT: ["^\\d{5}$", "Italian Postal Codes must be 5 numerical values (ex: 22345, 33456)"],
   SPA: ["^\\d{5}$", "Spanish Postal Codes must be 5 numerical values (ex: 22345, 33456)"],
   FRA: ["/^\d{2}[ ]?\d{3}$/", "French Postal Codes should be two numbers followed by a space"],
   GER: ["^\\d{5}$", " German Postal Codes must be 5 numerical values (ex: 22345, 33456)"],
   JAP: ["^\\d{7}\\s\\(\\d{3}-\\d{4}\\)$", "JPN postal codes must start with 3 numebrs followed by a hypen and 4 numbers"],
}


const constraint = new RegExp(areaCodeConstraints[option][0],"");

if(constraint.test(postalCode.value)){
   postalCodeErrorMessage.textContent = '';
   postalCode.classList.remove('error');


} else {
   postalCodeErrorMessage.textContent = areaCodeConstraints[option][1];
   postalCode.classList.add('error');
}

}

postalCode.addEventListener('blur', () =>{
   const country = document.getElementById('country').value;
   checkPostalCode(country);
   console.log(country)
});
