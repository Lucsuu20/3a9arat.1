console.log(properties);
const template=document.getElementById("property-template");
const space=document.getElementById("property_space");
const chosenWilaya=document.querySelectorAll(".wilaya");
const propertyCard=document.querySelectorAll(".property-card");
let filters={
        filterWilaya:[],
        sort:null,
        optionWilaya:null,
        purpose:null,
    }
const searchInput = document.getElementById("search-property");
let searchResult = "";
function showClear(){
    if (clearFilter === null) return;
    if (filters.filterWilaya.length===0 && filters.sort==null && filters.optionWilaya==null && filters.purpose==null){
        clearFilter.style.display="none";
    }
    else{
        clearFilter.style.display="block";
    }
}
function displayProperties() {
    space.innerHTML = "";
    let i=0;
    let results;
    if(searchResult===""){
        results=filterProperty();
    }
    else{
        results=searchProperty();
    }
    results=sortProperty(results);
    while (i!=results.length){
        const card=template.cloneNode(true);
        console.log("CARD:", card);
        card.addEventListener("click", function(){
            console.log(this);
            console.log(this.id);
            window.location.href=`./property.html?id=${this.id}`;
        })
        card.id=results[i].id;
        space.append(card);
        const title=card.querySelector(".property-title");
        const wilaya=card.querySelector(".property-wilaya");
        const purpose=card.querySelector(".property-purpose");
        const price=card.querySelector(".property-price");
        const desc=card.querySelector(".property-desc");
        const img=card.querySelector(".property-img");
        title.textContent=results[i].title;
        wilaya.textContent=results[i].wilaya;
        purpose.textContent=results[i].purpose;
        price.textContent=results[i].price + " DZD";
        desc.textContent=results[i].description;
        img.src=results[i].image;

        console.log(i, results[i].title, results[i].image);
        i+=1;

    }
}
displayProperties();
chosenWilaya.forEach(wilaya=>{
    wilaya.selected=false;
    wilaya.addEventListener("click", function(){
        this.selected=!this.selected;
        if(this.selected){
            filters.filterWilaya.push(this.value);
            wilaya.style.backgroundColor="#FFD700";
            console.log(filters.filterWilaya);
            showClear()
            displayProperties();
        }
        else{
            current=filters.filterWilaya.indexOf(this.value);
            filters.filterWilaya.splice(current , 1);
            wilaya.style.backgroundColor="transparent";
            console.log(filters.filterWilaya);
            showClear()
            displayProperties();
} })
})
const selectWilaya=document.querySelector("#wilaya");
selectWilaya.addEventListener("change",(event)=>{
    const outputWilaya=event.target.value;
    filters.optionWilaya=outputWilaya;
    console.log(outputWilaya);
    showClear()
    filters.filterWilaya=[]
    displayProperties();
})
const selectSort=document.querySelector("#sort");
selectSort.addEventListener("change",(event)=>{
    const outputSort=event.target.value;
    filters.sort=outputSort;
    console.log(outputSort);
    showClear();
    displayProperties();
})
const selectPurpose=document.querySelector("#purpose");
selectPurpose.addEventListener("change",(event)=>{
    const outputPurpose=event.target.value;
    filters.purpose=outputPurpose || null;
    console.log(filters.purpose);
    console.log(outputPurpose);
    showClear()
    displayProperties();
})
const clearFilter=document.getElementById("clear-filter");
clearFilter.addEventListener("click", function(){
    filters.filterWilaya=[]
    filters.optionWilaya=null;
    filters.purpose=null;
    filters.sort=null;
    chosenWilaya.forEach(wilaya=>{
        wilaya.selected=false;
        wilaya.style.backgroundColor="white";
    })
    console.log(filters);
    displayProperties();
    showClear()
})
function filterProperty() {
    if (
        filters.filterWilaya.length != 0 ||
        filters.optionWilaya != null ||
        filters.purpose != null
    ) {
        let propertyResult = properties.filter(property =>
            (filters.filterWilaya.length === 0 || filters.filterWilaya.includes(property.wilaya)) &&
            (filters.purpose === null || property.purpose === filters.purpose) &&
            (filters.optionWilaya === null || property.wilaya === filters.optionWilaya)
        );

        return propertyResult;
    }

    else {
        return properties;
    }
}
searchInput.addEventListener("input", function () {
    searchResult = this.value
    console.log(searchResult);
    displayProperties();
});
function searchProperty() {
    const result = properties.filter(property => {
        return (
            property.title.toLowerCase().includes(searchResult.toLowerCase()) ||
            property.purpose.toLowerCase().includes(searchResult.toLowerCase()) ||
            property.wilaya.toLowerCase().includes(searchResult.toLowerCase()) ||
            property.description.toLowerCase().includes(searchResult.toLowerCase()) ||
            property.price.toString().includes(searchResult)
        );
    });
    console.log(result);
    return result;
}
function sortProperty(results){ 
    if(filters.sort==="price-asc"){
        results.sort((a,b) => a.price - b.price);
    }
    else if(filters.sort==="price-desc"){
        results.sort((a,b) => b.price - a.price);
    }
    else if(filters.sort==="newest"){
        results.sort((a,b) => b.id - a.id);
    }
    else if(filters.sort==="oldest"){
        results.sort((a,b) => a.id - b.id);
    }
    else if(filters.sort==="title"){
        results.sort((a, b) => a.title.localeCompare(b.title));
    }
    return results;
}