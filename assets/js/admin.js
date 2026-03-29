// ================= LOAD MESSAGES =================
async function loadMessages() {
    const container = document.getElementById("messages");

    // loading state
    container.innerHTML = "<p style='text-align:center;'>Loading... ⏳</p>";

    try {
        const res = await fetch("http://localhost:5000/contacts");

        // ❌ if backend not working
        if (!res.ok) {
            container.innerHTML = "<p style='text-align:center;color:red;'>Server error ❌</p>";
            return;
        }

        // convert to JSON safely
        const text = await res.text();

        let data;
        try {
            data = JSON.parse(text);
        } catch {
            console.error("Not JSON:", text);
            container.innerHTML = "<p style='text-align:center;color:red;'>Invalid server response ❌</p>";
            return;
        }

        // empty state
        if (!data || data.length === 0) {
            container.innerHTML = "<p style='text-align:center;'>No messages yet 💤</p>";
            return;
        }

        // show messages
        container.innerHTML = "";

        data.forEach(msg => {
            const div = document.createElement("div");
            div.className = "card";

            div.innerHTML = `
                <h3>${msg.name || "No Name"}</h3>
                <p><b>Email:</b> ${msg.email || "N/A"}</p>
                <p><b>Subject:</b> ${msg.subject || "N/A"}</p>
                <p>${msg.message || ""}</p>
                <small>${msg.createdAt ? new Date(msg.createdAt).toLocaleString() : ""}</small>
            `;

            container.appendChild(div);
        });

    } catch (err) {
        console.error("Fetch error:", err);
        container.innerHTML = "<p style='text-align:center;color:red;'>Cannot connect to server ⚠️</p>";
    }
}

// run on load
loadMessages();