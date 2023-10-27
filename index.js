// Define the runClock function
const runClock = () => {
    let date = new Date();
    let time = date.toLocaleTimeString();
    document.getElementById("time").innerHTML = time;
}

// Use setInterval to call runClock every 1000 milliseconds (1 second)
setInterval(runClock, 1000);
