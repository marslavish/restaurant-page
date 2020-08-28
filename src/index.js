import loadPage from "./load-page.js";
import loadMenuContent from "./load-menu.js";
import loadContactContent from "./load-contact.js";

const menuTab = document.createElement("div");
const contactTab = document.createElement("div");
const content = document.querySelector("#content");

menuTab.textContent = "MENU";
menuTab.classList.add("tab", "tab-chosen");
content.appendChild(menuTab);

contactTab.textContent = "CONTACT";
contactTab.classList.add("tab");
content.appendChild(contactTab);

// Menu module
const menuContent = loadMenuContent().menuContent;
// Contact mudule
const contactContent = loadContactContent().contactContent;

menuTab.addEventListener("click", () => {
  menuTab.classList.add("tab-chosen");
  contactTab.classList.remove("tab-chosen");

  menuContent.classList.remove("tab-content-hide");
  contactContent.classList.add("tab-content-hide");
});
contactTab.addEventListener("click", () => {
  contactTab.classList.add("tab-chosen");
  menuTab.classList.remove("tab-chosen");

  contactContent.classList.remove("tab-content-hide");
  menuContent.classList.add("tab-content-hide");
});

loadPage();