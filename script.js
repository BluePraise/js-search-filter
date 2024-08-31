// all the search items
const searchItems = [...document.querySelectorAll(".js-search-item")];
const searchList = document.querySelector(".js-search-list");
const searchField = document.querySelector(".js-search-field");

// the values from the search
const filters = {
    searchText: ""
};

const renderResults = function (searchItems, filters) {
    // filter through all the search items and match it with the values input
    const filteredItems = searchItems.filter(function (item) {
        return item.textContent
            .toLowerCase()
            .includes(filters.searchText.toLowerCase());
    });

    // empty main container
    searchList.innerHTML = "";

    // place each result in the search list
    filteredItems.forEach(function (item) {
        searchList.appendChild(item);
    });
};


if (searchField) {
    searchField.addEventListener("input", function (e) {
        filters.searchText = e.target.value;

        // if user types more than 2 characters a result will be shown
        if (e.target.value.length > 2) {
            setTimeout(renderResults(searchItems, filters), 400);
        }
        // if the user clears the input all the results will come back
        else if (e.target.value.length === 0) {
            renderResults(searchItems, filters);
        }
    });
}
