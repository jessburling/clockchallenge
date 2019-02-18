// Creating a function to make the clock work
function runClock() {
    // A variable called 'now' containing data from the 'Date' object
    let now = new Date();

    // There are 24 hours in a day so we create a modulus (division remainder) to get 12
    // A function to get the current hour in the Date object
    let hour = now.getHours() % 12;
    // This gets the minutes
    // The minute is the
    let min = now.getMinutes();
    // This gets the seconds
    let sec = now.getSeconds();
    // This gets the milliseconds and allows the hands to move smoother instead of jumping to each hour/minute/second
    let ms = now.getMilliseconds();

    // Calling on the clock div in HTML
    let clock = document.querySelector("div.clock");
    // Calling on the hours div in the clock div
    let hourHand = clock.querySelector("div.hours");
    // Calling on the minutes div in the clock div
    let minHand = clock.querySelector("div.minutes");
    //Calling the seconds div class in the clock div
    let secHand = clock.querySelector("div.seconds");

    // 360 degrees divided by 12 (hours) is 30 so this sets the hour hand to rotate 30 degrees every hour
    // To get a smoother hour hand =
    // 60 minutes in one hour
    // So here we do 30 divided by 60(m) to get 0.5
    let hourRotation = 30 * hour;

    // 360 degrees divided by 60 (minutes) is 6 so this sets the minute hand to rotate 6 degrees every minute
    // To get a smoother minute hand =
    // 60 seconds in one minute
    // So here we do 6 divided 60(s) to get 0.01
    let minRotation = 6 * min;

    // 360 degrees divided by 60 (minutes) is 6 so this sets the second hand to rotate 6 degrees every second
    // To get a smoother second hand =
    // 1000 milliseconds in 1 second, so there are 6000 milliseconds in 6 seconds
    // So here we do 6 divided by 1000(ms) to get 0.006
    // Moves 0.006 degrees per millisecond 
    let secRotation = 6 * sec;


    hourHand.style.transform = "rotate(" + hourRotation + "deg)";
    minHand.style.transform = "rotate(" + minRotation + "deg)";
    secHand.style.transform = "rotate(" + secRotation + "deg)";
    
    // requestAnimationFrame() method tells the browser that you wish to perform an animation
    // In this case the animation is the runClock function
    requestAnimationFrame(runClock)
};

runClock()

function digitalClock () {

    let now = new Date();

    let hrs = now.getHours();
    let mins = now.getMinutes();
    let secs = now.getSeconds();
    let time = document.getElementById("cloud-time");
    let t = setTimeout(digitalClock, 500);
    mins = checkTime(mins);
    secs = checkTime(secs);

    time.innerHTML = hrs + ":" + mins + ":" + secs;

    function checkTime(i) {
        if (i < 10) {i = "0" + i};
        return i;
    }

};

digitalClock()
