let button = document.getElementById("loadCharacterBtn");
let characterNameH1 = document.getElementById("characterName");
let statsTableBody = document.getElementById("characterStats").querySelector("tbody");

        button.addEventListener("click", function() {
            fetch("https://swapi.py4e.com/api/people/1")
                .then(response => {
                    if (!response.ok) throw new Error("Network response was not ok");
                    return response.json();
                })
                .then(data => {
                   
                    characterNameH1.textContent = data.name;

                    statsTableBody.innerHTML = "";

                    const stats = {
                        "Height": data.height,
                        "Weight": data.mass,
                        "Eye color": data.eye_color,
                        "Hair color": data.hair_color
                    };

                    for (const key in stats) {
                        const row = document.createElement("tr");

                        const cellKey = document.createElement("th");
                        cellKey.textContent = key;
                        row.appendChild(cellKey);

                        const cellValue = document.createElement("td");
                        cellValue.textContent = stats[key];
                        row.appendChild(cellValue);

                        statsTableBody.appendChild(row);
                    }
                })
                .catch(error => console.error("Fetch error:", error));
        });