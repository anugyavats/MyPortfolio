
// const text = "Hi! I am Anugya Vats. Welcome to my Portfolio.";
// const typingDelay = 100; // Delay between each character typing
// const erasingDelay = 50; // Delay before erasing the text
// const newTextDelay = 2000; // Delay before typing the next text
// let charIndex = text.length; // Start with the last character
// let typingTimeout;

// function erase() {
//   if (charIndex > 0) {
//     document.getElementById("typing-text").textContent = text.substring(0, charIndex - 1);
//     charIndex--;
//     typingTimeout = setTimeout(erase, erasingDelay);
//   } else {
//     clearTimeout(typingTimeout);
//     setTimeout(type, newTextDelay);
//   }
// }

// function type() {
//   if (charIndex < text.length) {
//     document.getElementById("typing-text").textContent += text.charAt(charIndex);
//     charIndex++;
//     typingTimeout = setTimeout(type, typingDelay);
//   } else {
//     clearTimeout(typingTimeout);
//     setTimeout(erase, newTextDelay);
//   }
// }

document.addEventListener("DOMContentLoaded", function() {
  erase();
});

// Rest of your code for the active navigation link highlighting...


  // JavaScript code for highlighting the active navigation item and showing sections with transitions
document.addEventListener("DOMContentLoaded", function() {
    const navigationLinks = document.querySelectorAll(".navigation a");
    const sections = document.querySelectorAll("section");
  
    function changeActiveLink() {
      const currentPosition = window.pageYOffset;
  
      sections.forEach((section, index) => {
        if (
          currentPosition >= section.offsetTop - section.offsetHeight * 0.5 &&
          currentPosition < section.offsetTop + section.offsetHeight * 0.5
        ) {
          navigationLinks.forEach(link => {
            link.classList.remove("active");
          });
          navigationLinks[index].classList.add("active");
  
          sections.forEach(section => {
            section.classList.remove("visible");
          });
          section.classList.add("visible");
        }
      });
    }
  
    window.addEventListener("scroll", changeActiveLink);
    changeActiveLink();
  });

  $(document).ready(function() {
    $('#carouselExample').carousel({
      interval: 2000 // Change the interval (in milliseconds) to control autoplay speed
    });
  });
  