const reveal = Array.from(document.getElementsByClassName('reveal'));

const revealActive = function() {
    reveal.forEach(element => {
        const { top, bottom } = element.getBoundingClientRect();
        console.log(top, bottom);
        if (top > window.innerHeight || bottom < 0) {
            element.classList.remove('reveal_active');
        } else {
            element.classList.add('reveal_active');
        }
    });
}

document.addEventListener('scroll', revealActive);

