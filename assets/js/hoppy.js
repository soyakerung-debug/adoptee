function openForm(animalName = "this pet") {
  document.getElementById("adoptModal").style.display = "flex";


  const title = document.querySelector("#adoptModal h2");
  if (title) {
    title.innerText = "Adopt " + animalName;
  }
}

function closeForm() {
  document.getElementById("adoptModal").style.display = "none";
}

function submitForm() {
  alert("🎉 Adoption request submitted successfully!");
  closeForm();
}


window.onclick = function(event) {
  const modal = document.getElementById("adoptModal");
  if (event.target === modal) {
    closeForm();
  }
};