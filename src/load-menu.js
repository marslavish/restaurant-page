function loadMenuContent() {
  const content = document.querySelector("#content");

  const menuContent = document.createElement("div");
  const menuHeading = document.createElement("h1");
  const menuTexts = document.createElement("p");

  menuContent.classList.add("tab-content");

  menuHeading.textContent = "Menu Content";
  menuHeading.classList.add("tab-content-heading");
  menuContent.appendChild(menuHeading);

  menuTexts.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  menuTexts.classList.add("tab-content-texts");
  menuContent.appendChild(menuTexts);

  content.appendChild(menuContent);

  return { menuContent };
}

export default loadMenuContent;
