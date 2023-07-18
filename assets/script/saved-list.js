var savedList = document.getElementById('saved-list');


var storedItems = JSON.parse(localStorage.getItem("items"));

savedList.textContent = ("Here's your saved list:");



for (var i = 0; i < storedItems.length; i++) {
   
        var item = document.createElement('p');
        item.textContent = ((i + 1) + (". ") + storedItems[i]);
        document.body.appendChild(item);
}