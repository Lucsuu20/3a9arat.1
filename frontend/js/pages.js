const home=document.getElementById("home-navbtn");
const search=document.getElementById("searchproperty-navbtn");
const map=document.getElementById("map-navbtn");
if (home){home.addEventListener("click",function(){
    window.location.href="index.html";})}
if (search){search.addEventListener("click",function(){
    window.location.href="search-property.html";})}
if (map){map.addEventListener("click",function(){
    window.location.href="map.html";})}
const settings_menu=document.getElementsByClassName("settings-menu")[0];
const settings=document.getElementById("settings");
if(settings){
    settings.addEventListener("click", function(){
        settings_menu.style.display="block";
    })
}
const exit_settings=document.getElementById("exit-settings-menu");
if(exit_settings){
    exit_settings.addEventListener("click", function(){
        settings_menu.style.display="none";
    })
}
const propertyNav=document.getElementById("property-purpose");
let prpsValue="buy";
const buy=document.getElementById("buy");
const rent=document.getElementById("rent");
const buyImg=document.getElementById("buyImg");
const rentImg=document.getElementById("rentImg");
buy.addEventListener("click", function(){
    prpsValue="buy";
    console.log(prpsValue);
    prpsColor();
});
rent.addEventListener("click", function(){
    prpsValue="rent";
    console.log(prpsValue);
    prpsColor();
});
function prpsColor(){
    if(prpsValue==="buy"){
        buy.style.color="#1E90FF";
        buy.style.borderBottom="3px solid #1E90FF";
        buyImg.style.filter="invert(0.5) sepia(1) saturate(5) hue-rotate(180deg)";
        rentImg.style.filter="drop-shadow(0 0 0 #000)";
        rent.style.color="#000";
        rent.style.borderBottom="3px solid transparent";
    }
    else if(prpsValue==="rent"){
        rent.style.color="#1E90FF";
        rent.style.borderBottom="3px solid #1E90FF";
        rentImg.style.filter="invert(0.5) sepia(1) saturate(5) hue-rotate(180deg)";
        buyImg.style.filter="drop-shadow(0 0 0 #000)";
        buy.style.color="#000";
        buy.style.borderBottom="3px solid transparent";
    }
}
prpsColor();