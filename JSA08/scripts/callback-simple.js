
let first = (callback) => {
    setTimeout(function () {
        console.log("First thing");
        callback();
    }, 1000);
}
let second = () => {
    console.log("Second thing");
}

// first(second);




let intervalId = setInterval(function () {
    console.log("Hello there!");
}, 1000)
document.getElementById("btn")
.addEventListener('click', function() { 
    clearInterval(intervalId);
    console.log("Interval Stopped");
})