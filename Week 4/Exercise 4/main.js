
function onLoad()
{
    var heading1 = document.getElementById("heading1");
    var paragraph1 = document.getElementById("paragraph1");
    
    heading1.innerHTML = "Hello, my name is <u><i>Dhruv</i></u>.";
    paragraph1.firstChild.nodeValue = "This is the newly updated text.";
}

document.addEventListener('DOMContentLoaded',onLoad);
