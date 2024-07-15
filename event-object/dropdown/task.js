const value = document.querySelector('.dropdown__value');
const list = document.querySelector('.dropdown__list');
const items = document.querySelectorAll('.dropdown__item');


let pressButton = function() {
    items.forEach((item) => {
        item.addEventListener('click', function(event){
            value.textContent = item.textContent;
            list.classList.remove('dropdown__list_active');
            event.preventDefault();
        })
    })
}

let listActive = function(){
    list.classList.toggle('dropdown__list_active');
    pressButton();
}

value.addEventListener('click', listActive);