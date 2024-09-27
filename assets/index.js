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
