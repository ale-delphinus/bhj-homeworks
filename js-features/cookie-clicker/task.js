const clicker = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");

cookie.onclick = function () {
    if (cookie.width == 200) {
        cookie.width = 250;
    } else {
        cookie.width = 200;
    }
    clicker.textContent = +(clicker.textContent) + 1;   
};