let videoBox = document.querySelector('.videoBox');
let btnVideo = document.querySelector('.btnVideo');
let closeBtn = document.querySelector('.closeBtn');
let watchVideo = document.querySelector('.watchVideo');

btnVideo.addEventListener('click', () => {
  videoBox.classList.remove('hideBox');
})

closeBtn.addEventListener('click', () => {
  videoBox.classList.add('hideBox');
})

watchVideo.addEventListener('click', () => {
  if (window.getSelection) {
      window.getSelection().removeAllRanges();
    } else { 
      document.selection.empty();
    }
})