let screenWidth = screen.width;

if (screenWidth > 770) {
   document.querySelector("#js-pages-container").style.overflow = "hidden";
}
document.querySelector("#js-home").addEventListener("wheel", (event) => {
   // alert("test");
   let windowWidth = window.innerWidth;

   if (windowWidth > 768) {
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
   }
   if (windowWidth < 768) {
      let pages = document.querySelector("#js-pages-container");
      if (event.deltaY > 0) {
         pages.scrollBy(375, 0);
      } else {
         pages.scrollBy(-375, 0);
      }
   }
});

document
   .querySelector("#js-projects-nav")
   .addEventListener("wheel", (event) => {
      let windowWidth = window.innerWidth;
      if (windowWidth > 768) {
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
      }
   });

function showText() {
   let windowWidth = window.innerWidth;
   if (windowWidth >= 768) {
      document.querySelector("#js-arrow").style.display = "none";
      console.log(document.querySelector("#js-arrow").style);
      setTimeout(() => {
         document.querySelector("#js-all-projects-text").style.display =
            "block";
      }, 150);
   }
}

function removeText() {
   let windowWidth = window.innerWidth;
   if (windowWidth > 768) {
      setTimeout(() => {
         document.querySelector("#js-arrow").style.display = "block";
         document.querySelector("#js-all-projects-text").style.display = "none";
      }, 150);
   }
}

function showTextNav(id) {
   let windowWidth = window.innerWidth;
   if (windowWidth > 768) {
      if (id == 1) {
         setTimeout(() => {
            document.querySelector("#js-text-home").style.display = "block";
         }, 150);
      } else if (id == 2) {
         setTimeout(() => {
            document.querySelector("#js-text-projects").style.display = "block";
         }, 150);
      } else if (id == 3) {
         setTimeout(() => {
            document.querySelector("#js-text-about").style.display = "block";
         }, 150);
      }
   }
}

function removeTextNav(id) {
   let windowWidth = window.innerWidth;
   if (windowWidth > 768) {
      if (id == 1) {
         setTimeout(() => {
            document.querySelector("#js-text-home").style.display = "none";
         }, 150);
      } else if (id == 2) {
         setTimeout(() => {
            document.querySelector("#js-text-projects").style.display = "none";
         }, 150);
      } else if (id == 3) {
         setTimeout(() => {
            document.querySelector("#js-text-about").style.display = "none";
         }, 150);
      }
   }
}
