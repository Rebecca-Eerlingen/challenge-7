<script>
    const dropBtn = document.querySelector(".dropbtn");
    const dropdown = document.querySelector(".dropdown-content");

    dropBtn.addEventListener("click", () => {
        dropdown.style.display =
            dropdown.style.display === "block" ? "none" : "block";
    });

    // Optional: close dropdown when clicking outside
    window.addEventListener("click", function(e) {
        if (!e.target.matches('.dropbtn')) {
            dropdown.style.display = "none";
        }
    });
</script>
