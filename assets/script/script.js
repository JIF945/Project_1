var itemForm = $("#item-form");
var itemList = $("#item-list");
var itemInput = $("#item-input");
var saveButton = $('#save-option');

var listContents = [];

//renders list items to the page
function renderItems() {
    var itemText = itemInput.val();
    listContents.push(itemText);

    if (itemText !== "") {
        var listItem = $("<li class='ui-state-default  ui-sortable-handle'>");
        listItem.text(itemText);
        itemList.append(listItem);
        itemInput.val("");
    }
}

function storeItems() {
    localStorage.setItem("items", JSON.stringify(listContents));
}

//event listener for the "add" button
itemForm.on("submit", function (event) {
    event.preventDefault();

    renderItems();
})

//event listener for the "save" button
saveButton.on("click", function (event) {
    event.preventDefault();

    storeItems();

    saveList();


});

function saveList() {
    var savedListEl = document.createElement('a');
    var savedListArea = document.getElementById("saved-list-links");
    savedListEl.textContent = "Saved List";
    savedListArea.appendChild(savedListEl);
    savedListEl.href = ('lists.html');
    savedListEl.target = '_blank';
}

$(function () {
    $('#item-list').sortable();
});

window.onload = function() {
    if (localStorage.getItem("items") !== null) {
        saveList();
    }
}


var list = document.querySelector("#list");
var locationOfProduct = document.querySelector("#location-of-product");
var about = document.querySelector("#about");
var savedList = document.querySelector("#saved-list");

var navList = document.querySelector("#nav-list");
var navLoc = document.querySelector("#nav-loc");
var navAbout = document.querySelector("#nav-about");
var navSaved = document.querySelector("#nav-saved-list")

navList.addEventListener("click", function () {
    if (navList !== false) {
        list.setAttribute("style", "display:block");
        locationOfProduct.setAttribute("style", "display:none");
        about.setAttribute("style", "display:none");
        savedList.setAttribute("style", "display:none");
    }
})

navLoc.addEventListener("click", function () {
    if (navLoc !== false) {
        list.setAttribute("style", "display:none");
        locationOfProduct.setAttribute("style", "display:block");
        about.setAttribute("style", "display:none");
        savedList.setAttribute("style", "display:none");
    }
})

navAbout.addEventListener("click", function () {
    if (navAbout !== false) {
        list.setAttribute("style", "display:none");
        locationOfProduct.setAttribute("style", "display:none");
        about.setAttribute("style", "display:block");
        savedList.setAttribute("style", "display:none");
    }
})

navSaved.addEventListener("click", function () {
    if (navAbout !== false) {
        list.setAttribute("style", "display:none");
        locationOfProduct.setAttribute("style", "display:none");
        about.setAttribute("style", "display:none");
        savedList.setAttribute("style", "display:block");
    }
})