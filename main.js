let blockQuestion_1 = document.querySelector('.question_1'),
    blockQuestion_2 = document.querySelector('.question_2'),
    blockQuestion_3 = document.querySelector('.question_3'),
    blockQuestion_4 = document.querySelector('.question_4'),
    blockQuestion_5 = document.querySelector('.question_5'),
    blockQuestion_6 = document.querySelector('.question_6'),
    blockQuestion_7 = document.querySelector('.question_7'),
    blockQuestion_8 = document.querySelector('.question_8'),
    blockEndQuestions = document.querySelector('.blockEndQuestions'),
    answerBlock_1 = document.querySelector(".answer"),
    answerBlock_2 = document.querySelector(".answer_2"),
    answerBlock_3 = document.querySelector(".answer_3"),
    answerBlock_4 = document.querySelector(".answer_4"),
    answerBlock_5 = document.querySelector(".answer_5"),
    answerBlock_6 = document.querySelector(".answer_6"),
    answerBlock_7 = document.querySelector(".answer_7"),
    answerBlock_8 = document.querySelector(".answer_8"),
    blockZoom = document.querySelector('.arm-block'),
    blockArm = document.querySelector('.arm'),
    close = document.querySelector('.close'),
    bookOpen = document.querySelector('.book_open'),
    tabeleOpen = document.querySelector('.tabele_open'),
    textTimer = document.getElementById('timer'),
    banana = document.querySelector('#banana'),
    timePlus = document.querySelector('#plusTime'),
    seconds = 0,
    timerId,
    endTime = document.getElementById('end-time');
    
timer();  

answerBlock_1.addEventListener('click', (event)=> {
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

        let timerIdBottom = setInterval(() => blockZoom.style.bottom = '0', 10);
        let timerId = setInterval(() => blockZoom.style.transform = 'rotate(0)', 20);
        setTimeout(() => { clearInterval(timerId);}, 800);
        setTimeout(() => { clearInterval(timerIdBottom);}, 800);
        blockArm.classList.toggle('none');
    }
});

answerBlock_2.addEventListener('click', (event)=> addActiveClass(event));
answerBlock_3.addEventListener('click', (event)=> addActiveClass(event));
answerBlock_4.addEventListener('click', (event)=> addActiveClass(event));
answerBlock_5.addEventListener('click', (event)=> addActiveClass(event));
answerBlock_6.addEventListener('click', (event)=> addActiveClass(event));
answerBlock_7.addEventListener('click', (event)=> addActiveClass(event));
answerBlock_8.addEventListener('click', (event)=> addActiveClass(event));


function addActiveClass(event) {
    let target = event.target;

    if ( target.classList.contains('answer-item') ) {
        let children = target.childNodes,
            number = children[1];

        number.classList.toggle('answer_number_active');
        target.classList.toggle('active');
    }
    if ( target.classList.contains('answer-text') ) {
        let parent = target.parentNode,
            children = parent.childNodes,
            number = children[1];

        number.classList.toggle('answer_number_active');
        parent.classList.toggle('active');
    }
}    
 
close.addEventListener('click', ()=> {
    let timerIdBottom = setInterval(() => blockZoom.style.bottom = '-650px', 10);
    let timerId = setInterval(() => blockZoom.style.transform = 'rotate(-90deg)', 10);
    setTimeout(() => { clearInterval(timerId);}, 800);
    setTimeout(() => { clearInterval(timerIdBottom);}, 900);
    setTimeout(()=> blockArm.classList.toggle('none'), 500);
});


bookOpen.addEventListener('click', (event)=> {
    let target = event.target;
    if (target.classList.contains('help-mark')) {

        let parent = target.parentNode,
            videoBlock = parent.nextElementSibling,
            parentParent = parent.parentNode,
            partRight = parentParent.childNodes[3],
            videoBg = videoBlock.nextElementSibling,
            helpClose = target.nextElementSibling,
            key = target.dataset.key,
            video = document.getElementById(key);
         
        parent.classList.add('help-active');
        setTimeout(()=> videoBlock.classList.add('opacity'), 300);
        setTimeout(()=> partRight.classList.add('help_video'),300);
        setTimeout(()=> helpClose.classList.add('opacity'), 200);
        setTimeout(()=> videoBg.classList.add('opacity'), 200);
        setTimeout(()=> video.play(), 400);
    }

    if (target.classList.contains('help-close')) {

        let parent = target.parentNode,
            videoBlock = parent.nextElementSibling,
            parentParent = parent.parentNode,
            partRight = parentParent.childNodes[3],
            key = target.dataset.key,
            videoBg = videoBlock.nextElementSibling,
            video = document.getElementById(key);

        parent.classList.remove('help-active');
        parent.classList.add('bg-help');
        video.pause();
        video.currentTime = '0';
        target.classList.remove('opacity');
        setTimeout(()=> videoBg.classList.remove('opacity'), 100);
        setTimeout(()=> videoBlock.classList.remove('opacity'), 100);
        setTimeout(()=> partRight.classList.remove('help_video'),200);
    }
})

let btnAnswer_1 = document.querySelector('.answer-btn-question_1'),
    btnAnswer_2 = document.querySelector('.answer-btn-question_2'),
    btnAnswer_3 = document.querySelector('.answer-btn-question_3'),
    btnAnswer_4 = document.querySelector('.answer-btn-question_4'),
    btnAnswer_5 = document.querySelector('.answer-btn-question_5'),
    btnAnswer_6 = document.querySelector('.answer-btn-question_6'),
    btnAnswer_7 = document.querySelector('.answer-btn-question_7'),
    btnAnswer_8 = document.querySelector('.answer-btn-question_8');


btnAnswer_1.addEventListener('click', (event)=> {
    let target = event.target,
        parentTarget = target.parentNode,
        spanBtnAnswer = parentTarget.querySelector('#answer'),
        dataAtt = target.dataset.btn;

    if (dataAtt == 'answer') {
        checkItemAnswer(btnAnswer_1,spanBtnAnswer);
    }
    if (dataAtt == 'next') {
        showNextPage(blockQuestion_1,blockQuestion_2);
    }
})

btnAnswer_2.addEventListener('click', (event)=> {
    let target = event.target,
        parentTarget = target.parentNode,
        spanBtnAnswer = parentTarget.querySelector('#answer_2'),
        dataAtt = target.dataset.btn;

    if (dataAtt == 'answer') {
        checkItemAnswer(btnAnswer_2,spanBtnAnswer);
        console.log(btnAnswer_2)
    }
    if (dataAtt == 'next') {
        showNextPage(blockQuestion_2,blockQuestion_3);
    }
})

btnAnswer_3.addEventListener('click', (event)=> {
    let target = event.target,
        parentTarget = target.parentNode,
        spanBtnAnswer = parentTarget.querySelector('#answer_3'),
        dataAtt = target.dataset.btn;

    if (dataAtt == 'answer') {
        checkItemAnswer(btnAnswer_3,spanBtnAnswer);
        console.log(btnAnswer_3)
    }
    if (dataAtt == 'next') {
        showNextPage(blockQuestion_3,blockQuestion_4);
    }
})

btnAnswer_4.addEventListener('click', (event)=> {
    let target = event.target,
        parentTarget = target.parentNode,
        spanBtnAnswer = parentTarget.querySelector('#answer_4'),
        dataAtt = target.dataset.btn;

    if (dataAtt == 'answer') {
        checkItemAnswer(btnAnswer_4,spanBtnAnswer);
    }
    if (dataAtt == 'next') {
        showNextPage(blockQuestion_4,blockQuestion_5);
    }
})

btnAnswer_5.addEventListener('click', (event)=> {
    let target = event.target,
        parentTarget = target.parentNode,
        spanBtnAnswer = parentTarget.querySelector('#answer_5'),
        dataAtt = target.dataset.btn;

    if (dataAtt == 'answer') {
        checkItemAnswer(btnAnswer_5,spanBtnAnswer);
    }
    if (dataAtt == 'next') {
        showNextPage(blockQuestion_5,blockQuestion_6);
    }
})

btnAnswer_6.addEventListener('click', (event)=> {
    let target = event.target,
        parentTarget = target.parentNode,
        spanBtnAnswer = parentTarget.querySelector('#answer_6'),
        dataAtt = target.dataset.btn;

    if (dataAtt == 'answer') {
        checkItemAnswer(btnAnswer_6,spanBtnAnswer);
    }
    if (dataAtt == 'next') {
        showNextPage(blockQuestion_6,blockQuestion_7);
    }
})

btnAnswer_7.addEventListener('click', (event)=> {
    let target = event.target,
        parentTarget = target.parentNode,
        spanBtnAnswer = parentTarget.querySelector('#answer_7'),
        dataAtt = target.dataset.btn;

    if (dataAtt == 'answer') {
        checkItemAnswer(btnAnswer_7,spanBtnAnswer);
    }
    if (dataAtt == 'next') {
        showNextPage(blockQuestion_7,blockQuestion_8);
    }
})

btnAnswer_8.addEventListener('click', (event)=> {
    let target = event.target,
        parentTarget = target.parentNode,
        spanBtnAnswer = parentTarget.querySelector('#answer_8'),
        dataAtt = target.dataset.btn;

    if (dataAtt == 'answer') {
        checkItemAnswer(btnAnswer_8,spanBtnAnswer);
    }
    if (dataAtt == 'next') {
        showNextPage(bookOpen,blockEndQuestions);
        blockZoom.classList.add('none');
        blockEndQuestions.classList.remove('none');
        tabeleOpen.classList.add('none');
        endTime.innerHTML = creatTime();
    }
})


function checkItemAnswer(btn,spanBtnAnswer) {
    let parent = btn.parentNode,
        blockItems = parent.querySelector('.answer-items'), 
        blocksActive = blockItems.getElementsByClassName('answer-item'),
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

    if (result == true) {
        banana.style.background = 'url(./images/deck/screen_5/question_monkey_yes.png) no-repeat';
        setTimeout(()=> banana.style.background = 'url(./images/deck/screen_5/question_monkey_d.png) no-repeat', 1000);
        
        let spanBtnNext = parent.querySelector('.goToNextQuestion');
        spanBtnAnswer.classList.add('none');
        spanBtnNext.classList.remove('none');
    } else {
        timePlus.classList.add('time_plus');
        timePlus.classList.add('opacity');
        setTimeout(()=> timePlus.classList.remove('opacity'), 1000);
        setTimeout(()=> timePlus.classList.remove('time_plus'), 2000);
        banana.style.background = 'url(./images/deck/screen_5/question_monkey_no.png) no-repeat';
        setTimeout(()=> banana.style.background = 'url(./images/deck/screen_5/banana-wait-2-x@2x.png) no-repeat', 1000);
        setTimeout(()=> banana.style.background = 'url(./images/deck/screen_5/question_monkey_again.png) no-repeat', 2000);
        setTimeout(()=> banana.style.background = 'url(./images/deck/screen_5/question_monkey_d.png) no-repeat', 3000);
        plusTime()
    }
}

function showNextPage(prevBlock, nextBlock) {
    setTimeout(()=> prevBlock.classList.add('none'), 100);
    setTimeout(()=> nextBlock.classList.remove('none'), 200);
}

//timer
let min = document.getElementById('min'),
minutes = +min.dataset.min;

function plusTime() {
    minutes = +min.dataset.min;
    min.innerHTML = minutes + 2;
    min.dataset.min = minutes + 2;
    minutes = minutes + 2;
}

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
    textTimer.innerHTML = creatTime();
    timer();
}

function timer() {
    timerId = setTimeout(addValue, 1000);
}

function creatTime() {
    html = '<span id="min" data-min="' + minutes + '">' + (minutes ? (minutes > 9 ? minutes : '0' + minutes) : '00') + '</span>:<span id="sec" data-sec="' + seconds + '">' + (seconds ? (seconds > 9 ? seconds : '0' + seconds) : '00');
    return html;
}

