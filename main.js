//screen 5 
let bookClose = document.getElementsByClassName('book_close')[0],
    tableClose = document.getElementsByClassName('table_close')[0],
    blockBooks = document.getElementsByClassName('books')[0],
    page = document.getElementById('page'),
    tabeleOpen = document.getElementsByClassName('tabele_open')[0];

bookClose.addEventListener('click', ()=> {
    
    setTimeout(()=> bookClose.classList.add('book-play'), 100);
    setTimeout(()=> bookClose.classList.add('width'), 300);

    page.classList.remove('none');
    setTimeout(()=> page.classList.add('play2'), 400);
    // setTimeout(()=> page.classList.add('none'), 1000);

    setTimeout(()=> tableClose.classList.add('none'), 700);
    setTimeout(()=> blockBooks.classList.add('table-screen5'), 800);
    setTimeout(()=> tabeleOpen.classList.add('scale'), 1000);
    setTimeout(()=> tabeleOpen.classList.remove('none'), 1000);
    setTimeout(()=> tabeleOpen.classList.add('flex'), 1100);



    // tableClose.classList.add('none');
    // blockBooks.classList.add('table-screen5');
    // tabeleOpen.classList.remove('none');
    // tabeleOpen.classList.add('flex');
    timer();
});

//item-image page 1

let answerBlock = document.querySelector(".answer"),
    blockZoom = document.querySelector('.arm-block'),
    blockArm = document.querySelector('.arm'),
    close = document.querySelector('.close'),
    t = 0;

answerBlock.addEventListener('click', (event)=> {
    let target = event.target;
       
    if (target.classList.contains('answer-choose')) {
        let parent = target.parentNode,
            parentParent = parent.parentNode,
            rama = parent.nextElementSibling,
            number = rama.nextElementSibling;

        parentParent.classList.toggle('active');
        rama.classList.toggle('opacity');
        number.classList.toggle('answer_number_active');
    }
    if (target.classList.contains('answer-zoom')) {
        let parent = target.parentNode,
            keyBackg = parent.dataset.backg,
            hendImg = document.querySelector('.hand-img');

        hendImg.style.background = `url(./images/deck/arm/backg/${keyBackg}.png) no-repeat`;
        console.log();

        let timerIdBottom = setInterval(() => blockZoom.style.bottom = '0', 10);
        let timerId = setInterval(() => blockZoom.style.transform = 'rotate(0)', 20);
        setTimeout(() => { clearInterval(timerId);}, 800);
        setTimeout(() => { clearInterval(timerIdBottom);}, 800);
        blockArm.classList.toggle('none');
    }
});

close.addEventListener('click', ()=> {
    let timerIdBottom = setInterval(() => blockZoom.style.bottom = '-650px', 10);
    let timerId = setInterval(() => blockZoom.style.transform = 'rotate(-90deg)', 10);
    setTimeout(() => { clearInterval(timerId);}, 800);
    setTimeout(() => { clearInterval(timerIdBottom);}, 900);
    setTimeout(()=> blockArm.classList.toggle('none'), 500);
});


//btn next page 1
let btnAnswer = document.querySelector('.answer-btn-question_1'),
    prarent = btnAnswer.parentNode,
    blockQuestion_1 = document.querySelector('.question_1'),
    blockQuestion_2 = document.querySelector('.question_2'),
    spanBtnAnswer = document.getElementById('answer'),
    spanBtnNext = document.getElementById('next');

spanBtnAnswer.addEventListener ('click', ()=> {
        let blocksActive = prarent.getElementsByClassName('answer-item'),
        arrAnswer = [];

    for (let i = 0; i < blocksActive.length; i++) {
        const element = blocksActive[i];

        if (element.classList.contains('active')) {
            if (element.classList.contains('correct')) {
                arrAnswer.push(true);
            } 
            if (!(element.classList.contains('correct'))) {
                arrAnswer.push(false);
            } 
        }
        if ( element.classList.contains('correct') && (!(element.classList.contains('active'))) ) {
            arrAnswer.push(false);
        }
    }

    function isCorrect(element) {
        return element == true;
    }

    let result = arrAnswer.every(isCorrect);
    checkAnswer();

    function checkAnswer() {
        let banana = document.querySelector('.banana');
        if (result == true) {
            banana.style.background = 'url(./images/deck/screen_5/question_monkey_yes.png) no-repeat';
            spanBtnAnswer.classList.add('none');
            spanBtnNext.classList.remove('none');
            plusTime(t);
        } else {
            t = 2;
            plusTime(t);
            banana.style.background = 'url(./images/deck/screen_5/question_monkey_no.png) no-repeat';
            setTimeout(()=> banana.style.background = 'url(./images/deck/screen_5/banana-wait-2-x@2x.png) no-repeat', 1000);
            setTimeout(()=> banana.style.background = 'url(./images/deck/screen_5/question_monkey_again.png) no-repeat', 2000);
            setTimeout(()=> banana.style.background = 'url(./images/deck/screen_5/question_monkey_d.png) no-repeat', 3000);
        }
    }
})

spanBtnNext.addEventListener ('click', ()=> {

    showNextPage();

    blockQuestion_2.classList.remove('none');
    // page.classList.remove('none');

});


function showNextPage() {
    // page.classList.add('none');
    page.classList.remove('play2');
    page.classList.add('play1');
    setTimeout(()=> blockQuestion_1.classList.add('none'), 100);

    setTimeout(()=> page.classList.add('play2'), 200);
    

    page.classList.remove('none');

}

//item-image page 2


//timer

let text = document.getElementById('timer'),
    sec = document.getElementById('sec'),
    min = document.getElementById('min'),
    seconds = +sec.dataset.sec,
    minutes = +min.dataset.min,
    // minutes = plusTime(),
    // plus = +text.dataset.plus,
    timerId; 

    console.log(minutes);

function addValue() {
    seconds++;
        if (seconds >= 60) {
            seconds = 0;
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

// plusTime(0);
function plusTime(t) {
    // let  min = document.getElementById('min'),
    //     data = min.dataset.min;
    //     min.innerHTML= '3'
    // console.log(data)
    return t;

}
