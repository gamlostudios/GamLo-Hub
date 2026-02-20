const content = document.getElementById("content");
const buttons = document.querySelectorAll("button[data-page]");

buttson.forEach(button -> {
  button.addEventListener("click", () => {
    const page = button.dataset.page;
    loadPage(page);
  });
});

function loadPage(page) {
  switch (page) {
    case "play":
      content.innerHTML = "<h2>Game Library (Coming Soon)</h2>";
      break;
    case "account":
      content.innerHTML = "<h2>Account Page (Coming Soon)</h2>";
      break;
    case "settings":
      content.innerHTML = "<h2>Settings (Coming Later)</h2>";
      break;
      content.innerHTML = "<h2>Help (Under Construction))</h2>";
      break;
  }
}
