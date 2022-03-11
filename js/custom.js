document.addEventListener('DOMContentLoaded', () => {
  console.log('loaded');
  let vh = window.innerHeight;
  let nav = document.querySelectorAll('nav li a');
  let button = document.querySelectorAll('ul.button li');
  let page = document.querySelectorAll('div.page');
  let img = document.querySelectorAll('div.gallery figure img');
  let popup = document.querySelector('div.popup');
  let popupImage = document.querySelector('div.popup img');
  let close = document.querySelector('div.popup a');
  let wrap = document.querySelector('#wrap');
  console.log(page);
  let navClassAdd = (i) => {
    for (let j = 0; j < nav.length; j++) {
      nav[j].classList.remove('on');
    }
    nav[i].classList.add('on');
  };
  let buttonClassAdd = (i) => {
    for (let j = 0; j < button.length; j++) {
      button[j].classList.remove('on');
    }
    button[i].classList.add('on');
  };
  let pageRemove = (i) => {
    for (let j = 0; j < page.length; j++) {
      page[j].style.left = '100%';
      page[j].style.animation = 'getOut 1s ease 0s';
    }

    let currImg = page[i].querySelector('img');
    let currDes = page[i].querySelector('div');
    console.log(currImg);
    page[i].style.animation = 'getIn 1s ease 0.5s';
    currDes.style.opacity = '1';

    let timeOut = setTimeout(() => (page[i].style.left = '0'), 600);
    timeOut;
  };
  wrap.addEventListener('scroll', () => {
    let scrollValue = wrap.scrollTop;
    // console.log(scrollValue);
    // console.log(wrap.scrollTop);
    for (let k = 0; k <= nav.length; k++) {
      if (scrollValue >= k * vh && scrollValue < (k + 1) * vh) {
        navClassAdd(k);
      }
    }
  });
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', () => {
      buttonClassAdd(i);
      pageRemove(i);
    });
  }
  for (let i = 0; i < img.length; i++) {
    img[i].addEventListener('click', () => {
      let src = img[i].getAttribute('src');
      popupImage.setAttribute('src', src);
      popup.style.display = 'block';
      popup.style.transition = 'all 0.2s ease';
      let timeOut = setTimeout(() => (popup.style.opacity = '1'), 1);
      timeOut;
    });
  }
  close.addEventListener('click', (e) => {
    e.preventDefault();
    popup.style.opacity = '0';
    let timeOut = setTimeout(() => (popup.style.display = 'none'), 300);
    timeOut;
  });
});
