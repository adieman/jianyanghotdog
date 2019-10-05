function userClicked() {
    console.log('Someone Clicked the button');
}

document.getElementById('btn').addEventListener("click", doStuff);

function doStuff() {
    return userClicked;
}