document.querySelector("#js-home").addEventListener("wheel", (event) => {
   // alert("test");
   let pages = document.querySelector("#js-pages-container");
   if (event.deltaY > 0) {
      pages.scrollBy(0, 700);
   } else {
      pages.scrollBy(0, -700);
   }
});

document
   .querySelector("#js-projects-nav")
   .addEventListener("wheel", (event) => {
      let projects = document.querySelector("#js-projects-container");
      if (event.deltaY > 0) {
         projects.scrollBy(0, 700);
      } else {
         projects.scrollBy(0, -700);
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
