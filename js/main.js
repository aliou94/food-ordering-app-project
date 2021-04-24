$(document).ready(function () {
    $('.header').height($(window).height());

    $("#loginButton").click(function(){
        $("#loginModal").modal("toggle");
    });

})

function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function () {
        let context = this, args = arguments;
        let later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args)
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};
const  slideImage = document.querySelector(".slide-in")

function checkSlide(e){
    // half way through the image
    const slideInAt = (window.scrollY + window.innerHeight) - slideImage.height/2;
    // bottom of the image
    const imageBottom = slideImage.offsetTop + slideImage.height;
    const isHalfShown = slideInAt > slideImage.offsetTop;
    const isNotScrollPast = window.scrollY < imageBottom;

  return  (isHalfShown && !isNotScrollPast) ? slideImage.classList.add("active"):
        slideImage.classList.remove("active")

}

window.addEventListener("scroll",debounce(checkSlide))

