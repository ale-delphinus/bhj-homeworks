const book = document.querySelector('.book');
const fontSize = document.querySelectorAll('.font-size');

let changeSize = function() {
    fontSize.forEach(element => {
        element.addEventListener('click', (event) => {
            event.preventDefault();
            fontSize.forEach((element) => element.classList.remove("font-size_active"));
            element.classList.add('font-size_active');
            if(element.classList.contains('font-size_small')) {
                book.classList.add('book_fs-small');
                book.classList.remove('book_fs-big');
            } else if(element.classList.contains('font-size_big')) {
                book.classList.add('book_fs-big');
                book.classList.remove('book_fs-small');
            } else {
                book.classList.remove('book_fs-big');
                book.classList.remove('book_fs-small');
            }
        })
    })
}

changeSize();