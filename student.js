const student = JSON.parse(localStorage.getItem("user"));
const infoStudentBox = document.querySelector(".student__wrapper")
const logOut = document.querySelector(".reset")
const studentShop = document.querySelector("#shop")

if(student){
    infoStudentBox.innerHTML = 
    `
    <img src="./images/st.png">
    <h2 class="title">${student.name}</h2>
    <h3>${student.surname}</h3>
    <p>ID : ${student.id}</p>
    <p>Group ${student.group}</p>
    <p class="moneta">Coin : ${student.coin} <img src="./images/coin.png"></p> 
    <p class="teacher">Teacher : | ${student.teacher}</p>
    <p>HP :| ${student.hp}</p>
    
    
    `
    logOut.addEventListener("click", function()  {
        localStorage.removeItem("user");
        window.location.href = "./index.html"
    })


}

studentShop.addEventListener("click" , ()  => {
    localStorage.removeItem("user");
    window.location.href = "./shop.html"
})

