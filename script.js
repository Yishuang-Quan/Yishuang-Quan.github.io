//Agent
function ShowAlert()
{
    alert("His Girlfriend, ME!");
}
//Agent number
function showMessage()
{
    alert("Yeah, that's my number.")
}
//Background color
function changecolorPurple()
{
    document.getElementById("bg").style.backgroundColor = 'lightblue';
}
function changecolorPink()
{
    document.getElementById("bg").style.backgroundColor = 'Pink';
}
//Increment button + if else
let count = 0;
function increment()
{
    count = count +1;
    document.getElementById("incre").value = count;
    if (count % 2 == 0)
    {
        document.getElementById("change").style.color = "Green";
    }
    else
    {
        document.getElementById("change").style.color = "Brown";
    }
}
//Repeat
function result()
{
    let repeatNumber = document.getElementById("numbers").value;
    let repeatMessage = document.getElementById("woot").value;
    for(let i = 0; i <=repeatNumber; i++)
    {
        document.getElementById("container").append(repeatMessage + " ");
    }
}
