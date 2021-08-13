/***********************************************************
Thumbnail Maker v 1.2.1
Made by Wonkook Lee (oneook)
© All Rights Reserved
************************************************************/

"use strict"


// HTML2CANVAS API

const produceImageBtn = document.querySelector('#export');
const captureModal = document.querySelector('.capture_modal');
const mod = document.querySelectorAll('.mod');
const overlay = document.querySelector('.overlay');

const captureExport = function() {
  html2canvas(document.querySelector("#capture"), {
    logging: true,
    letterRendering: 1,
    allowTaint: true,
    useCORS: true
  }).then(canvas => {
    captureModal.appendChild(canvas).classList.add('canvas');
  });

  mod.forEach(e => e.classList.remove('hidden'));
};

const removeCapture = function() {
  captureModal.removeChild(captureModal.firstElementChild);

  mod.forEach(e => e.classList.add('hidden'));
};

produceImageBtn.addEventListener('click', captureExport);
overlay.addEventListener('click', removeCapture);
window.addEventListener('keydown', e => {
  if (e.key === "Escape") {
    removeCapture();
  };
});


// INPUT IMPLEMENTING

const inputFields = document.querySelectorAll('.input__field');

const updateInputValue = function(e) {
  const target = e.target.dataset.set;
  document.querySelector(`.${target}`).textContent = e.target.value;
};

inputFields.forEach(e => {
  e.addEventListener('input', updateInputValue);
});


// BACKGROUND GENERATORS
// RANDOM COLOR

/*
const randomint = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min;
*/

const randomSolidBtn = document.querySelector('.random__solid');
const randomGradientBtn = document.querySelector('.random__gradient');
const domBody = document.body;
const preview = document.querySelector('.preview');
const backgroundBtns = document.querySelector('#background__btn__container').children;
const componentsBtns = document.querySelectorAll('.component__opt');

const randomRGB = function() {
  let rgb = '';
  rgb += (Math.floor(Math.random() * 90 + 1)+150).toString(16).padStart(2, '0');
  rgb += (Math.floor(Math.random() * 90 + 1)+150).toString(16).padStart(2, '0');
  rgb += (Math.floor(Math.random() * 90 + 1)+150).toString(16).padStart(2, '0');
  return rgb;
}

const changeBackground = function() {
  const rgb = randomRGB();

  [...backgroundBtns].forEach(e => {
    e.classList.remove('selected');
  })
  randomSolidBtn.classList.add('selected');

  domBody.style.background = preview.style.background = ''
  domBody.style.backgroundColor = preview.style.backgroundColor = `#${rgb}`;
}

randomSolidBtn.addEventListener('click', changeBackground);

const changeGradient = function() {
  const rgb1 = randomRGB();
  const rgb2 = randomRGB();

  [...backgroundBtns].forEach(e => {
    e.classList.remove('selected');
  })
  randomGradientBtn.classList.add('selected');

  domBody.style.background = `linear-gradient(to bottom, #${rgb1}, #${rgb2})`;
  preview.style.background = `linear-gradient(to bottom, #${rgb1}, #${rgb2})`;
}

randomGradientBtn.addEventListener('click', changeGradient);



// COMPONENT LAYOUT

const composition = document.querySelector('.components');

const changeLayout = function(e) {
  const opt = e.target.dataset.set;
  document.querySelector('.components').id = opt;

  componentsBtns.forEach(e => {
    e.classList.remove('selected');
  });

  e.target.classList.add('selected');
}

componentsBtns.forEach(e => {
  e.addEventListener('click', changeLayout)
})



// IMAGE URL BACKGROUND

const imgBtn = document.querySelector('.img__url');

const imageBackground = function(e) {

  let imgUrl = prompt('이미지 주소를 입력하세요 😇');
  if (!imgUrl) {
    // alert('올바르지 않은 URL입니다 😨'); 사용자 개선 의견에 따라 주석 처리 08/12
    return;
  };

  domBody.style.background = preview.style.background = `url('${imgUrl}')`;
  domBody.style.backgroundSize = preview.style.backgroundSize = 'cover';
  domBody.style.backgroundRepeat = preview.style.backgroundRepeat = 'no-repeat';
  domBody.style.backgroundPosition = preview.style.backgroundPosition = 'center';

  [...backgroundBtns].forEach(e => {
    e.classList.remove('selected');
  })
  imgBtn.classList.add('selected');
}

imgBtn.addEventListener('click', imageBackground);



// TEXT STYLE FUNCTIONS

const prevTitle = document.querySelector('.title');
const prevSubtitle = document.querySelector('.subtitle');
const prevCategory = document.querySelector('.category');
const allBtns = document.querySelectorAll('.btn');
const initBtn = document.querySelector('#initialize');

const textstyleContainer = document.querySelector('.text__style');
const textShadowBtn = document.querySelector('.text__shadow');
const textInvertBtn = document.querySelector('.text__invert');
const textSizeBtn = document.querySelector('.text__size');
const textstyleBtns = document.querySelectorAll('.text__btn');
const renderTxt = document.querySelectorAll('.render');

textstyleBtns.forEach(e => {
  e.addEventListener('click', e => {
    const target = e.target;
    target.classList.toggle('selected')
  });
})

const textInvertFn = function(event) {
  renderTxt.forEach(e => {
    if (event.target.classList.contains('selected')) {
      e.style.color = 'black';
      prevSubtitle.style.borderTop = '1px solid #000000';
    } else {
      e.style.color = '#ffffff';
      prevSubtitle.style.borderTop = '1px solid #ffffff';
    }
  });
}

const textShadowFn = function(event) {
  renderTxt.forEach(e => {
    if (event.target.classList.contains('selected')) {
      e.style.textShadow = '2px 2px 4px rgba(0,0,0,0.4)'
    } else {
      e.style.textShadow = '';
    }
  })
}

const textSizeFn = function(event) {
  renderTxt.forEach(e => {
    if (event.target.classList.contains('selected')) {
      prevTitle.style.fontSize = '46px';
      prevSubtitle.style.fontSize = '22px';
      prevCategory.style.fontSize = '22px';
    } else {
      prevTitle.style.fontSize = '54px';
      prevSubtitle.style.fontSize = '24px';
      prevCategory.style.fontSize = '24px';
    }
  })
}

textInvertBtn.addEventListener('click', textInvertFn);
textShadowBtn.addEventListener('click', textShadowFn);
textSizeBtn.addEventListener('click', textSizeFn);

// INIT

// const prevTitle = document.querySelector('.title');
// const prevSubtitle = document.querySelector('.subtitle');
// const prevCategory = document.querySelector('.category');
// const allBtns = document.querySelectorAll('.btn');
// const initBtn = document.querySelector('#initialize');


const init = function() {
  domBody.style.background = 'url(https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80) center center / cover no-repeat';
  preview.style.background = 'url(https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80) center center / cover no-repeat';
  domBody.style.backgroundColor = preview.style.backgroundColor = '#78aaf9';
  prevTitle.textContent = '제목을 입력하세요';
  prevSubtitle.textContent = '부제목을 입력하세요';
  prevCategory.textContent = '분류를 입력하세요';

  allBtns.forEach(e => {
    e.classList.remove('selected');
  })

  inputFields.forEach(e => {
    e.value = '';
  });

  renderTxt.forEach(e => {
    e.style.textShadow = '';
    e.style.color = '#ffffff';
  })
  

  prevSubtitle.style.borderTop = '1px solid #ffffff';
  prevTitle.style.fontSize = '54px';
  prevSubtitle.style.fontSize = '24px';
  prevCategory.style.fontSize = '24px';
  

  componentsBtns[0].classList.add('selected');
  inputFields[0].focus();
  document.querySelector('.components').id = 'comp__opt1';
}

initBtn.addEventListener('click', init);


// INIT (AFTER LOAD)

init();

const msg = "%cWonkook Lee ⓒ oneook";
const css = "font-size: 2em; color: #FEDC45; background-color: #000;font-family: 'Noto Sans KR';";
console.log(msg, css);
