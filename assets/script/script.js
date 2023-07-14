
var itemForm = $("#item-form");
var itemList = $("#item-list");
var itemInput = $("#item-input");

itemForm.on("submit", function(event) {
  event.preventDefault();
  
  var itemText = itemInput.val();

  if (itemText !== "") {
    var listItem = $("<li class='ui-state-default  ui-sortable-handle'>");
    listItem.text(itemText);
    itemList.append(listItem);
    itemInput.val("");
  }
})

$(function () {
    $('#item-list').sortable();
  });
