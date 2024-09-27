// let book = document.querySelectorAll(".book");

// for (books of book) {
//   books.addEventListener("mouseover", function (event) {
//     if (event.target.id === "struktur") {
//       event.target.setAttribute("src", "assets/img/stukturData2.jpg");
//       return;
//     } else if (event.target.id === "mind") {
//       event.target.setAttribute("src", "assets/img/mindset2.jpg");
//       return;
//     } else if (event.target.id === "sakti") {
//       event.target.setAttribute("src", "assets/img/bukuSaktiWeb2.jpg");
//       return;
//     } else if (event.target.id === "self") {
//       event.target.setAttribute("src", "assets/img/selfHealing2.jpg");
//       return;
//     }
//   });

//   books.addEventListener("mouseout", function (event) {
//     if (event.target.id === "struktur") {
//       event.target.setAttribute("src", "assets/img/stukturData.jpg");
//       return;
//     } else if (event.target.id === "mind") {
//       event.target.setAttribute("src", "assets/img/mindset.jpg");
//       return;
//     } else if (event.target.id === "sakti") {
//       event.target.setAttribute("src", "assets/img/bukuSaktiWeb.jpg");
//       return;
//     } else if (event.target.id === "self") {
//       event.target.setAttribute("src", "assets/img/selfHealing.jpg");
//       return;
//     }
//   });
// }

let book = document.querySelectorAll(".book");

for (books of book) {
  books.addEventListener("mouseover", function (event) {
    if (event.target.id === "struktur") {
      event.target.setAttribute("src", "assets/img/stukturData2.jpg");
    } else if (event.target.id === "mind") {
      event.target.setAttribute("src", "assets/img/mindset2.jpg");
    } else if (event.target.id === "sakti") {
      event.target.setAttribute("src", "assets/img/bukuSaktiWeb2.jpg");
    } else if (event.target.id === "self") {
      event.target.setAttribute("src", "assets/img/selfHealing2.jpg");
    }
  });

  books.addEventListener("mouseout", function (event) {
    if (event.target.id === "struktur") {
      event.target.setAttribute("src", "assets/img/stukturData.jpg");
    } else if (event.target.id === "mind") {
      event.target.setAttribute("src", "assets/img/mindset.jpg");
    } else if (event.target.id === "sakti") {
      event.target.setAttribute("src", "assets/img/bukuSaktiWeb.jpg");
    } else if (event.target.id === "self") {
      event.target.setAttribute("src", "assets/img/selfHealing.jpg");
    }
  });
}
