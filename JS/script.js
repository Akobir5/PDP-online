let videoBox = document.querySelector('.videoBox');
let btnVideo = document.querySelector('.btnVideo');
let closeBtn = document.querySelector('.closeBtn');
let header = document.querySelector('.header');
let iframeVideo = document.querySelector('.iframeVideo');
let closeBox = document.querySelector('.closeBox');
let cardEdu = document.querySelectorAll('.cardEdu');
let arrowImg = document.querySelectorAll('.arrow img')

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
  if (scrollY > "5") {
    header.classList.add('headerScroll');
  } else {
    header.classList.remove('headerScroll');
  }
})

cardEdu.forEach((item, i) => {
  item.addEventListener('mouseenter', () => {
    arrowImg[i].setAttribute('src', '/ICONS/right-up-green.png');
    console.log("Hover")
  });
  item.addEventListener('mouseleave', () => {
    arrowImg[i].setAttribute('src', '/ICONS/top-right.svg');
    console.log("Hover")
  });
})

console.log(arrowImg)