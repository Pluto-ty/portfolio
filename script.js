document.querySelector("#js-home").addEventListener("click", (event) => {
   if (event.deltaY > 0) {
      event.target.scrollBy(500, 0);
   } else {
      event.target.scrollBy(-300, 0);
   }
});
