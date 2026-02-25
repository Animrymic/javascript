// 1. Select all the elements needed for the implementation
// 2. Implement function to fetch data from API (provide fields what kind of data we need)
// 3. Implement function that will display/hide spinner
// 4. Implement function that will display data in Cards
// 5. Implement function that will display data in Table
// 6. Implement 5 event listeners for the 5 buttons
// 6.1 Search, Reset, All from Europe, All neighbours MKD, Only MKD.
// 7. Implement construction function with props only needed for the data to be displayed

const url = "https://restcountries.com/v3.1/all?fields=name,capital,population,flags,region"

let html = {
    searchInput: document.getElementById("inpSearch"),
    searchBtn: document.getElementById("btnSearch"),
    resetBtn: document.getElementById("btnReset"),
    europeBtn: document.getElementById("btnAllInEurope"),
    neighboursBtn: document.getElementById("btnNeighbours"),
    macedoniaBtn: document.getElementById("btnMacedonia"),
    spinner: document.getElementById("spinner"),
    cardContainer: document.getElementById("resultContainer").firstElementChild
}

function toggleSpinner(showSpinner) {
    if (showSpinner) {
        html.spinner.classList.remove("d-none");
    }
    else {
        html.spinner.classList.add("d-none");
    }
}

function getData(url) {
    return fetch(url)
        .then(response => response.json());
}

getData(url)
    .then(countries => {
        console.log(countries);
        countries.forEach(country => {
            html.cardContainer.innerHTML += createCard(country);
        });
        toggleSpinner(false);
    }).catch(err => { 
        toggleSpinner(false);
        html.cardContainer.innerHTML = "<div class='row'><h3 class='text-danger'>Oops something went wrong! Please try again later!</h3></div>"
    })

function createCard(country) {
    return `
<div class="col-4" mb-3>
    <div class="card" style="width: 25rem; height: 500px; display: flex; flex-direction: column;">
            <img src="${country.flags.png}" class="card-img-top" alt="${country.flags.alt}" style="height: 200px; object-fit: cover; object-position: center;">
        <div class="card-body" style="display: flex; flex-direction: column; flex-grow: 1">
            <h5 class="card-title">${country.name.common}</h5>
            <p class="card-text">${country.name.common} is a country with a population of ${country.population} citizens, and the capital city is ${country.capital[0]}</p>
            <a href="https://en.wikipedia.org/wiki/${country.name.common}" class="btn btn-primary" target="_blank" style="margin-top: auto;">Wikipedia</a>
        </div>
    </div>
</div>
    `;
}

html.europeBtn.addEventListener("click", function() { 
    html.cardContainer.innerHTML = "";
    toggleSpinner(true);

    getData(url)
    .then(countries => {
        toggleSpinner(false);
        let filteredCountries = countries.filter(c => c.region === "Europe")
        filteredCountries.forEach(country => {
            html.cardContainer.innerHTML += createCard(country);
        })
    })
    
})