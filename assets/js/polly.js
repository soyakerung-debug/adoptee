// ==========================
// OPEN MODAL
// ==========================
function openForm() {
  const modal = document.getElementById("adoptModal");
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

// ==========================
// CLOSE MODAL
// ==========================
function closeForm() {
  const modal = document.getElementById("adoptModal");
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

// ==========================
// CLOSE ON OUTSIDE CLICK
// ==========================
window.addEventListener("click", function (e) {
  const modal = document.getElementById("adoptModal");
  if (e.target === modal) {
    closeForm();
  }
});

// ==========================
// CLOSE WITH ESC KEY
// ==========================
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeForm();
  }
});

// ==========================
// BUTTON CLICK ANIMATION
// ==========================
const adoptBtn = document.querySelector(".adopt-btn");

if (adoptBtn) {
  adoptBtn.addEventListener("click", () => {
    adoptBtn.style.transform = "scale(0.95)";
    setTimeout(() => {
      adoptBtn.style.transform = "scale(1)";
    }, 150);
  });
}
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