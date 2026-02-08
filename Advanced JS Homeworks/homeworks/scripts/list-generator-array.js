const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
let button = document.getElementById("generateBtn");
let list = document.getElementById("nameList");

    button.addEventListener("click", function() {
            list.innerHTML = "";
         names.forEach(function(name) {
                const li = document.createElement("li");
                li.textContent = name;
                list.appendChild(li);
            });
        });
