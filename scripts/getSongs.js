addButtonsFromFile();

const handleButtonClick = (event) => {
  console.log("btn added");
  const btn = event.target.cloneNode(true);

  document.querySelector(".selected-list").appendChild(btn);
  event.target.parentNode.removeChild(event.target);
  btn.addEventListener("click", handleClickedButtonClick);
};

const handleClickedButtonClick = (event) => {
  console.log("btn  removed");
  const btn = event.target.cloneNode(true);

  document.querySelector(".list").appendChild(btn);
  event.target.parentNode.removeChild(event.target);
  btn.addEventListener("click", handleButtonClick);
};

async function addButtonsFromFile() {
  try {
    const response = await fetch("../scripts/tags.json");
    const data = await response.json();
    const divElement = document.querySelector(".list");

    data.forEach((text) => {
      const button = document.createElement("button");
      button.textContent = text;

      divElement.appendChild(button);
    });

    console.log("Buttons added successfully!");
  } catch (error) {
    console.error("Error adding buttons:", error);
  }

  const buttons = document.querySelectorAll(".list button");
  buttons.forEach((button) => {
    button.addEventListener("click", handleButtonClick);
  });
}

document
  .querySelector(".input-bar input")
  .addEventListener("input", (event) => {
    const searchFilter = document.querySelector(".search-filter");
    searchFilter.classList.remove("display");
    fetch("../scripts/tags.json")
      .then((response) => response.json())
      .then((data) => {
        const filteredData = data
          .filter((item) => item.toLowerCase().includes(event.target.value))
          .slice(0, 5);

        // Map filtered data to <p> elements
        const html = filteredData.map((item) => `<p>${item}</p>`).join("");

        // Update search results container
        searchFilter.innerHTML = html;
      });
  });

document.querySelector(".input-bar input").addEventListener("blur", () => {
  const searchFilter = document.querySelector(".search-filter");
  searchFilter.classList.add("display");
});
