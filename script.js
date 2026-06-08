
let cart=[];
let wish=[];
let mobile=false;

/* ================= PRODUCT PAGE ================= */
function openProduct(p){
    window.location.href="product.html?item="+p;
}

/* ================= CART ================= */
function addCart(item){
    cart.push(item);
    updateCart();
}

function updateCart(){
    document.getElementById("cartCount").innerText=cart.length;

    let html="";
    cart.forEach((c,i)=>{
        html+=`
        <div class="item">
            ${c}
        </div>`;
    });

    document.getElementById("cartItems").innerHTML=html;
}

function toggleCart(){
    document.getElementById("cart").classList.toggle("open");
}

/* ================= WISHLIST ================= */
function addWish(item){
    if(!wish.includes(item)){
        wish.push(item);
    }
    updateWish();
}

function updateWish(){
    document.getElementById("wishCount").innerText=wish.length;

    let html="";
    wish.forEach(w=>{
        html+=`<div class="item">${w}</div>`;
    });

    document.getElementById("wishItems").innerHTML=html;
}

function toggleWish(){
    document.getElementById("wish").classList.toggle("open");
}

/* ================= SEARCH ================= */
function search(){
    let val=document.getElementById("search").value.toLowerCase();
    let cards=document.querySelectorAll(".card");

    cards.forEach(c=>{
        c.style.display=c.innerText.toLowerCase().includes(val)
        ?"block":"none";
    });
}

/* ================= MOBILE UI TOGGLE ================= */
function toggleMobileUI(){
    mobile = !mobile;
    document.body.classList.toggle("mobile");
}
