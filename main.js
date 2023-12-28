

const changeColour = () => {
    let rNumber = Math.floor(Math.random() * 7);
    let colour;
    if(rNumber === 0) colour = '#6A3FF2';
    else if(rNumber === 1) colour = '#F23FA5';
    else if(rNumber === 2) colour = '#5D8C71';
    else if(rNumber === 3)  colour = '#5C493F';
    else if(rNumber === 4) colour = '#0069F4';
    else if(rNumber === 5) colour = '#F51800';
    else colour = '#5C3B37';
    document.querySelector('button').style.backgroundColor = colour;
}

let message = document.getElementById("message");

const removeMessage = () =>
{
    message.innerHTML = "";
}

const messageFlower = () =>
{
    message.innerHTML = "Cormoran Strike gave this to me as a gift when I moved to ...Hogwarts";
}

const messageCar = () =>
{
    message.innerHTML = "It used to be my parents' car, now it's mine. HEHE. "
}

const messagePerfume = () =>
{
    message.innerHTML = "A present from Strike for my 30th birthday. "
}

const messageDog = () =>
{
    message.innerHTML = "Our family dog: Rowntree. He's the cutest boy♥ "
}