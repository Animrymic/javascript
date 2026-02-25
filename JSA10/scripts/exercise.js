const url = "https://restcountries.com/v3.1/all?fields=name,capital,population,borders";

async function getAllCountries() {
    let countryApi = await fetch(url); 
    let result = await countryApi.json(); 
    console.log(result);
    return result;
    
}
getAllCountries();

async function onlyMacedonia() {
    let response = await fetch(url)
    let country = await response.json(); 

    let macedonia = country.filter(c => c.name.common === "North Macedonia")
    
    console.log(macedonia);
    return macedonia;
} 

onlyMacedonia();

async function macedoniaNeighbours() {
    try {
        const response = await fetch(url);
        const countries = await response.json();

        const macedonia = countries.find(
            country => country.name.common === "North Macedonia"
        );

        if (!macedonia || !macedonia.borders) {
            console.log("No neighbours found.");
            return [];
        }

        const mkdNeighbours = countries
            .filter(country => macedonia.borders.includes(country.cca3))
            .map(country => country.name.common);

        console.log(mkdNeighbours);
        return mkdNeighbours;

    } catch (error) {
        console.error("Error:", error);
    }
}

macedoniaNeighbours();