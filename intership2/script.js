const swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 30,
  //loop: true,
  scroll: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    //draggable: true,
    //hide: true,
  },
});

const swiperServices = new Swiper(".swiper-services", {
  navigation: {
    nextEl: ".swiper-button-next__services",
    prevEl: ".swiper-button-prev__services",
  },
  slidesPerView: "auto",
  slidesPerGroup: 1,
  spaceBetween: 10,
  //loop: true,
  scroll: true,
  scrollbar: {
    el: ".swiper-scrollbar__services",
    //draggable: true,
    //hide: true,
  },
});

const swiperButtons = new Swiper(".swiper-products__buttons", {
  scroll: true,
});
const swiperProducts = new Swiper(".swiper-products", {
  navigation: {
    nextEl: ".swiper-button-next__products",
    prevEl: ".swiper-button-prev__products",
  },
  slidesPerView: "auto",
  //slidesPerGroup: 1,
  spaceBetween: 10,
  //loop: true,
  scroll: true,
  scrollbar: {
    el: ".swiper-scrollbar__products",
    draggable: true,
    //hide: true,
  },
});
const swiperBlog = new Swiper(".swiper-blog", {
  navigation: {
    nextEl: ".swiper-button-next__blog",
    prevEl: ".swiper-button-prev__blog",
  },
  slidesPerView: "auto",
  //slidesPerGroup: 1,
  spaceBetween: 10,
  //loop: true,
  scroll: true,
  scrollbar: {
    el: ".swiper-scrollbar__blog",
    draggable: true,
    //hide: true,
  },
});
let hamb = document.querySelector("#hamb");
let burger_catalog = document.querySelector(".burger-catalog");
let arrow = document.querySelector(".arrow");
hamb.addEventListener("click", function () {
  burger_catalog.style.display = "flex";
});

const popup = document.querySelector(".popup");
arrow.addEventListener("click", function () {
  arrow.classList.toggle("close");
  if (arrow.classList.contains("close")) {
    popup.classList.add("close-win");
  } else {
    popup.classList.remove("close-win");
  }
});

const menu = document.querySelector(".menu__list").cloneNode(1);
const body = document.body;
const bar = document.querySelectorAll(".bar");
const menuBurger = document.querySelector(".menu__burger-icon");
hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  hamb.classList.toggle("active");
  if (hamb.classList.contains("active")) {
    console.log("11111");
    bar.forEach((item) => (item.style.background = "#192040"));
  } else {
    bar.forEach((item) => (item.style.background = "#151e27"));
    burger_catalog.style.display = "none";
  }

  body.classList.toggle("noscroll");
  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку

const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  body.classList.remove("noscroll");
}
let btns = document.querySelectorAll(".products__buttons-container");
btns.forEach((btn) => {
  btn.addEventListener("mouseover", (event) => {
    btn.classList.add("red-btn");
  });
  btn.addEventListener("mouseout", (event) => {
    btn.classList.remove("red-btn");
  });
});

let slides = document.querySelectorAll(".swiper-slide__products");
let container = document.querySelector(".buy-container");

slides.forEach((slide) => {
  let temp = slide.querySelector(".modal");
  let container = slide.querySelector(".buy-container");

  slide.addEventListener("mouseover", (event) => {
    temp.classList.add("modal__flex");

    if (temp.classList.contains("modal__flex")) {
      slide.style.background = "#FAF8F5";
      slide.style.borderLeft = "1px solid #fff";
      slide.style.borderRight = "1px solid #fff";
      slide.style.borderRadius = "0px";
      container.style.background = "#FAF8F5";
      container.style.border = "1px solid #fff";
      container.style.borderTop = "none";
      container.style.borderBottomRightRadius = "30px";
      container.style.borderBottomLeftRadius = "30px";
      container.style.height = "180px";
    }
  });
  slide.addEventListener("mouseout", (event) => {
    temp.classList.remove("modal__flex");
    slide.style.background = "#fff";
    slide.style.borderLeft = "none";
    slide.style.borderRight = "none";
    slide.style.borderRadius = "30px";
    container.style.background = "white";
    container.style.border = "none";
    container.style.height = "87px";
  });
});

const use1 = new Swiper(".swiper-place-1", {
  navigation: {
    nextEl: ".swiper-button-next__use1",
    prevEl: ".swiper-button-prev__use1",
  },
  slidesPerView: "auto",
  //slidesPerGroup: 1,
  spaceBetween: 10,
  //loop: true,
  scroll: true,
  scrollbar: {
    el: ".swiper-scrollbar__blog",
    draggable: true,
    //hide: true,
  },
});
let swUse = document.querySelector(".use__slide");
let searchUse = document.querySelector(".swiper-place-1 .search-use");
swUse.addEventListener("mouseover", () => {
  swUse.style.opacity = "0.5";
  searchUse.style.display = "block";
});
swUse.addEventListener("mouseout", () => {
  swUse.style.opacity = "1";
  searchUse.style.display = "none";
});
let swUse3 = document.querySelector(".swiper-place-3 .use__slide");
let searchUse3 = document.querySelector(".swiper-place-3 .search-use");
swUse3.addEventListener("mouseover", () => {
  swUse3.style.opacity = "0.5";
  searchUse3.style.display = "block";
});
swUse3.addEventListener("mouseout", () => {
  swUse3.style.opacity = "1";
  searchUse3.style.display = "none";
});
let swUse2 = document.querySelector(".swiper-place-2 .use__slide");
let searchUse2 = document.querySelector(".swiper-place-2 .search-use");
swUse2.addEventListener("mouseover", () => {
  swUse2.style.opacity = "0.5";
  searchUse2.style.display = "block";
});
swUse2.addEventListener("mouseout", () => {
  swUse2.style.opacity = "1";
  searchUse2.style.display = "none";
});
let swUse4 = document.querySelector(".swiper-place-4 .use__slide");
let searchUse4 = document.querySelector(".swiper-place-4 .search-use");
swUse4.addEventListener("mouseover", () => {
  swUse4.style.opacity = "0.5";
  searchUse4.style.display = "block";
});
swUse4.addEventListener("mouseout", () => {
  swUse4.style.opacity = "1";
  searchUse4.style.display = "none";
});
const use2 = new Swiper(".swiper-place-2", {
  navigation: {
    nextEl: ".swiper-button-next__use2",
    prevEl: ".swiper-button-prev__use2",
  },
  slidesPerView: "auto",
  //slidesPerGroup: 1,
  spaceBetween: 10,
  //loop: true,
  scroll: true,
  scrollbar: {
    el: ".swiper-scrollbar__blog",
    draggable: true,
    //hide: true,
  },
});

const use3 = new Swiper(".swiper-place-3", {
  navigation: {
    nextEl: ".swiper-button-next__use3",
    prevEl: ".swiper-button-prev__use3",
  },
  slidesPerView: "auto",
  //slidesPerGroup: 1,
  spaceBetween: 10,
  //loop: true,
  scroll: true,
  scrollbar: {
    el: ".swiper-scrollbar__blog",
    draggable: true,
    //hide: true,
  },
});

const use4 = new Swiper(".swiper-place-4", {
  navigation: {
    nextEl: ".swiper-button-next__use4",
    prevEl: ".swiper-button-prev__use4",
  },
  slidesPerView: "auto",
  //slidesPerGroup: 1,
  spaceBetween: 10,
  //loop: true,
  scroll: true,
  scrollbar: {
    el: ".swiper-scrollbar__blog",
    draggable: true,
    //hide: true,
  },
});
