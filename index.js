let searchInputEl = document.getElementById("searchInputId");

let searchResultsEl = document.getElementById("searchResults");

function createAndAppendSearchResult(result) {
  let firstDiv = document.createElement("div");
  searchResultsEl.appendChild(firstDiv);

  let firstInnerDiv = document.createElement("div");
  firstDiv.appendChild(firstInnerDiv);

  let fabricHead = document.createElement("h1");
  fabricHead.textContent = "FABRIC THAT SPEAK";
  fabricHead.classList.add("fabric-head");
  firstInnerDiv.appendChild(fabricHead);

  let viewWatchDiv = document.createElement("div");
  firstInnerDiv.appendChild(viewWatchDiv);

  let viewButton = document.createElement("button");
  viewButton.textContent = "VIEW ALL";
  viewWatchDiv.appendChild(viewButton);

  let watchButton = document.createElement("button");
  watchButton.textContent = "Watch Now";
  viewWatchDiv.appendChild(watchButton);

  let newArrivalImage = document.createElement("img");
  newArrivalImage.src = result[0].image;
  newArrivalImage.classList.add("arrival-image");
  firstDiv.appendChild(newArrivalImage);

  let secDiv = document.createElement("div");
  searchResultsEl.appendChild(secDiv);

  let shirts = document.createElement("img");
  shirts.src = result[1].image;
  secDiv.appendChild(shirts);

  let hoobies = document.createElement("img");
  hoobies.src = result[2].image;
  secDiv.appendChild(hoobies);
}

function displayResults(searchResults) {
  createAndAppendSearchResult(searchResults);
}

function searchWikipedia(event) {
  if (event.key === "Enter") {
    searchResultsEl.textContent = "";

    let searchInput = searchInputEl.value;
    let url =
      "https://products-api-2ttf.onrender.com/api/products?search=" +
      searchInput;
    let options = {
      method: "GET",
    };

    fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        displayResults(jsonData);
      });
  }
}

searchInputEl.addEventListener("keydown", searchWikipedia);
