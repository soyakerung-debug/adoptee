const form = document.getElementById("contactForm");
const msg = document.getElementById("successMsg");

form.addEventListener("submit", async function(e) {
    e.preventDefault();

    let valid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    // reset borders
    [name, email, subject, message].forEach(input => {
        input.style.border = "none";
    });

    // ===== VALIDATION =====
    if (name.value.trim() === "") {
        name.style.border = "2px solid red";
        valid = false;
    }

    if (!email.value.includes("@")) {
        email.style.border = "2px solid red";
        valid = false;
    }

    if (subject.value === "") {
        subject.style.border = "2px solid red";
        valid = false;
    }

    if (message.value.trim().length < 5) {
        message.style.border = "2px solid red";
        valid = false;
    }

    if (!valid) return;

    // ===== SEND TO BACKEND =====
    try {
        const res = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name.value,
                email: email.value,
                subject: subject.value,
                message: message.value
            })
        });

        const data = await res.json();

        if (data.success) {
            msg.style.display = "block";
            form.reset();

            setTimeout(() => {
                msg.style.display = "none";
            }, 3000);
        } else {
            alert("Failed to send ❌");
        }

    } catch (err) {
        console.error(err);
        alert("Server error ⚠️");
    }
});