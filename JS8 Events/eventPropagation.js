document.getElementById('parent')
    .addEventListener('click', function() { 
    console.log(parent); 
}, true)

document.getElementById('child')
.addEventListener('click', function() { 
    console.log(child); 
})

let parentResult = document.getElementById('parent-result'); 
parentResult.addEventListener('click', function(e) { 
    console.log('parent-div');
    console.log(e.target);
    console.log(e.currentTarget); 
});

let html = `<button type="button">First</button>
<button type="button">Second</button>
<button type="button">Third</button>`;

setTimeout(() => {
    parentResult.innerHTML = html; 
}, 4000);