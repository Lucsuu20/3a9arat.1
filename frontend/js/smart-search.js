const currentWilaya = localStorage.getItem("currentWilaya");
const currentPrps = localStorage.getItem("currentPrps");
const currentType = localStorage.getItem("currentType");
const currentPrice = localStorage.getItem("currentPrice");
const currentArea = localStorage.getItem("currentArea");
console.log(currentArea);
console.log(currentPrice);
console.log(currentPrps);
console.log(currentType);
console.log(currentWilaya);
const cities = document.getElementById("cities");
const type = document.getElementById("property-type");
const area = document.getElementById("area");
const price = document.getElementById("price-range");
const ratings = document.getElementById("minimum-ratings");
const reviews = document.getElementById("minimum-reviews");
const prps = document.getElementById("property-purpose");
const smartSearchForm = document.getElementById("smart-search-form");
const searchResult = document.getElementsByClassName("results-container")[0];
const searchSpace = document.getElementById("search-results");
const more=document.getElementsByClassName("smartSearchMore")[0];
const closeMore=document.getElementsByClassName("closeSmartSearchMore")[0];
const morePage = document.getElementById("smartSearchMorePage");
let selectedPropertyId = null;
cities.value = currentWilaya || "";
type.value = currentType || "";
area.value = currentArea || "";
price.value = currentPrice || "";
prps.value = currentPrps || "";
function smartSearch() {
    if (
        prps.value === "" &&
        cities.value === "" &&
        type.value === "" &&
        price.value === "" &&
        area.value === "" &&
        ratings.value === "" &&
        reviews.value === ""
    ) {
        alert("At least enter one thing");
        return [];
    }
    let SmartSearchResult = properties.filter(property =>
        (prps.value === "" || property.purpose === (prps.value === "buy" ? "sale" : prps.value)) &&
        (type.value === "" || property.type === type.value) &&
        (area.value === "" || property.area <= area.value) &&
        (price.value === "" || property.price <= price.value) &&
        (cities.value === "" || property.wilaya === cities.value) &&
        (ratings.value === "" || property.rating >= ratings.value) &&
        (reviews.value === "" || property.reviews >= reviews.value)
    );
    return SmartSearchResult;
}
function searchResults() {
    let i = 0;
    let results = smartSearch();
    searchSpace.innerHTML = "";
    while (i != results.length) {
        let result = searchResult.cloneNode(true);
        result.dataset.propertyId = results[i].id;
        result.title = results[i].title;
        result.wilaya=results[i].wilaya;
        result.rating=results[i].rating;
        result.area=results[i].area;
        result.reviews=results[i].reviews;
        result.price=results[i].price;
        result.purpose=results[i].purpose;
        result.type=results[i].type;
        result.description=results[i].description;
        result.image=results[i].image;
        result.addEventListener("click", function(){
            selectedPropertyId = this.dataset.propertyId;
            more.style.willChange="transform";
            more.style.transform="translateX(0%)";
            more.style.transition="transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)"
            document.getElementById("smartSearchMoreTitle").textContent=this.title;
            document.getElementById("smartSearchMoreWilaya").textContent=this.wilaya;
            document.getElementById("smartSearchMorePurpose").textContent=this.purpose;
            document.getElementById("smartSearchMoreType").textContent=this.type;
            document.getElementById("smartSearchMorePrice").textContent=this.price + " DZD";
            document.getElementById("smartSearchMoreRating").textContent=this.rating;
            document.getElementById("smartSearchMoreReviews").textContent=this.reviews + " reviews";
            document.getElementById("smartSearchMoreDesc").textContent=this.description;
            document.getElementById("smartSearchMoreImage").src=this.image;
            })
        result.querySelector("#smartSearchTitle").textContent =
            results[i].title;
        result.querySelector("#smartSearchWilaya").textContent =
            results[i].wilaya +" 𖡡";
        result.querySelector("#smartSearchRatings").textContent =
            results[i].rating +" ★";
        result.querySelector("#smartSearchArea").textContent =
            results[i].area +" m2";
        result.querySelector("#smartSearchReviews").textContent =
            results[i].reviews;
        result.querySelector("#smartSearchPrice").textContent =
            results[i].price +" DZD";
        result.querySelector("#smartSearchPurpose").textContent=
            results[i].purpose
        result.querySelector("#smartSearchType").textContent=
            results[i].type
        searchSpace.append(result);
        i++;
    }
    if (results.length==0){
        document.getElementById("noResults").style.display="block";
}}

smartSearchForm.addEventListener("submit", function(event) {
    event.preventDefault();
    localStorage.setItem("currentWilaya", cities.value);
    localStorage.setItem("currentType", type.value);
    localStorage.setItem("currentPrice", price.value);
    localStorage.setItem("currentArea", area.value);
    localStorage.setItem("currentPrps", prps.value);
    console.log(cities.value);
    console.log(type.value);
    console.log(area.value);
    console.log(price.value);
    console.log(prps.value);
    searchResults();
});

closeMore.addEventListener("click", function(){
    more.style.willChange="transform";
    more.style.transform="translateX(100%)"
    more.style.transition="transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)"
})
morePage.addEventListener("click", function () {
     window.location.href = `./property.html?id=${selectedPropertyId}`;
});