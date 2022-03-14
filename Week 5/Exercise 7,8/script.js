
function onLoad()
{
    var circle = document.getElementById("circle");
    circle.addEventListener('click',clickCircle);
    circle.style.opacity = 1;
    document.addEventListener('keydown',function(event){
        console.log(event.keyCode);
        if(event.keyCode == 37)
        {
           if(circle.offsetLeft > 10)
                circle.style.left = (circle.offsetLeft - 10) + "px";
        }
        else if(event.keyCode == 39)
        {
            if(circle.offsetLeft < 1920)
                circle.style.left = (circle.offsetLeft + 10) + "px";
        }
        else if(event.keyCode == 38)
        {
            
            if(circle.offsetTop > 10)
                circle.style.top = (circle.offsetTop - 10) + "px";
        }
        else if(event.keyCode == 40)
        {
            
            if(circle.offsetTop < 1080)
                circle.style.top = (circle.offsetTop + 10) + "px";
        }
        else if(event.keyCode == 87)
        {
            if(circle.offsetWidth < 1000)
            {
                circle.style.width = (circle.offsetWidth + 10) + "px";
                circle.style.height = (circle.offsetHeight + 10) + "px";
            }
        }
        else if(event.keyCode == 83)
        {
            if(circle.offsetWidth > 200)
            {
                circle.style.width = (circle.offsetWidth - 10) + "px";
                circle.style.height = (circle.offsetHeight - 10) + "px";
            }
        }
    })
}

function clickCircle_EX_1_2_3()
{
    var circle = document.getElementById("circle");
    circle.textContent =  "Success";
   
    circle.style.backgroundColor = "blue";
    circle.style.opacity = 0.5;
}

var TimerStarted = false;
var Direction = true;
function clickCircle() // 4 & 5
{
    if(!TimerStarted)
    {
        TimerStarted = !TimerStarted;
        setInterval(countSeconds,100);
    }
}

function countSeconds()
{
    var clock = document.getElementById("headingCount");
    clock.textContent = parseInt(clock.textContent) + 1;
    var circle = document.getElementById("circle");
    
    if(Direction)
    {
        if(parseFloat(circle.style.opacity) < 1.0)
        {
            circle.style.opacity = parseFloat(circle.style.opacity) + 0.01;
            if(circle.offsetLeft > 10)
                circle.style.left = (circle.offsetLeft - 10) + "px";
            else
                Direction = !Direction;
        }
        else
            Direction = !Direction;
    }
    else
    {
        if(parseFloat(circle.style.opacity) > 0.01)
        {
            circle.style.opacity = parseFloat(circle.style.opacity) - 0.01;
            if(circle.offsetRight < 1000)
                circle.style.left = (circle.offsetLeft + 10) + "px";
            else
                Direction = !Direction;
        }
        else
            Direction = !Direction;
    }
    
}

document.addEventListener('DOMContentLoaded',onLoad);
