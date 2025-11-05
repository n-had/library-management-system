import { renderTable } from "./table.js";

const response = await fetch("./books.json");
const data = await response.json();

console.log(data);

renderTable(data);

const searchInputElement = document.getElementById("searchInput");
const handleSearchInputChange = (event) => {
//   console.log(event.target.value);
  const textLowerCase = event.target.value.toLowerCase();
  const filteredData = data.filter((book) => {
    if (
      book.Title.toLowerCase().includes(textLowerCase) ||
      book.Author.toLowerCase().includes(textLowerCase)
    ) {
      return book;
    }
  });
  if (filteredData.length > 0) {
    renderTable(filteredData);
  } else {
    renderTable()
  }
};

searchInputElement.addEventListener("input", handleSearchInputChange);
