const url = "https://restcountries.com/v3.1/all?fields=name,capital,population,flags,region,borders,cca3";

let html = {
    searchInput: document.getElementById("inpSearch"),
    searchBtn: document.getElementById("btnSearch"),
    resetBtn: document.getElementById("btnReset"),
    europeBtn: document.getElementById("btnAllInEurope"),
    neighboursBtn: document.getElementById("btnNeighbours"),
    macedoniaBtn: document.getElementById("btnMacedonia"),
    gridBtn: document.getElementById("gridBtn"),
    tableBtn: document.getElementById("tableBtn"),
    spinner: document.getElementById("spinner"),
    cardContainer: document.getElementById("resultContainer").firstElementChild
}

let currentCountries = [];
let currentView = "table"; 

function toggleSpinner(showSpinner) {
    if (showSpinner) {
        html.spinner.classList.remove('d-none');
    } else {
        html.spinner.classList.add('d-none');

    }
}

function getData(url) {
    return fetch(url)
        .then(response => response.json());
}

function createCard(country) {
    return `
        <div class="col-4 mb-3">
            <div class="card" style="width: 25rem; height: 100%; display: flex; flex-direction: column;">
                <img src="${country.flags.png}" class="card-img-top" alt="${country.flags.alt}" style="height: 250px; object-fit: cover; object-position: center;">
                <div class="card-body" style="display: flex; flex-direction: column; flex-grow: 1;">
                    <h5 class="card-title">${country.name.common}</h5>
                    <p class="card-text" style="flex-grow: 1;">${country.name.common} is a country with a population of ${country.population.toLocaleString()} citizens and the capital city is ${country.capital[0]}</p>
                    <a href="https://en.wikipedia.org/wiki/${country.name.common}" class="btn btn-primary" target="_blank">Wikipedia</a>
                </div>
            </div>
        </div>
    `;
}

function render(countries) {
    html.cardContainer.innerHTML = "";

    if (currentView === "table") {
        countries.forEach(country => {
            html.cardContainer.innerHTML += createCard(country);
        });
    } else {
        renderTable(countries);
    }
}

function renderTable(countries) {
    let tableHTML = `
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Flag</th>
                    <th>Name</th>
                    <th>Capital</th>
                    <th>Population</th>
                    <th>Region</th>
                </tr>
            </thead>
            <tbody>
    `;

    countries.forEach(country => {
        tableHTML += `
            <tr>
                <td><img src="${country.flags.png}" style="width:40px; height:25px;"></td>
                <td>${country.name.common}</td>
                <td>${country.capital ? country.capital[0] : "N/A"}</td>
                <td>${country.population.toLocaleString()}</td>
                <td>${country.region}</td>
            </tr>
        `;
    });

    tableHTML += "</tbody></table>";
    html.cardContainer.innerHTML = tableHTML;
}

getData(url)
    .then(countries => {
        console.log(countries);
        currentCountries = countries; 
        countries.forEach(country => {
            html.cardContainer.innerHTML += createCard(country);
        });
        toggleSpinner(false);
    }).catch(err => {
        toggleSpinner(false);
        html.cardContainer.innerHTML = "<div class='row'><h3 class='text-danger'>Ooops something went wrong! Please try again later!</h3>"
    })

html.europeBtn.addEventListener("click", function () {
    html.cardContainer.innerHTML = "";
    toggleSpinner(true);

    getData(url)
        .then(countries => {
            toggleSpinner(false);
            currentCountries = countries.filter(c => c.region === "Europe");
            render(currentCountries);
        });
});

html.neighboursBtn.addEventListener("click", function () {
    html.cardContainer.innerHTML = "";
    toggleSpinner(true);

    getData(url)
        .then(countries => {
            toggleSpinner(false);
            const macedonia = countries.find(c => c.name.common === "North Macedonia");

            if (!macedonia?.borders) return;

            currentCountries = countries.filter(c =>
                macedonia.borders.includes(c.cca3)
            );

            render(currentCountries);
        });
});

html.macedoniaBtn.addEventListener("click", function () {
    html.cardContainer.innerHTML = "";
    toggleSpinner(true);

    getData(url)
        .then(countries => {
            toggleSpinner(false);
            currentCountries = countries.filter(
                c => c.name.common === "North Macedonia"
            );
            render(currentCountries);
        });
});

html.searchBtn.addEventListener("click", function () {
    const searchValue = html.searchInput.value.toLowerCase();

    html.cardContainer.innerHTML = "";

    if (!searchValue) {
        html.cardContainer.innerHTML = "<h4 class='text-warning'>Please enter a country name.</h4>";
        return;
    }

    toggleSpinner(true);

    getData(url)
        .then(countries => {
            toggleSpinner(false);

            const results = countries.filter(c => c.name.common.toLowerCase().includes(searchValue));

            if (results.length === 0) {
                html.cardContainer.innerHTML = "<h4 class='text-danger'>No countries found.</h4>";
                return;
            }

            results.forEach(country => {
                html.cardContainer.innerHTML += createCard(country);
            })
        }).catch(() => {
            toggleSpinner(false);
            html.cardContainer.innerHTML = "<h4 class='text-danger'>Error while searching. Try again.</h4>";
        }); S
});

html.resetBtn.addEventListener("click", function () {
    html.cardContainer.innerHTML = "";
    toggleSpinner(true);

    getData(url)
        .then(countries => {
            currentCountries = countries; 
            countries.forEach(country => {
                html.cardContainer.innerHTML += createCard(country);
            });
            toggleSpinner(false);
        }).catch(err => {
            toggleSpinner(false);
            html.cardContainer.innerHTML = "<div class='row'><h3 class='text-danger'>Ooops something went wrong! Please try again later!</h3>"
        });
});

html.gridBtn.addEventListener("click", function () {
    html.cardContainer.innerHTML = "";
    toggleSpinner(true);

    getData(url)
        .then(countries => {
            console.log(countries);
            countries.forEach(country => {
                html.cardContainer.innerHTML += createCard(country);
            });
            toggleSpinner(false);
        }).catch(err => {
            toggleSpinner(false);
            html.cardContainer.innerHTML = "<div class='row'><h3 class='text-danger'>Ooops something went wrong! Please try again later!</h3>"
        });
});

html.tableBtn.addEventListener("click", function () {
    currentView = "table";
    renderTable(currentCountries);
});