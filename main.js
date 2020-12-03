// screen 1 and 2
let blockMain = document.getElementsByClassName('main')[0], 
    bookLeft = document.getElementsByClassName('books-left')[0],
    booksRight = document.getElementsByClassName('books-right')[0],
    blockVideo = document.getElementsByClassName('video')[0];

bookLeft.addEventListener('click', ()=> start(bookLeft));
booksRight.addEventListener('click', ()=> start(booksRight));

function start(elem) {
    if (elem.classList.contains('begin')) {
        bookLeft.classList.add('none');
        booksRight.classList.add('none');
        blockMain.classList.remove('background-deck');
        blockMain.classList.add('story-screen3');
        blockVideo.classList.remove('none');
    }
    if (elem.classList.contains('start')) {
        elem.classList.remove('start');
        elem.classList.add('begin');
    }
}

//screen 3 
let btnNext = document.getElementsByClassName('next')[0],
    btnPlay = document.getElementsByClassName('play')[0],
    tableClose = document.getElementsByClassName('table_close')[0];

btnNext.addEventListener('click', ()=> {
    blockVideo.classList.add('none');
    blockMain.classList.remove('story-screen3');
    blockMain.classList.add('table-screen4');
    tableClose.classList.remove('none');
    tableClose.classList.add('flex');
});

//screen 4 and 5 
let book = document.getElementsByClassName('book')[0],
    blockBooks = document.getElementsByClassName('books')[0],
    tabeleOpen = document.getElementsByClassName('tabele_open')[0];

book.addEventListener('click', ()=> {
    tableClose.classList.add('none');
    tableClose.classList.remove('flex');
    blockBooks.classList.add('table-screen5');
    tabeleOpen.classList.remove('none');
    tabeleOpen.classList.add('flex');
    timer();
});

let text = document.getElementById('timer'),
    sec = document.getElementById('sec'),
    min = document.getElementById('min'),
    seconds = +sec.dataset.sec,
    minutes = +min.dataset.min,
    timerId; 

function addValue() {
    seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes == 60) {
            clearTimeout(timerId);
            return;
        }
    text.innerHTML = creatTime();
    timer();
}

function timer() {
    timerId = setTimeout(addValue, 1000);
}

function creatTime() {
    html = '<span id="min" data-min="' + minutes + '">' + (minutes ? (minutes > 9 ? minutes : '0' + minutes) : '00') + '</span>:<span id="sec" data-sec="' + seconds + '">' + (seconds ? (seconds > 9 ? seconds : '0' + seconds) : '00');
    return html;
 }
