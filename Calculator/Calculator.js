/** CALCULATOR PROGRAM */

const display = document.getElementById('display');

function appendToDisplay(input)
{
    if (display.value === "0")
    {
        display.value = "";
    }
    display.value += input;
}

function clearDisplay()
{
    display.value = "0";
}

function calculate()
{
    try
    {
        display.value = eval(display.value)
        if (display.value === "Infinity")
        {
            display.value = "Error";
        }
    }
    catch(error)
    {
        display.value = "Error";
    }
}