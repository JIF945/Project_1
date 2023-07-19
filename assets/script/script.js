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

function init()  {
  var storedItems = JSON.parse(localStorage.getItem("items"));

  if (storedItems !== null) {
    listContents = storedItems;
  }

  renderItems();
}

//event listener for the "save" button
saveButton.on("click", function (event) {
  event.preventDefault();

  storeItems();
  saveList();
  
});

function saveList()  {
  var savedListEl = document.createElement('a');
  savedListEl.textContent = "List #1";
  document.body.appendChild(savedListEl);
  savedListEl.href = ('lists.html');
  savedListEl.target = '_blank';
}

$(function () {
  $('#item-list').sortable();
});



var list = document.querySelector("#list");
var locationOfProduct = document.querySelector("#location-of-product");
var about = document.querySelector("#about");

var navList = document.querySelector("#nav-list");
var navLoc = document.querySelector("#nav-loc");
var navAbout = document.querySelector("#nav-about");

navList.addEventListener("click", function() {
  if (navList !== false) {
    list.setAttribute("style", "display:block");
    locationOfProduct.setAttribute("style", "display:none");
    about.setAttribute("style", "display:none");
  }
})

navLoc.addEventListener("click", function() {
  if (navLoc !== false) {
    list.setAttribute("style", "display:none");
    locationOfProduct.setAttribute("style", "display:block");
    about.setAttribute("style", "display:none");
  }
})

navAbout.addEventListener("click", function() {
  if (navAbout !== false) {
    list.setAttribute("style", "display:none");
    locationOfProduct.setAttribute("style", "display:none");
    about.setAttribute("style", "display:block");
  }
})

