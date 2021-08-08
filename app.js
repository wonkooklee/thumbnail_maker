/***********************************************************
Thumbnail Maker v 1.1.1
Made by Wonkook Lee (oneook)
© All Rights Reserved
************************************************************/


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
    alert('올바르지 않은 URL입니다 😨');
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



// INIT

const prevTitle = document.querySelector('.title');
const prevSubtitle = document.querySelector('.subtitle');
const prevCategory = document.querySelector('.category');

const initBtn = document.querySelector('#initialize');


const init = function() {
  domBody.style.background = preview.style.background = '';
  domBody.style.backgroundColor = preview.style.backgroundColor = '#78aaf9';
  prevTitle.textContent = '제목을 입력하세요';
  prevSubtitle.textContent = '부제목을 입력하세요';
  prevCategory.textContent = '분류를 입력하세요';

  [...backgroundBtns].forEach(e => {
    e.classList.remove('selected');
  })

  inputFields.forEach(e => {
    e.value = '';
  });

  componentsBtns.forEach(e => {
    e.classList.remove('selected');
  });

  componentsBtns[0].classList.add('selected');

  inputFields[0].focus();

  document.querySelector('.components').id = 'comp__opt1';
}

initBtn.addEventListener('click', init);


// INIT (AFTER LOAD)

init();