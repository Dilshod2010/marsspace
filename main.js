let spaceForm = document.querySelector(".formSpace");
let spaceLogin = document.querySelector(".login");
let spaceParol = document.querySelector(".parol");
let spaceEye = document.querySelector(".koz");
let btn = document.querySelector(".submit");
let errorMsg = document.querySelector(".error-msg"); 

spaceEye.addEventListener("mousedown", (evt) =>{
    evt.preventDefault();
    spaceParol.setAttribute("type" , "text");
});

spaceEye.addEventListener("mouseup", (evt) =>{
    evt.preventDefault();
    spaceParol.setAttribute("type" , "password");
});


spaceForm.addEventListener("submit", (bot) => {
    bot.preventDefault();
    let login = Number(spaceLogin.value.trim());
    let parol = Number(spaceParol.value.trim());

    let topilganStudent = null;

    oquvchilar.forEach(oquvchi => {
        if(oquvchi.id === login && oquvchi.password === parol){
            topilganStudent = oquvchi;
            // alert(topilganStudent.name)
            console.log(topilganStudent);
        }
        if(topilganStudent){
            localStorage.setItem("user" , JSON.stringify(topilganStudent));
            window.location.href = "./student.html"
            errorMsg.style.display = "none";

        }else{
            errorMsg.style.display = "block";
            errorMsg.textContent = "Такого пользователя не существует!";
            localStorage.removeItem("user" );
        }
    })
    spaceLogin.value = "";
    spaceParol.value = "";


})

function ochiribYoqish (){
    if(spaceLogin.value && spaceParol.value){
        btn.style.backgroundColor = "orange";
        btn.disabled = true;
    }else{
        btn.style.backgroundColor = "lightgray";
        btn.disabled = false;
    }
}

spaceLogin.addEventListener("input", ochiribYoqish);
spaceParol.addEventListener("input", ochiribYoqish);



