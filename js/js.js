let array = window.location.href.split('/');
let y = array[array.length - 1];
[...document.getElementsByClassName('menuItems')].forEach(i => {
    i.classList.remove('active')
})
if (y === 'index.html') {
    if (document.getElementsByClassName('home')[0].classList.add('active')) {

    }
} else if (y === 'resume.html') {
    if (document.getElementsByClassName('resume')[0].classList.add('active')) {

    }
} else if (y === 'contacts.html') {
    if (document.getElementsByClassName('contacts')[0].classList.add('active')) {

    }
} else if (y === 'links.html') {
    if (document.getElementsByClassName('links')[0].classList.add('active')) {

    }
} else if (y === 'tetris-JS.html') {
    if (document.getElementsByClassName('tetris')[0].classList.add('active')) {

    }
} else if (y === 'snake-1.html') {
    if (document.getElementsByClassName('snake-1')[0].classList.add('active')) {

    }
} else if (y === 'snake-2.html') {
    if (document.getElementsByClassName('snake-2')[0].classList.add('active')) {

    }
}


