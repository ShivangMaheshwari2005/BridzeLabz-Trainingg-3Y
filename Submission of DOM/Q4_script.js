// Q4 – Theme Switcher Using Attribute Manipulation
const themeButtons = document.querySelectorAll("[data-theme-choice]");
const themeStatus = document.getElementById("current-theme");

function applyTheme(themeName) {
  // setAttribute() updates both the custom data attribute and body class.
  document.body.setAttribute("data-theme", themeName);
  document.body.setAttribute("class", `${themeName}-theme`);
  themeStatus.textContent = `Current theme: ${themeName}`;
}

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyTheme(button.getAttribute("data-theme-choice"));
  });
});

// Apply the initial theme from the HTML data-theme attribute.
applyTheme(document.body.getAttribute("data-theme") || "light");
