// I want my work on the front page, when people click on the piece
//it gives information on what was used to make it, details, etc.


(() => {

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