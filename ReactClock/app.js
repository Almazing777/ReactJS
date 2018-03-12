setInterval(() =>{
    const myClock = React.createElement("h1", null, "The time is: " + new Date().toLocaleTimeString())
    ReactDOM.render(myClock, document.getElementById("app"))
}, 1000)