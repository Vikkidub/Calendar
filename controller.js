function startTime() {
    const time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    
    document.getElementById('timeDiv').innerHTML = hours + ":" + minutes + ":" + seconds;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
  }