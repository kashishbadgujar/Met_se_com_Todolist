let addbtn = document.querySelector(".addbtn");
let popRegistration = document.querySelector(".pop-registration");
let btn = document.querySelector("#save");


let todo = document.querySelector("#todo");
let desc = document.querySelector("#desc");
let prio = document.querySelector("#prio");


addbtn.addEventListener("click", () => { 
  popRegistration.classList.remove("d-none");
});

btn.addEventListener("click", () => { 
  popRegistration.classList.add("d-none");
  
});

btn.addEventListener("click", () => {
  let newUser = {
    todo: todo.value,
    decs: desc.value,
    prio: prio.value,
  }

  // local storage --> save
  let userList = localStorage.getItem("users"); // null;

  userList = userList === null ? [] : JSON.parse(userList);
  userList.push(newUser);
  localStorage.setItem("users", JSON.stringify(userList));
  popRegistration.classList.add("d-none");

});
//git config --global user.name "--"