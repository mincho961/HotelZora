// A function to initialize the slider functionality for each wrapper
const initializeSlider = (wrapper) => {
  const carousel = wrapper.querySelector(".carousel");
  const images = wrapper.querySelectorAll(".slide-img");
  const buttons = wrapper.querySelectorAll(".button");
  let imageIndex = 1;
  let intervalId;

  // Function to start automatic image slider
  const autoSlide = () => {
    intervalId = setInterval(() => slideImage(++imageIndex), 5000);
  };

  // Function to slide image
  const slideImage = () => {
    imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;
    carousel.style.transform = `translate(-${imageIndex * 100}%)`;
  };

  // Function to handle button clicks for next/prev image
  const updateClick = (e) => {
    clearInterval(intervalId);  // Stop automatic slideshow
    imageIndex += e.target.id === "next" ? 1 : -1;  // Update image index
    slideImage(imageIndex);  // Slide to the new image
    autoSlide();  // Restart automatic slideshow
  };

  // Add event listeners to buttons
  buttons.forEach((button) => button.addEventListener("click", updateClick));

  // Stop the auto-slide on mouseover and restart on mouseleave
  wrapper.addEventListener("mouseover", () => clearInterval(intervalId));
  wrapper.addEventListener("mouseleave", autoSlide);

  // Start the slideshow initially
  autoSlide();
};

// Apply the slider functionality to all elements with the class "wrapper"
document.querySelectorAll(".wrapper").forEach(initializeSlider);