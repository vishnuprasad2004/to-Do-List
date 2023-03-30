const addBtn = document.getElementById("addBtn");
const delBtn = document.getElementById("delBtn");
const taskInput = document.getElementById("textbox");
const container = document.getElementById("container");

let idx = 1;

addBtn.addEventListener("click",addElement);
delBtn.addEventListener("click",delElement);


window.addEventListener("keydown",(event) => {
    if(event.key == 'Enter') {
        addElement();
    }
});

/*
let task = window.prompt("Enter the Task:");
if(document.getElementById("2").checked == true) {
    container.getElementsByTagName("label")[2-1].style.textDecoration = "line-through";
    console.log("true");
}else {
    console.log("false");
}
*/

function addElement() {

    let task = taskInput.value;
    if(task == "" || task == " ") {
        window.alert("Cannot consider Nothing..");
        return;
    }

    let itemContainer = document.createElement("div");
    let checkbox = document.createElement("input");
    let label = document.createElement("label");
    
    itemContainer.setAttribute("class","item-container");
    checkbox.setAttribute("type","checkbox");
    checkbox.setAttribute("class",idx);
    label.setAttribute("class",idx);
    
    idx = idx + 1;
    label.textContent = task;
    console.log(document.getElementsByClassName(idx));

    itemContainer.appendChild(checkbox);
    itemContainer.appendChild(label);
    container.appendChild(itemContainer);

    taskInput.value = "";
    
}

container.addEventListener("change",() => {
    for(let i = 1; i < idx; i++) {
        //console.log(document.getElementsByClassName(i)[0]);

        if(document.getElementsByClassName(i)[0].checked == true) {

            // container.removeChild(container.children[i-1]);
            let label = document.getElementsByClassName(i)[1];
            label.style.textDecoration = "line-through";

        }
        if(document.getElementsByClassName(i)[0].checked == false) {
            
            let label = document.getElementsByClassName(i)[1];
            label.style.textDecoration = "none";
        }
        
    }

});

function delElement() {
    for(let i = 1; i < idx; i++) {
        container.removeChild(container.lastChild);
    }
    idx = 1;
}


