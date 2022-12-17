let videoBox = document.querySelector('.videoBox');
let btnVideo = document.querySelector('.btnVideo');
let closeBtn = document.querySelector('.closeBtn');
let header = document.querySelector('.header');
let iframeVideo = document.querySelector('.iframeVideo');
let closeBox = document.querySelector('.closeBox');
let cardEdu = document.querySelectorAll('.cardEdu');
let arrowImg = document.querySelectorAll('.arrow img');
let cursor = document.querySelector('.cursor');
let innerCursor = document.querySelector('.innerCursor');

document.addEventListener('mousemove', (e) => {
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.cssText = "left: " + x + "px; top: " + y + "px;";
  innerCursor.style.cssText = "left: " + x + "px; top: " + y + "px;";
})

document.addEventListener('mouseout', () => {
  cursor.style.display = "none";
  innerCursor.style.display = "none";
})

btnVideo.addEventListener('click', () => {
  videoBox.classList.remove('hideBox');
  if (iframeVideo.classList.contains('addVideo')) {
    iframeVideo.setAttribute('src', 'https://www.youtube.com/embed/IlVpkBf3McU');
  }
})

closeBtn.addEventListener('click', () => {
  closeVideo()
})

closeBox.addEventListener('click', () => {
  closeVideo()
})

function closeVideo() {
  videoBox.classList.add('hideBox');
  iframeVideo.removeAttribute('src');
  iframeVideo.classList.add('addVideo');
}

window.addEventListener('scroll', () => {
  if (scrollY > "10") {
    header.classList.add('headerScroll');
  } else {
    header.classList.remove('headerScroll');
  }
})

cardEdu.forEach((item, i) => {
  item.addEventListener('mouseenter', () => {
    arrowImg[i].setAttribute('src', '/ICONS/right-up-green.png');
    item.classList.add('whiteHover');

    if(item.classList.contains('whiteHover')) {
      cursor.classList.add('cursorWhite');
      innerCursor.classList.add('innerCursorWhite');
    }  
  });
  item.addEventListener('mouseleave', () => {
    arrowImg[i].setAttribute('src', '/ICONS/top-right.svg');
    item.classList.remove('whiteHover');

    if(!item.classList.contains('whiteHover')) {
      cursor.classList.remove('cursorWhite');
      innerCursor.classList.remove('innerCursorWhite');
    }
  });

})


