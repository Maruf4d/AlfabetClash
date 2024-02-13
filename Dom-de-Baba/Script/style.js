function makeRed(){
    document.body.style.backgroundColor = (`red`);
}
const skyButton = document.getElementById('make-skyblue');
skyButton.addEventListener(`click`, skyMake)
function skyMake(){
    document.body.style.backgroundColor = (`skyblue`)
}

const makePink = document.getElementById(`make-pink`);
makePink.addEventListener(`click`, function makePink() {
    document.body.style.backgroundColor = (`pink`);
});