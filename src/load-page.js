function loadPage() {
  const content = document.querySelector("#content");

  const headingElement = document.createElement("h1");
  headingElement.textContent = "Best Restaurant in Town";
  content.appendChild(headingElement);

  const imageElement = document.createElement("img");
  imageElement.setAttribute("src", "../images/restaurant.jpeg");
  imageElement.setAttribute("alt", "restaurant");
  content.appendChild(imageElement);

  const copyElement = document.createElement("p");
  copyElement.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  content.appendChild(copyElement);
}

export default loadPage;