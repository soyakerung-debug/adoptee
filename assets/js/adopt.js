const BASE_URL = "https://adoptee-backend.onrender.com";

document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector(".purchase-form");

  if (!form) return;

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const petName = form.dataset.pet || "this pet";

    const name = form.querySelector('[name="name"]').value;
    const email = form.querySelector('[name="email"]').value;
    const phone = form.querySelector('[name="phone"]').value;
    const message = form.querySelector('[name="message"]').value;

    try {
      const res = await fetch(`${BASE_URL}/adopt`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          petName,
          name,
          email,
          phone,
          message
        })
      });

      const data = await res.json();

      if (data.success) {
        // ✅ close modal FIRST
        if (typeof closeForm === "function") {
          closeForm();
        }

        showPopup(`💖 Request sent for ${petName}!`);
        form.reset();
      } else {
        showPopup("❌ Failed to send");
      }

    } catch (err) {
      console.error(err);
      showPopup("⚠️ Server error");
    }
  });

});

// ==========================
// POPUP FUNCTION
// ==========================
function showPopup(text) {
  const popup = document.createElement("div");
  popup.innerHTML = text;

  popup.style.position = "fixed";
  popup.style.top = "50%";
  popup.style.left = "50%";
  popup.style.transform = "translate(-50%, -50%)";
  popup.style.background = "#c97a1c";
  popup.style.color = "#fff";
  popup.style.padding = "20px 30px";
  popup.style.borderRadius = "15px";
  popup.style.zIndex = "9999";

  document.body.appendChild(popup);

  setTimeout(() => popup.remove(), 2500);
}
