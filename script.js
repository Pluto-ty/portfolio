document.querySelector("#js-home").addEventListener("wheel", (event) => {
   // alert("test");
   let buttons = document.querySelectorAll(".c-button-nav-pages");
   let pages = document.querySelector("#js-pages-container");
   if (event.deltaY > 0) {
      pages.scrollBy(0, 700);

      if (buttons[0].classList.contains("u-current-page")) {
         buttons[0].classList.toggle("u-current-page");
         buttons[1].classList.toggle("u-current-page");
      } else if (buttons[1].classList.contains("u-current-page")) {
         buttons[1].classList.toggle("u-current-page");
         buttons[2].classList.toggle("u-current-page");
      }
   } else {
      pages.scrollBy(0, -700);
      if (buttons[2].classList.contains("u-current-page")) {
         buttons[2].classList.toggle("u-current-page");
         buttons[1].classList.toggle("u-current-page");
      } else if (buttons[1].classList.contains("u-current-page")) {
         buttons[1].classList.toggle("u-current-page");
         buttons[0].classList.toggle("u-current-page");
      }
   }
});

document
   .querySelector("#js-projects-nav")
   .addEventListener("wheel", (event) => {
      let projects = document.querySelector("#js-projects-container");
      let buttons = document.querySelectorAll(".c-button-projects-pages");
      if (event.deltaY > 0) {
         projects.scrollBy(0, 700);
         if (buttons[0].classList.contains("u-current-page")) {
            buttons[0].classList.toggle("u-current-page");
            buttons[1].classList.toggle("u-current-page");
         } else if (buttons[1].classList.contains("u-current-page")) {
            buttons[1].classList.toggle("u-current-page");
            buttons[2].classList.toggle("u-current-page");
         }
      } else {
         projects.scrollBy(0, -700);
         if (buttons[2].classList.contains("u-current-page")) {
            buttons[2].classList.toggle("u-current-page");
            buttons[1].classList.toggle("u-current-page");
         } else if (buttons[1].classList.contains("u-current-page")) {
            buttons[1].classList.toggle("u-current-page");
            buttons[0].classList.toggle("u-current-page");
         }
      }
   });

function showText() {
   document.querySelector("#js-arrow").style.display = "none";
   setTimeout(() => {
      document.querySelector("#js-all-projects-text").style.display = "block";
   }, 150);
}

function removeText() {
   setTimeout(() => {
      document.querySelector("#js-arrow").style.display = "block";
      document.querySelector("#js-all-projects-text").style.display = "none";
   }, 150);
}

function showTextNav(id) {
   if (id == 1) {
      document.querySelector("#js-text-home").style.display = "block";
   } else if (id == 2) {
      document.querySelector("#js-text-projects").style.display = "block";
   } else if (id == 3) {
      document.querySelector("#js-text-about").style.display = "block";
   }
}

function removeTextNav(id) {
   if (id == 1) {
      document.querySelector("#js-text-home").style.display = "none";
   } else if (id == 2) {
      document.querySelector("#js-text-projects").style.display = "none";
   } else if (id == 3) {
      document.querySelector("#js-text-about").style.display = "none";
   }
}
