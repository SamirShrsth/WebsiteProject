var images = ["/WebsiteProject/Images/elden.jpg", "/WebsiteProject/images/Darkwood.jpg", "/WebsiteProject/images/bl3.jpg", "/WebsiteProject/images/ds3.jpg", "/WebsiteProject/images/fort.jpg"];
var currentImageIndex = 0;

var prevBtn = document.getElementById("prev-btn");
var nextBtn = document.getElementById("next-btn");
var currentImage = document.getElementById("current-image");

prevBtn.addEventListener("click", function() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  currentImage.src = images[currentImageIndex];
});

nextBtn.addEventListener("click", function() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  currentImage.src = images[currentImageIndex];
});