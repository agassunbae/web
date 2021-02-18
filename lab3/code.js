const itemsList = document.getElementById("items-list");
const inputBox = document.getElementById("input-box");
const addButton = document.getElementById("add-button");

addButton.addEventListener("click", () => addItem());

function addItem(){
    let newItem = document.getElementById("input-box").value;
    if (newItem === undefined || newItem == "" || newItem === null) {
        alert("You must enter something!");
    } else {
        alert("The new item '" + newItem + "' is added!");
        let item = document.createElement("fieldset");
        let itemTitle = document.createElement("div");
        let checkBox = document.createElement("input");
        let trash = document.createElement("img");

        item.id = newItem;
        itemTitle.innerText = newItem;
        checkBox.type = "checkbox";
        trash.src = "trash.png";

        document.getElementById("items-list").appendChild(item);
        document.getElementById(newItem).appendChild(itemTitle);
        document.getElementById(newItem).appendChild(checkBox);
        document.getElementById(newItem).appendChild(trash);
        
        edit(checkBox, item, trash);

        trash.addEventListener("click", () => deleteItem(newItem));
        checkBox.addEventListener("click", () => check(checkBox, item));

    }
}

function check(checkBox, item){
    if (checkBox.checked == true) {
        item.style.textDecoration = "line-through";
    } else if (checkBox.checked == false) {
        item.style.textDecoration = "none";
    }
}

function deleteItem(title){
    let choice = confirm("Do you want to delete the item '" + title + "'?");
    if (choice) {
        let item = document.getElementById(title);
        item.remove();
    }
}

function edit(checkBox, item, trash) {
    item.style.width = "600px";
    item.style.height = "30px";
    item.style.marginLeft = "400px";
    item.style.border = "1px solid rgb(173, 173, 173)";
    item.style.borderRadius = "3px";
    item.style.fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
    item.style.paddingLeft = "20px";
    item.style.fontSize = "20px";

    checkBox.style.marginLeft = "550px";
    checkBox.style.marginTop = "-15px";

    trash.style.width = "18px";
    trash.style.marginLeft = "580px";
    trash.style.marginTop = "-20px";
}
