let button = document.getElementById("loadDataBtn");
let academyNameH1 = document.getElementById("academyName");
let studentsList = document.getElementById("studentsList");

      button.addEventListener("click", function() {
            fetch("https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/main/shared_data/students.json")
                .then(response => {
                    if (!response.ok) throw new Error("Network response was not ok");
                    return response.json();
                })
                .then(data => {
                    academyNameH1.textContent = data.academy;

                    studentsList.innerHTML = "";

                    data.students.forEach(studentName => {
                        const li = document.createElement("li");
                        li.textContent = studentName; 
                        studentsList.appendChild(li);
                    });
                })
                .catch(error => console.error("Fetch error:", error));
        });
