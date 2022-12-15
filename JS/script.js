let videoBox = document.querySelector('.videoBox');
let btnVideo = document.querySelector('.btnVideo');
let closeBtn = document.querySelector('.closeBtn');
let header = document.querySelector('.header');
let iframeVideo = document.querySelector('.iframeVideo');
let closeBox = document.querySelector('.closeBox');

btnVideo.addEventListener('click', () => {
  videoBox.classList.remove('hideBox');
  if(iframeVideo.classList.contains('addVideo')) {
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
  if(scrollY == "20") {
    header.classList.add('headerScroll');
    console.log(scrollY);
  }
})