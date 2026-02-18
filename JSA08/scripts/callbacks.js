let url = "https://raw.githubusercontent.com/aa-codecademy/mkwd14-03-ajs-and-ai/refs/heads/main/G1/Class07/students.json"

let dataFromApi = [];


let getData = (url, callback) => {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            dataFromApi = data;
            console.log("The request succeeded!")
            callback(dataFromApi);
        })
        .catch(err => console.log(err));
}

let printData = (data) => { 
    console.log(data);
}

getData(url, printData);
printData(dataFromApi); 











// setTimeout(function() {
//      console.log(dataFromApi);
// }, 4000);