let dead = document.getElementById("dead");
let lost = document.getElementById("lost");



function restart() {
    dead.textContent = 0;
    lost.textContent = 0;
}


function getHole(index) {
    return document.getElementById(`hole${index}`);
}

for(let index = 1; index <= 9; index++) {
    getHole(index).onclick = function() {
        if(getHole(index).className.includes("hole_has-mole")) {
            dead.textContent++;
        } else {
            lost.textContent++;
        }

        if(lost.textContent == 5) {
            alert("Вы проиграли!");
            restart();
        } else if(dead.textContent == 10) {
            alert("Победа!");
            restart();
        }
    }
}