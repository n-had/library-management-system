export function renderTable(data) {
  const table = document.getElementById("tableBody");
  const itemNotFoundElement = document.querySelector(".item-not-found");

  if (!data) {
    // console.log("no data provided to create the table");
    table.innerHTML = "";
    itemNotFoundElement.style.display = "block";
    return;
  }

  itemNotFoundElement.style.display = "none";

  let tableContent = "";

  data.map((book) => {
    tableContent += `<tr>
  <td>${book.BookID}</td>
  <td>${book.Title}</td>
  <td>${book.Author}</td>
  <td>${book.Genre}</td>
  <td>${book.Price}</td>
  <td>
    <span class="highlight-text ${
      book.Availability === "Unavailable" ? "unavailable" : ""
    }">
      ${book.Availability}
    </span>
  </td>
</tr>`;
  });

  table.innerHTML = tableContent;
}
