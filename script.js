document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggleMode");

    toggleButton.addEventListener("click", () => {
        if (document.body.style.backgroundColor === "black") {
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
        } else {
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
        }
    });
});
