// Menggunakan Event Delegation untuk Efisiensi
document.addEventListener("DOMContentLoaded", () => {
  const bookSection = document.getElementById("bookRecommendation");

  bookSection.addEventListener("mouseover", (event) => {
    const target = event.target;
    const imageMap = {
      struktur: "assets/img/stukturData2.jpg",
      mind: "assets/img/mindset2.jpg",
      sakti: "assets/img/bukuSaktiWeb2.jpg",
      self: "assets/img/selfHealing2.jpg",
    };

    if (imageMap[target.id]) {
      target.src = imageMap[target.id];
    }
  });

  bookSection.addEventListener("mouseout", (event) => {
    const target = event.target;
    const originalImageMap = {
      struktur: "assets/img/stukturData.jpg",
      mind: "assets/img/mindset.jpg",
      sakti: "assets/img/bukuSaktiWeb.jpg",
      self: "assets/img/selfHealing.jpg",
    };

    if (originalImageMap[target.id]) {
      target.src = originalImageMap[target.id];
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  var rootElement = document.documentElement;

  function handleScroll() {
    // Show or hide the button depending on the scroll position
    if (rootElement.scrollTop > 200) {
      // Show button after scrolling down 200px
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  }

  function scrollToTop() {
    // Smooth scroll to the top
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  // Attach event listeners
  document.addEventListener("scroll", handleScroll);
  scrollToTopBtn.addEventListener("click", scrollToTop);
});
