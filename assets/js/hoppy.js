document.addEventListener("DOMContentLoaded", () => {

  const modal = document.getElementById("adoptModal");
  const form = document.querySelector(".purchase-form");

  // ==========================
  // OPEN MODAL (GLOBAL)
  // ==========================
  window.openForm = function(animalName = "this pet") {
    if (!modal) return;

    modal.style.display = "flex";

    const title = modal.querySelector("h2");
    if (title) {
      title.innerText = "Adopt " + animalName + " 🐾";
    }

    if (form) {
      form.dataset.pet = animalName;
    }

    document.body.style.overflow = "hidden";
  };

  // ==========================
  // CLOSE MODAL (GLOBAL)
  // ==========================
  window.closeForm = function() {
    if (!modal) return;

    modal.style.display = "none";
    document.body.style.overflow = "auto";
  };

  // ==========================
  // BUTTON CLICK
  // ==========================
  document.querySelectorAll(".adopt-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const petName = btn.dataset.pet || "this pet";

      openForm(petName);

      btn.style.transform = "scale(0.95)";
      setTimeout(() => {
        btn.style.transform = "scale(1)";
      }, 150);
    });
  });

  // ==========================
  // CLOSE ON OUTSIDE CLICK
  // ==========================
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeForm();
    }
  });

});
function comingSoon(e) {
    e.preventDefault();

    const popup = document.createElement("div");
    popup.innerText = "🚧 Social Media Coming Soon!";

    popup.style.position = "fixed";
    popup.style.bottom = "30px";
    popup.style.left = "50%";
    popup.style.transform = "translateX(-50%)";

    // 🎨 MATCH YOUR COLOR PALETTE
    popup.style.background = "linear-gradient(135deg, #c9c05e, #c97a1c)";
    popup.style.color = "#fff";
    popup.style.padding = "14px 22px";
    popup.style.borderRadius = "25px";
    popup.style.fontSize = "14px";
    popup.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
    popup.style.zIndex = "9999";

    document.body.appendChild(popup);

    setTimeout(() => {
        popup.remove();
    }, 2000);
}