let count=1;
const overlay=document.getElementsByClassName("welcome-right")[0];
const overlayBtn=document.getElementById("signup");
const overlayTitle=document.getElementById("overlay-title");
const overlayP=document.getElementById("overlay-p");
const signinForm=document.getElementsByClassName("signin-form")[0];
const signupForm=document.getElementsByClassName("signup-form")[0];
function move(){
    if(count%2!==0){
        overlay.style.transform = "translate3d(-100%, 0, 0)";
        overlay.style.transition = "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)";
        signinForm.style.display="none";
        signupForm.style.display="flex";
        signupForm.style.animation = "slideIn 0.6s cubic-bezier(0.22, 1, 0.36, 1)";
        overlayTitle.textContent="Hello, Friend"
        overlayP.textContent="reate your account and start your journey with us today!";
        overlayBtn.textContent="sign in";
    }
    if(count%2===0){
        overlay.style.transform = "translate3d(0, 0, 0)";
        overlay.style.transition = "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)";
        signinForm.style.display="flex";
        signinForm.style.animation = "slideIn 0.6s cubic-bezier(0.22, 1, 0.36, 1)";
        signupForm.style.display="none";
        overlayTitle.textContent="welcome back";
        overlayP.textContent="register with your personal details to use all of site features";
        overlayBtn.textContent="sign up";
    }
}
if(overlayBtn){
    overlayBtn.addEventListener("click", function(){
        move();
        count+=1;
    });
}
const password=document.getElementById("password");
const errorMsg=document.getElementsByClassName("errorMessage")[0];
const errorH=document.getElementById("error-h");
const errorP=document.getElementById("error-p");
const digits=["0","1","2","3","4","5","6","7","8","9"];
const specialChars=["!","@","#","$","%","^","&","*","(",")","_","+","-","=","{","}","[","]",":",";","'","<",">",",",".","?"];
const letters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
function passwordValidation(){ 
    let hasNumber=false;
    let hasSpecialChar=false;
    let hasLetter=false;
    for(let char of password.value){
        if(digits.includes(char)){
            hasNumber=true;
        }
        if(specialChars.includes(char)){
            hasSpecialChar=true;
        }
        if(letters.includes(char)){
            hasLetter=true;
        }
    }
    if(password.value.length<8){
        errorMsg.style.display="flex";
        errorMsg.style.transform="translateY(0%)";
        errorH.textContent="Password too short";
        errorP.textContent="Password must be at least 8 characters long.";
    }
    else if(password.value.length>20){
        errorMsg.style.display="flex";
        errorMsg.style.transform="translateY(0%)";
        errorH.textContent="Password too long";
        errorP.textContent="Password must be at most 20 characters long.";
    }
    else if(!hasNumber){
        errorMsg.style.display="flex";
        errorMsg.style.transform="translateY(0%)";
        errorH.textContent="Password must contain a digit";
        errorP.textContent="Password must contain at least one digit (0-9).";
    }
    else if(!hasSpecialChar){
        errorMsg.style.display="flex";
        errorMsg.style.transform="translateY(0%)";
        errorH.textContent="Password must contain a special character";
        errorP.textContent="Password must contain at least one special character (!@#$%^&*()_+-= etc.).";
    }
    else if(!hasLetter){
        errorMsg.style.display="flex";
        errorMsg.style.transform="translateY(0%)";
        errorH.textContent="Password must contain a letter";
        errorP.textContent="Password must contain at least one letter (a-z or A-Z).";
    }
    else{
        errorMsg.style.display="none";
        errorMsg.style.transform="translateY(-100%)";
    }

}
if(signinForm){
    signinForm.addEventListener("submit", function(event){
        event.preventDefault();
        passwordValidation();
    });
}
if(signupForm){
    signupForm.addEventListener("submit", function(event){
        event.preventDefault();
        passwordValidation();
    });
}