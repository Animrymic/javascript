let peopleUrl = 'https://swapi.dev/api/people/';

let loadDataBtn = document.getElementById('load-data'); 
let container = document.getElementById('container');
let tbody = document.querySelector('tbody');

loadDataBtn.addEventListener('click', function() { 
    fetch(peopleUrl)
        .then(function(response) { 
            return response.json();
        })
        .then(function(data) {
            let SwapiPeople = new SwapiPeopleResponse(
                data.count, data.next, data.prev,data.results);
                console.log(SwapiPeople);

                generatePeopleTable(SwapiPeople.results, tbody);
        })
        .catch(function(error) { 
            console.log(error);
        })
});

//  <tr>
//       <th scope="row">1</th>
//       <td>Mark</td>
//       <td>Otto</td>
//       <td>@mdo</td>
//     </tr>


function generatePeopleTable(people, element) {
        let html = '';
      for (let person of people) { 
        let html = ` 
    <tr>
        <th>${person.name}</th>
        <td>${person.birth_year}</td>
        <td>${person.films.length}</td>
        <td><button type="button" value="${person.name}">More Details</button></td>
    </tr>
        `;
    }

element.innerHTML = '';
element.innerHTML = html;
    
}