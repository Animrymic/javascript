let colorInput = document.getElementById("colorInput");
let fontSizeInput = document.getElementById("fontSizeInput");
let itemsInput = document.getElementById("itemsInput");
let button = document.getElementById("generateBtn");
let container = document.getElementById("listsContainer");

        button.addEventListener("click", function() {
            const color = colorInput.value || "black"; 
            const fontSize = fontSizeInput.value || "16px"; 
            const items = itemsInput.value.split(",").map(item => item.trim()).filter(item => item);

            if(items.length === 0) {
                alert("Please enter at least one item.");
                return;
            }

            const ul = document.createElement("ul");
            ul.style.color = color;
            ul.style.fontSize = fontSize;

            items.forEach(item => {
                const li = document.createElement("li");
                li.textContent = item;
                ul.appendChild(li);
            });

            container.appendChild(ul);

            itemsInput.value = "";
        });