let allCourses = document.querySelector(".allCourses");

let courses = [
  {
    name: "Frontend",
    count: 2,
    img: ["/IMAGES/ecma.png"]
  },
  {
    name: "Android",
    count: 1,
    img: ["/IMAGES/ecma.png"]
  },
  {
    name: "Java Backend",
    count: 4,
    img: ["/IMAGES/ecma.png", "/IMAGES/pdp-academy-logo-dark.png"]
  },
  {
    name: "Flutter",
    count: 2,
    img: ["/IMAGES/pdp-academy-logo-dark.png"]
  },
  {
    name: "iOS",
    count: 1,
    img: ["/IMAGES/pdp-academy-logo-dark.png"]
  },
  {
    name: "Python Backend",
    count: 3,
    img: ["/IMAGES/superdispatch.png", "/IMAGES/ecma.png"]
  },
  {
    name: "Android App Development",
    count: 2,
    img: ["/IMAGES/pdp-academy-logo-dark.png"]
  },
  {
    name: ".NET Backend",
    count: 3,
    img: ["/IMAGES/ecma.png", "/IMAGES/pdp-academy-logo-dark.png"]
  }
]

let getCards = [];

console.log(courses);

courses.map((element, idx) => {
  const { name, count, img } = element
  let card = `
  <div class="courseCard">
  <div class="innerCard">
    <div class="headerInner">
      <h2>${name}</h2>
      <div class="arrow">
        <img id="changeSrc" src="/ICONS/top-right.svg" alt="404" class="arrowRight">
      </div>
    </div>

    <div class="footerInner">
      <div>
        <p>Kurslar Soni</p>
        <h3>${count} ta</h3>
      </div>

      <div class="imgCardBox">
      <img class="myLogo" src="${img[0]}" alt="404">
      ${img.length!==1 ? `<img class="myLogo" src=${img[1]} alt="404">`: ''}
      </div>
    </div>
  </div>
</div>
  `

  getCards.push(card);
});

allCourses.innerHTML = getCards.join(" ");

let cardsOfCourses = document.querySelectorAll(".courseCard");
let changeSrc = document.querySelectorAll("#changeSrc");

cardsOfCourses.forEach((item, index) => {
  item.addEventListener("mouseenter", () => {
    changeSrc[index].setAttribute('src', "/ICONS/right-up-white.png")
  })

  item.addEventListener("mouseleave", () => {
    changeSrc[index].setAttribute('src', "/ICONS/top-right.svg")
  })
})

let getImgs = document.querySelectorAll('.myLogo')
let deleteImg = document.querySelectorAll('.deleteImg')

// for (let i = 0; i < getImgs.length; i++) {
//   let src = getImgs[i].getAttribute('src');
//   console.log(')))))))))))))))))))   ', typeofsrc);
//   for (let j = i; j < deleteImg.length; j++) {
//     if (src[i] = 'undefind' && i == j) {
//       deleteImg[j].style.display = 'none'
//     }
//   }

  // console.log(src);
// }
