function loadPage() {
  const content = document.querySelector("#content");

  const headingElement = document.createElement("h1");
  headingElement.textContent = "Best Restaurant in Town";
  content.appendChild(headingElement);

  const imageElement = document.createElement("img");
  imageElement.setAttribute("src", "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2020%2F04%2F24%2Fppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg");
  imageElement.setAttribute("alt", "restaurant");
  content.appendChild(imageElement);

  const copyElement = document.createElement("p");
  copyElement.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  content.appendChild(copyElement);
}

export default loadPage;