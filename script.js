const list = document.querySelectorAll('.item');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

var count = list.length;
var active = 0;

next.onclick = () => {
    let activeOld = document.querySelector('.active');
    activeOld.classList.remove('active');

    active = active >= count - 1 ? 0 : active + 1;
    list[active].classList.add('active');
}

prev.onclick = () => {
    let activeOld = document.querySelector('.active');
    activeOld.classList.remove('active');

    active = active <= 0 ? count - 1 : active - 1;
    list[active].classList.add('active');
}