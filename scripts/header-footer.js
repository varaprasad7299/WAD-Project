console.log("hello from index");

document.addEventListener("DOMContentLoaded", function () {
  // Function to load HTML components
  function loadHTML(file, elementId) {
    fetch(file)
      .then((response) => {
        if (!response.ok) throw new Error(`Failed to load ${file}`);
        return response.text();
      })
      .then((data) => {
        const tempDiv = document.getElementById(elementId);
        tempDiv.innerHTML = data;
        const scripts = tempDiv.querySelectorAll("script");
        scripts.forEach((script) => {
          const newScript = document.createElement("script");
          if (script.src) {
            // Handle external scripts
            newScript.src = script.src;
          } else {
            // Handle inline scripts
            newScript.textContent = script.textContent;
          }
          document.head.appendChild(newScript);
        });
      })
      .catch((error) => console.error(error));
  }

  // Load header and footer
  loadHTML("../html/header.html", "header-container");
  loadHTML("../html/footer.html", "footer-container");
});
