// TODO: implement
alert("NOT IMPLEMENTED YET");
return;

document.getElementById("submit").addEventListener("click", async () => {

    event.preventDefault();

    const username = document.getElementById("uname").value.trim();
    const email = document.getElementById("email").value.trim();
    const comment = document.getElementById("comment").value.trim();

    if (!username || !comment || !email) {
        alert("Fill the required fields!");
        return;
    }

    const newComment = {
        username: username,
        comment: comment,
        email: email,
    }

    try {
        const response = await fetch("/add-comment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newComment)
        });

        if (response.ok) {
            const list = document.getElementById()
        } else {
            const error = await response.json();
            alert(`Error: ${error.error}`);
        }
    } catch (err) {
        console.error("Error:", err);
        alert("Failed to send comment");
    }
});
