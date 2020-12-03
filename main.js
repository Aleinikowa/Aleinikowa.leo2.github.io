//screen 5 
let bookClose = document.getElementsByClassName('book_close_bg')[0],
    tableClose = document.getElementsByClassName('table_close')[0],
    blockBooks = document.getElementsByClassName('books')[0],
    page = document.getElementById('page'),
    pageRight = document.getElementById('pageRight'),
    backPortal = document.getElementsByClassName('back-portal')[0],
    tabeleOpen = document.getElementsByClassName('tabele_open')[0],
    blockQuestion_1 = document.querySelector('.question_1'),
    blockQuestion_2 = document.querySelector('.question_2');

bookClose.addEventListener('click', ()=> {
    
    setTimeout(()=> bookClose.classList.add('book-play'), 100);
    setTimeout(()=> bookClose.classList.add('book-opasity'), 200);

    setTimeout(()=> page.classList.remove('none'), 700);
    setTimeout(()=> pageRight.classList.remove('none'), 200);

    setTimeout(()=> page.style.left = '554px', 100);


    setTimeout(()=> page.classList.add('page-play'), 100);
    // setTimeout(()=> page.classList.add('transparent'), 400);

    // setTimeout(()=> backPortal.classList.add('opacity'), 1000);



    setTimeout(()=> tableClose.classList.add('none'), 500);

    setTimeout(()=> tabeleOpen.classList.remove('none'), 500);
    setTimeout(()=> tabeleOpen.classList.add('flex'), 500);

    setTimeout(()=> blockQuestion_1.classList.add('opacity'), 700);


    setTimeout(()=> page.classList.remove('page-play'), 1300);


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
    partRight = document.querySelector('.book_open'),
    helpMark = document.querySelector('.help-mark'),
    help = document.querySelector('.help');
    t = 0;

    // partRight.addEventListener('click', (event)=> {
    //     let target = event.target;
    //     console.log(target)
    //     if (target.classList.contains('help-mark')) {
    //         help.classList.add('help-active');
    //         helpMark.classList.add('help-mark-active');
    //     }
// })    
    

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


    blockQuestion_1.classList.add('none');
    page.style.zIndex = '10';
    page.classList.remove('page-play');
    showNextPage();

});


function showNextPage() {
    setTimeout(()=> page.classList.add('page-play'), 100);
    setTimeout(()=> page.style.left = '578px', 100);

    setTimeout(()=> page.style.zIndex = '0', 100);

    // setTimeout(()=> page.classList.add('transparent'), 1000);
    setTimeout(()=> blockQuestion_2.classList.add('opacity'), 900);
    setTimeout(()=> blockQuestion_2.classList.remove('none'), 900);
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
