let container = document.querySelector(".container");
let signUp = document.querySelector(".text-new");
let sign = document.querySelector(".Signup");
let loginBtn = document.querySelector(".text-login");

signUp.addEventListener("click", () => {
    container.classList.add("active");
    sign.classList.add("active");
})
loginBtn.addEventListener("click", () => {
    sign.classList.remove("active");
    container.classList.remove("active");
})

