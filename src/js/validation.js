let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let email = id("email"),
    name = id("name"),
    form = id("form"),
    errorMsg = classes("form__error"),
    sendBtn = id("send");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        engine(email, 0, "This field is required");
        
    });

let engine = (id, serial, message) => {

  if (id.value.trim() === "") {
      errorMsg[serial].innerHTML = message;
      id.style.border = "2px solid red";
  } else {
    errorMsg[serial].innerHTML = "";
      id.style.border = "transparent";
      var allInputs = document.querySelectorAll('input');
    allInputs.forEach(singleInput => singleInput.value = '');
    alert("Your info was send!");
    }
    
}