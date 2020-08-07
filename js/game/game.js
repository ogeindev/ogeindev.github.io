const WIDTH = 400;
const HEIGH = 400;

let target = {
    x: getRandomNumber(WIDTH),
    y: getRandomNumber(HEIGH)
}

let map = document.getElementById('mapGame');
let pista = document.getElementById('distance');
let click = 0;

map.addEventListener('click', (e) => {
    click++;
    let distance = getDistance(e, target);
    let distanceHint = getDistanceHint(distance);
    pista.innerHTML = distanceHint;
    if(distance < 20){
        alert("Has encontrado el Tesoro!!" + " || Tesoso encontrado tras " + click + " clicks")
    }
    console.log(distance)
    console.log(distanceHint)
})