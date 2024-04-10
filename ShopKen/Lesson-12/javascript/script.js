// Hamburger Menu 
function toggleMenu() {
  document.getElementsByClassName("hamburger")[0].classList.toggle("responsive");
}

  


// Last Modified
document.querySelector("#update").textContent = document.lastModified;

let date = new Date();
let year = date.getFullYear();
document.querySelector("#year").textContent = year;


// Images Lazy Load

let imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};


if('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if(item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}


