let videoBox = document.querySelector('.videoBox');
let btnVideo = document.querySelector('.btnVideo');
let closeBtn = document.querySelector('.closeBtn');
let header = document.querySelector('.header');
let iframeVideo = document.querySelector('.iframeVideo');

btnVideo.addEventListener('click', () => {
  videoBox.classList.remove('hideBox');
  // videoBox.classList.add('show');
  if(iframeVideo.classList.contains('addVideo')) {
    iframeVideo.setAttribute('src', 'https://www.youtube.com/embed/IlVpkBf3McU');
  }
})

closeBtn.addEventListener('click', () => {
  videoBox.classList.add('hideBox');
  iframeVideo.removeAttribute('src');
  iframeVideo.classList.add('addVideo');
})

// window.addEventListener('click', ({ target }) => {
//   const popup = target.closest('.videoBox');
//   const clickedOnClosedPopup = popup && !popup.classList.contains('show');
  
//   popup.classList.remove('show');
  
//   if (clickedOnClosedPopup) popup.classList.add('show');  
// });

window.addEventListener('scroll', () => {
  if(scrollY == "20") {
    header.classList.add('headerScroll');
    console.log(scrollY);
  }
})