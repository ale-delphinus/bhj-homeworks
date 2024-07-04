const clicker = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");

cookie.onclick = function () {
    if (cookie.width == "200px") {
        cookie.width == "250px";
    } else {
        cookie.width == "200px";
    }
    clicker.textContent = +(clicker.textContent) + 1;   
};