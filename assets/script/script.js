var itemForm = $("#item-form");
var itemList = $("#item-list");
var itemInput = $("#item-input");
var saveButton = $('#save-option');

var listContents = [];

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

saveButton.on("click", function (event) {
  event.preventDefault();

  localStorage.setItem("items", JSON.stringify(listContents));

});

$(function () {
  $('#item-list').sortable();
});

