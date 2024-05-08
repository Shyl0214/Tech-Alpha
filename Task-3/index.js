const input = document.querySelector("#input");
const button = document.querySelector(".add_button");
const list_box = document.querySelector(".list_container");


button.addEventListener("click", () => {
    if (input.value === "") {
        alert("You have not written any Note");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        list_box.appendChild(li);

        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = "";
    save_data();
})

list_box.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        save_data();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        save_data();
    }
})

function save_data() {
    localStorage.setItem("User_data", list_box.innerHTML);
}

function display_data() {
    list_box.innerHTML = localStorage.getItem("User_data");
}
display_data();
