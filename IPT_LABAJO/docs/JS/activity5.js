
    const toggleButton = document.getElementById("toggle-button");
    toggleButton.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      toggleButton.textContent = document.body.classList.contains("dark-mode")
        ? "Switch to Light Mode"
        : "Switch to Dark Mode";
    });
 