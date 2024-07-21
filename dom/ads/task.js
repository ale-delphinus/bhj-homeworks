const rotators = document.getElementsByClassName('rotator');

for (let i = 0; i < rotators.length; i++) {
    let rotator = rotators.item(i);
    let rotatorCase = rotator.querySelector('.rotator__case');

    function searchText() {
        if (rotatorCase.classList.contains('rotator__case_active')) {
            rotatorCase.classList.remove('rotator__case_active');
        }
        rotatorCase = rotatorCase.nextElementSibling;
        if (rotatorCase == null) {
            rotatorCase = rotator.querySelector('.rotator__case');
        }
        rotatorCase.classList.add('rotator__case_active');

    }
    setInterval(searchText, 1000);
}