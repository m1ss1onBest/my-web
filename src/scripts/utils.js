//TODO: implement or remove
function add_comment() {
    const form = document.querySelector(".feedback-form__form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const username = document.getElementById("uname").value.trim();
        const email = document.getElementById("email").value.trim();
        const comment = document.getElementById("comment").value.trim();

        if (!username || !email || !comment) {
            alert("Please fill all elements before.")
        }
    });
}