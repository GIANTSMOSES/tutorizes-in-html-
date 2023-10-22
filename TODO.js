const inputBox = document.getElementById("box");
const listContainer = document.getElementById("list-container");


function addtask(){
    if (inputBox.value === ''){
        alert("you must write something!");
    }
    else {
        let li = document.createElement("li");
            li.innerHTML = inputBox.value;
            listContainer.appendChild(li);
            let span = document.createElement("span");
            span.textContent = "\u00d7";
            li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function (e){
    if (e.target.tagName === "LI") {
        e.target.style.textDecoration = "line-through"
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");

}
showTask();