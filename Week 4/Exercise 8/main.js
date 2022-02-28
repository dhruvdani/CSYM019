
function onLoad()
{
    var heading1 = document.getElementById("heading1");
    var paragraph1 = document.getElementById("paragraph1");
    var heading2 = document.getElementById("heading2");
    var button = document.getElementById("btnSubmit");

    heading1.innerHTML = "Hello, my name is <u><i>Dhruv</i></u>.";
    paragraph1.firstChild.nodeValue = "This is the newly updated text.";

    heading1.addEventListener('click',clickHeading1);
    paragraph1.addEventListener('mouseenter',mouseenterParagraph1);
    paragraph1.addEventListener('mouseleave',mouseleaveParagraph1);
    paragraph2.addEventListener('click',clickHeading2);
    button.addEventListener('click',btnSubmitClick);
}
function btnSubmitClick()
{
    var TextBox = document.getElementById('txtName');
    var Div = document.getElementById('divTextBox');

    var button = document.getElementById("btnSubmit");
    button.hidden = true;

    Div.innerText = TextBox.value;
}
function mouseenterParagraph1()
{
    var paragraph1 = document.getElementById("paragraph1");
    paragraph1.style.color = "red";
    paragraph1.style.background = "black";
    
}
function mouseleaveParagraph1()
{
    var paragraph1 = document.getElementById("paragraph1");
    paragraph1.style.color = "black";
    paragraph1.style.background = "lavender";
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