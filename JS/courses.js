let allCourses = document.querySelector(".allCourses");

let courses = [
  {
    name: "Frontend",
    count: 2,
    img: "/IMAGES/ecma.png"
  },
  {
    name: "Android",
    count: 1,
    img: "/IMAGES/ecma.png"
  },
  {
    name: "Java Backend",
    count: 4,
    img: "/IMAGES/pdp-academy-logo-dark.png"
  },
  {
    name: "Flutter",
    count: 2,
    img: "/IMAGES/pdp-academy-logo-dark.png"
  },
  {
    name: "iOS",
    count: 1,
    img: "/IMAGES/pdp-academy-logo-dark.png"
  },
  {
    name: "Python Backend",
    count: 3,
    img: "/IMAGES/superdispatch.png"
  },
  {
    name: "Android App Development",
    count: 2,
    img: "/IMAGES/pdp-academy-logo-dark.png"
  },
  {
    name: ".NET Backend",
    count: 3,
    img: "/IMAGES/ecma.png"
  }
]

let getCards = [];

courses.map((element) => {
  let card =  `
  <div class="courseCard">
  <div class="innerCard">
    <div class="headerInner">
      <h2>${element.name}</h2>
      <div class="arrow">
        <img src="/ICONS/top-right.svg" alt="404" class="arrowRight">
      </div>
    </div>

    <div class="footerInner">
      <div>
        <p>Kurslar Soni</p>
        <h3>${element.count} ta</h3>
      </div>

      <img src="${element.img}" alt="404">
    </div>
  </div>
</div>
  `
getCards.push(card);

// allCourses.appendChild(card)
})

console.log(getCards)

