import Person from "./modules/DataModule.js";
import NavSystem from "./modules/TheNavSystem.js";

(() => {

  console.log('loaded');
  console.log(Person);
  console.log(NavSystem);

// For the gallery I would like to have pictures of art work
//that you can click on and an overlay with a small description of each piece will appear 
//I think this is some of the code I need, but not all of it.

    let lightBox = document.querySelector(".lightbox")
    closeLightbox = lightBox.querySelector('.close')

    function showLightbox() {
    
    lightBox.classList.add('show-lightbox');
  }
  
  function hideLightbox(){
    lightBox.classList.remove('show-lightbox');
  }
  
  
  infoButtons.forEach(button => button.addEventListener("click", showLightbox));
  closeLightbox.addEventListener("click", hideLightbox)

})();