/* ===== NAME INPUT SYSTEM ===== */
function submitName() {
    let username = document.getElementById("nameInput").value;

    if (username.trim() === "") {
        alert("Please enter your name 😊");
        return;
    }

    document.getElementById("welcomeText").textContent =
        `Hi ${username}! Welcome to My Personal Website ✨`;

    document.getElementById("nameOverlay").style.display = "none";
}

/* ===== LIVE DATE & TIME ===== */
function updateDateTime() {
    const now = new Date();

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    };

    document.getElementById("dateTime").textContent =
        now.toLocaleDateString("en-MY", options);
}

setInterval(updateDateTime, 1000);
updateDateTime();
