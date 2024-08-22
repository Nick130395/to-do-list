const inputBox = document.getElementById("input-box");
const btn = document.getElementById("add-task");
const listContainer = document.getElementById("list-container");

btn.addEventListener("click", () => {
  if (inputBox.value === "") {
    alert("Please enter your text");
  } else {
    let li = document.createElement("li");
    li.innerText = inputBox.value;
    listContainer.appendChild(li);

    //Add remove icon to the list
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }

  inputBox.value = "";
  saveData();
});

listContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

const saveData = () => {
  localStorage.setItem("data", JSON.stringify(listContainer.innerHTML));
};

const showList = () => {
  listContainer.innerHTML = JSON.parse(localStorage.getItem("data"));
};

showList();
