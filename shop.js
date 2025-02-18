const product  = [
    { rasmi: "./images/kovrik.png", nomi: "Kovrik", narxi: 100, qoldiq: 50 },
    { rasmi: "./images/stiker.png", nomi: "Stiker keyboard", narxi: 49, qoldiq: 11 },
    { rasmi: "./images/smartwatch.png", nomi: "Smart Watch", narxi: 899, qoldiq: 4 },
    { rasmi: "./images/ultrakeyboard.png", nomi: "Ultra keyboard", narxi: 200, qoldiq: 20 },
    { rasmi: "./images/mouse.png", nomi: "Mouse", narxi : 259 , qoldiq: 4},
    { rasmi: "./images/airpods.png", nomi: "Airpods", narxi :499 , qoldiq:14},
    { rasmi: "./images/powerbank.png" , nomi: "Powerbank" , narxi:1080 , qoldiq:7 },
    { rasmi: "./images/flash drive.png", nomi: "Flash drive", narxi: 299 , qoldiq:11},
    { rasmi: "./images/smartphone.png" , nomi:"Smartphone" , narxi:3999 , qoldiq:4},
    { rasmi : "./images/Playstation.png"  , nomi:"Playstation" , narxi : 6999 , qoldiq: 2 } ,
    { rasmi: "./images/yandex.png" , nomi:"Yandex" , narxi:1999 , qoldiq:4},
    { rasmi: "./images/planshet.png" , nomi:"Planshet" , narxi:4999 , qoldiq:1},

    
];

const productForm = document.querySelector("#shopForm");
const productInput = document.querySelector("#shopInput");
const productWrapper = document.querySelector("#shop__wrapper");

console.log(productWrapper);


function renederShop(magazin) {
    productWrapper.innerHTML = "";
    productWrapper.innerHTML = magazin.map(obyektlar => 
        `
        <div class="box">
            <img class="box-img" src="${obyektlar.rasmi}">
            <h3>${obyektlar.nomi}</h3>
            <p>Narxi: ${obyektlar.narxi} coin</p>
            <p>Qoldiq: ${obyektlar.qoldiq} ta mavjud</p>
            <button class=" btn-primary" onclick="buyProduct(${obyektlar.narxi})">Buy</button>
        </div>
        `
    ).join(""); 
}


renederShop(product);


productForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const inpQiymat = productInput.value.toLowerCase();
    
    const filterProduct = product.filter(item => item.nomi.toLowerCase().includes(inpQiymat));
    
    renederShop(filterProduct); 
});
