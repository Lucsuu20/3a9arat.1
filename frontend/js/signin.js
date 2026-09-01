let count=1;
const overlay=document.getElementsByClassName("welcome-right")[0];
const overlayBtn=document.getElementById("signup");
const overlayTitle=document.getElementById("overlay-title");
const overlayP=document.getElementById("overlay-p");
const signinForm=document.getElementsByClassName("signin-form")[0];
const signupForm=document.getElementsByClassName("signup-form")[0];
function move(){
    if(count%2!==0){
        overlay.style.transform="translateX(-100%)";
        overlay.style.transition = "transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)";
        signinForm.style.display="none";
        signupForm.style.display="flex";
        signupForm.style.animation = "slideIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)";
        overlayTitle.textContent="Hello, Friend"
        overlayP.textContent="reate your account and start your journey with us today!";
        overlayBtn.textContent="sign in";
    }
    if(count%2===0){
        overlay.style.transform="translateX(0%)";
        overlay.style.transition = "transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)";
        signinForm.style.display="flex";
        signinForm.style.animation = "slideIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)";
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
const errorMsg=document.getElementsByClassName("errorMessage")[0];
const errorH=document.getElementById("error-h");
const errorP=document.getElementById("error-p");