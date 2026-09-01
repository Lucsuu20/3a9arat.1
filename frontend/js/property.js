let properties=[
    {
        id: 1,
        image:"/img/Tour a Charming Queen Anne House in Defiance, Ohio — Photos _ Apartment Therapy.jpg",
        title: "Charming Queen Anne House ",
        purpose:"rent",
        wilaya:"oran",
        description:"F3 house near the beach and the city center, with a beautiful view of the sea and the mountains.",
        price:10000
    },
    {
        id: 2,
        image:"/img/download (15).jpg",
        title: "Luxury Villa with Private Garden",
        purpose: "sale",
        wilaya: "algiers",
        description: "Spacious 5-bedroom villa in Hydra with a private swimming pool, garage for 3 cars, and a landscaped garden in a calm neighborhood.",
        price: 85000000
    },
    {
        id: 3,
        image:"/img/Living room inspiration.jpg",
        title: "Cozy Studio in City Center",
        purpose: "rent",
        wilaya: "constantine",
        description: "Fully furnished F1 studio apartment near the university campus, ideal for students or working professionals. Includes high-speed internet.",
        price: 35000
    },
    {
        id: 4,
        image:"/img/download (16).jpg",
        title: "Commercial Storefront on Main Street",
        purpose: "rent",
        wilaya: "oran",
        description: "Prime commercial space of 120 sqm located in Akid Lotfi. Excellent foot traffic and large display windows for retail or showroom.",
        price: 250000
    },
    {
        id: 5,
        image:"/img/download (17).jpg",
        title: "Spacious F4 Apartment in Residentiel Area",
        purpose: "sale",
        wilaya: "tlemcen",
        description: "Beautiful F4 apartment on the 2nd floor with elevator in Mansourah. Close to schools, shops, and transport. Gated community.",
        price: 18500000
    },
    {
        id: 6,
        image:"/img/download (18).jpg",
        title: "Charming Traditional Villa",
        purpose: "sale",
        wilaya: "tlemcen",
        description: "Authentic Algerian-style villa with an inner courtyard, citrus garden, and traditional tilework near the historic center.",
        price: 42000000
    },
    {
        id: 7,
        image:"/img/download (19).jpg",
        title: "High-Rise Duplex with Terrace",
        purpose: "rent",
        wilaya: "algiers",
        description: "Stunning F5 duplex in Sidi Yahia with a private rooftop terrace, open-plan kitchen, 24/7 security, and underground parking.",
        price: 300000
    },
    {
        id: 8,
        image:"/img/download (20).jpg",
        title: "Industrial Warehouse / Storage Unit",
        purpose: "rent",
        wilaya: "blida",
        description: "500 sqm secure industrial warehouse near the highway network. High ceilings, heavy vehicle access, and three-phase power.",
        price: 180000
    },
    {
        id: 9,
        image:"/img/download (21).jpg",
        title: "Seaside Summer House",
        purpose: "rent",
        wilaya: "tipaza",
        description: "Furnished F3 beach bungalow with direct terrace access to the beach. Perfect for vacation rentals and weekend getaways.",
        price: 90000
    },
    {
        id: 10,
        image:"/img/download (22).jpg",
        title: "New Built F3 Apartment",
        purpose: "sale",
        wilaya: "setif",
        description: "Brand new apartment in Park Mall vicinity. Fitted kitchen, central heating, double glazing, and high-quality ceramic finishes.",
        price: 15500000
    },
    {
        id: 11,
        image:"/img/download (23).jpg",
        title: "Agricultural Land Plot",
        purpose: "sale",
        wilaya: "mostaganem",
        description: "5000 sqm fertile land plot suitable for farming or countryside estate, with legal title deed (Livret Foncier) and water access.",
        price: 22000000
    },
    {
        id: 12,
        image:"/img/download (24).jpg",
        title: "Modern Office Suite",
        purpose: "rent",
        wilaya: "algiers",
        description: "Ready-to-use office space of 85 sqm in Bab Ezzouar business district. Fiber internet infrastructure, conference room, and reception.",
        price: 160000
    },
    {
        id: 13,
        image:"/img/Instagram @ruilamakeup2.jpg",
        title: "Affordable F2 Suburban Apartment",
        purpose: "sale",
        wilaya: "annaba",
        description: "Well-maintained F2 apartment in a peaceful neighborhood. Ideal starter home or real estate investment for rental yield.",
        price: 9800000
    },
    {
        id: 14,
        image:"/img/Q' Nest By Quadrillion Hotels Lansdowne.jpg",
        title: "Mountain View Chalet",
        purpose: "rent",
        wilaya: "tizi ouzou",
        description: "Scenic 3-bedroom wooden chalet near Djurdjura mountains. Ideal for nature lovers seeking peace, fresh air, and hiking trails.",
        price: 75000
    },
    {
        id: 15,
        image:"/img/Real Estate Photography _ Vida Residences, Marina Dubai.jpg",
        title: "Contemporary F4 Apartment",
        purpose: "sale",
        wilaya: "oran",
        description: "High-end F4 apartment in Belgaid with smart home integration, central air conditioning, and marble floors throughout.",
        price: 24000000
    }
]
const template=document.getElementById("property-template");
const space=document.getElementById("property_space");
const chosenWilaya=document.querySelectorAll(".wilaya");
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
    
    while (i!=results.length){
        const card=template.cloneNode(true);
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
            wilaya.style.backgroundColor="white";
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
function filterProperty(){
    if(filters.filterWilaya.length!=0 ||filters.optionWilaya!=null || filters.purpose!=null){
         let propertyResult = properties.filter(property =>
            (filters.filterWilaya.length === 0 || filters.filterWilaya.includes(property.wilaya))
            &&
            (filters.purpose === null || property.purpose === filters.purpose)
            &&
            (filters.optionWilaya === null || property.wilaya === filters.optionWilaya)
        );
        if(filters.sort === "low-to-high" || filters.sort === "price-asc"){
            propertyResult.sort((a, b) => a.price - b.price);
        }
        if(filters.sort === "high-to-low" || filters.sort === "price-desc"){
            propertyResult.sort((a, b) => b.price - a.price);
        }
        return propertyResult;
    }
    else{
        if(filters.sort === "low-to-high" || filters.sort === "price-asc"){
            return [...properties].sort((a, b) => a.price - b.price);
        }
        if(filters.sort === "high-to-low" || filters.sort === "price-desc"){
            return [...properties].sort((a, b) => b.price - a.price);
        }
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