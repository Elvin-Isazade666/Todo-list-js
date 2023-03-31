
const form = document.getElementById("form-action");
const input = document.getElementById("new-text");
const list = document.querySelector(".add-list");
const clear = document.querySelector(".clear");
const list_count = document.querySelector("#count");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (input.value == "") {
        let div = form.nextElementSibling;
        div.innerText = "bir metn daxil edin";
        div.className = "message";
        // if (document.querySelector(".wrapper").children[3]) {
        //     var div = document.createElement("div");
        //     div.innerText = "Bir text daxil edin";
        //     div.className = "message";
        // if (form.nextSibling) {
        //     form.parentNode.insertBefore(div, form.nextSibling);
        // } else {
        //     form.parentNode.appendChild(div);
        // }
        //     form.insertAdjacentHTML("afterend", "<div class='message'>Bir text daxil edin</div>");
        //     console.log(div);
        // }
    } else {
        let div = form.nextElementSibling;
        div.innerText="";
        saveLocal();
        var li = document.createElement("li");
        li.innerHTML = `${input.value}  <button class='trash'><i class='fa-solid fa-trash-can'></i></button> <button class='check'><i class='fa-solid fa-check'></i></button>`;
        li.className = "beatiful-text";
        list.insertBefore(li, list.firstElementChild);
        var delete_list = document.querySelectorAll(".fa-trash-can");
        console.log("yessss")
        for (let i = 0; i < delete_list.length; i++) {
            delete_list[i].addEventListener("click", function () {
                delete_list[i].parentElement.parentElement.remove();
            });

        };
        loadList()
        var check = document.querySelector(".check");
        check.addEventListener("click", function () {
            this.parentElement.classList.toggle("del");
        });

        clear.addEventListener("click", function () {
            list.innerHTML = "";
        });
        input.value = "";
    }
});






{/* <li class="beatiful-text">buy new a gaming laptop <button class="trash"><i class="fa-solid fa-trash-can"></i></button> 
<button class="check"><i class="fa-solid fa-check"></i></button></li> */}

function saveLocal() {
    let localItems = JSON.parse(localStorage.getItem("localItem"));
    if (localItems === null) {
        willDo = [];
    } else {
        willDo = localItems;
    }
    willDo.push(input.value);
    localStorage.setItem("localItem", JSON.stringify(willDo));
}


function loadList() {
    let output = "";
    let localItems = JSON.parse(localStorage.getItem("localItem"))
    if (localItems === null) {
        willDo = [];
    } else {
        willDo = localItems;
    }
    willDo.forEach(function (element, index) {
        output += ` <li class="beatiful-text">
            ${element} <button class="trash" onClick="removeItem(${index})"><i class="fa-solid fa-trash-can"></i></button> <button class="check"><i class="fa-solid fa-check"></i></button>
        </li>`



    });
    list.innerHTML = output;
}
loadList();
function removeItem() {
    let localItems = JSON.parse(localStorage.getItem("localItem"));
    willDo.splice(JSON.parse(localStorage.getItem(localItems)), 1);
    localStorage.setItem("localItem", JSON.stringify(willDo));
    loadList();
}
