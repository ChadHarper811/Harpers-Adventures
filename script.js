// Makes picture larger
function enhance(element) {
    element.style.width = 1000 + "px";
    element.style.height = 100 + "%";
 }
 // Makes picture normal/default size
 function normal(element) {
    element.style.width = 350 + "px";
    element.style.height = 300 + "px";
 }

const imageFrames = document.querySelectorAll(".img-day");
const blogPosts = document.querySelectorAll(".blog-post");

function getBlogAndEnlargeIMG(e) {
    // needs to target image inside frame and enlarge img, eventually will take picture and blog and use model to darken whole screen with only image and blog post centered and non darkened
    e.target
}

imageFrames.addEventListener("click", getBlogAndEnlargeIMG);