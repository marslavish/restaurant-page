function loadContactContent() {
  const content = document.querySelector("#content");

  const contactContent = document.createElement("div");
  const contactHeading = document.createElement("h1");
  const contactTexts = document.createElement("p");

  contactContent.classList.add("tab-content", "tab-content-hide");

  contactHeading.textContent = "Contact Information";
  contactHeading.classList.add("tab-content-heading");
  contactContent.appendChild(contactHeading);

  contactTexts.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  contactTexts.classList.add("tab-content-texts");
  contactContent.appendChild(contactTexts);

  content.appendChild(contactContent);

  return { contactContent };
}
export default loadContactContent;
