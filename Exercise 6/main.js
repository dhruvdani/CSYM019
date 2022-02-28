
function onLoad()
{
    var heading1 = document.getElementById("heading1");
    var paragraph1 = document.getElementById("paragraph1");
    var heading2 = document.getElementById("heading2");

    heading1.innerHTML = "Hello, my name is <u><i>Dhruv</i></u>.";
    paragraph1.firstChild.nodeValue = "This is the newly updated text.";

    heading1.addEventListener('click',clickHeading1);
    paragraph2.addEventListener('click',clickHeading2);
}

function clickHeading1()
{
    alert("You have clicked on heading 1.");
}

function clickHeading2()
{
    var paragraph2 = document.getElementById("paragraph2");
    paragraph2.textContent =  parseInt(paragraph2.textContent) + 1;
}

document.addEventListener('DOMContentLoaded',onLoad);