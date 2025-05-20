document.addEventListener("DOMContentLoaded", () => {
  const stars = document.querySelectorAll(".star");
  const modal = document.getElementById("rateUsModal");
  const closeBtn = document.getElementById("closeRateUsBtn");
  const trigger = document.getElementById("rateUsTrigger");

  trigger?.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "flex";
  });

  closeBtn?.addEventListener("click", () => {
    modal.style.display = "none";
  });

  stars.forEach((star, index) => {
    // On click, mark selected stars
    star.addEventListener("click", () => {
      stars.forEach(s => s.classList.remove("selected"));
      for (let i = 0; i <= index; i++) {
        stars[i].classList.add("selected");
      }
    });

    // On hover, show temporary highlight
    star.addEventListener("mouseover", () => {
      stars.forEach((s, i) => {
        s.classList.toggle("hovered", i <= index);
      });
    });

    // Remove hover highlight when mouse leaves
    star.addEventListener("mouseout", () => {
      stars.forEach(s => s.classList.remove("hovered"));
    });
  });

  document.getElementById("submitRating").addEventListener("click", () => {
    const rating = document.querySelectorAll(".star.selected").length;
    const comment = document.querySelector("textarea").value.trim();
    console.log("Rating Submitted:", { rating, comment });

    alert("Thanks for your feedback!");
    modal.style.display = "none";
  });
});
