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
// SUBMIT FORM (WITH VALIDATION)
// ==========================
function submitForm() {
  const modal = document.getElementById("adoptModal");

  const inputs = modal.querySelectorAll("input");
  const textarea = modal.querySelector("textarea");

  let isValid = true;

  inputs.forEach(input => {
    if (input.value.trim() === "") {
      input.style.border = "2px solid red";
      isValid = false;
    } else {
      input.style.border = "1px solid #ccc";
    }
  });

  if (textarea.value.trim() === "") {
    textarea.style.border = "2px solid red";
    isValid = false;
  } else {
    textarea.style.border = "1px solid #ccc";
  }

  if (!isValid) {
    alert("Please fill all fields 🐾");
    return;
  }

  // Cute success animation/message
  modal.querySelector(".modal-box").innerHTML = `
    <h2>🎉 Yay!</h2>
    <p>Your request for <strong>Polly 🐦</strong> has been sent!</p>
    <p>We’ll contact you soon 💛</p>
    <button onclick="closeForm()">Close</button>
  `;
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