 let database = [];

        // Student generator function
        function Student(firstName, lastName, age, email) {
            return {
                firstName,
                lastName,
                age,
                email
            };
        }

        let form = document.getElementById("studentForm");

        form.addEventListener("submit", function(event) {
            event.preventDefault(); 

            let firstName = document.getElementById("firstName").value.trim();
            let lastName = document.getElementById("lastName").value.trim();
            let age = document.getElementById("age").value.trim();
            let email = document.getElementById("email").value.trim();

            let newStudent = Student(firstName, lastName, age, email);

            database.push(newStudent);

            console.log("Database:", database);

            form.reset();
        });