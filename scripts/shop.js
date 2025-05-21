// viewShop elements
const shopImage = document.getElementById('shop-image');
const shopName = document.getElementById('shop-name');
const shopAddress = document.getElementById('shop-address');

const a = document.getElementById('shp1');

// those damn sets
const serv_img1 = document.getElementById('serv-img-1');
const serv_img2 = document.getElementById('serv-img-2');
const serv_img3 = document.getElementById('serv-img-3');
const serv_img4 = document.getElementById('serv-img-4');
const serv_img5 = document.getElementById('serv-img-5');
const serv_img6 = document.getElementById('serv-img-6');

const price1 = document.getElementById('price-1');
const price2 = document.getElementById('price-2');
const price3 = document.getElementById('price-3');
const price4 = document.getElementById('price-4');
const price5 = document.getElementById('price-5');
const price6 = document.getElementById('price-6');

function shop_1() {
    shopImage.src = "images/shopicon/basilan.jpg";
    shopName.textContent = "AMA Light & Sound";
    shopAddress.textContent = "Blk3-Lot21, Mercedes Homes Parcel III, Sorosoro Ilaya Batangas City";
    serv_img1.src = "images/equipment-sets/set-1.png";
    price1.textContent = "₱10,000";
    serv_img2.src = "images/equipment-sets/set-2.png";
    price2.textContent = "₱5000";
    serv_img3.src = "images/equipment-sets/set-3.png";
    price3.textContent = "₱20,000";
    serv_img4.src = "images/equipment-sets/set-4.png";
    price4.textContent = "₱12,000";
    serv_img5.src = "images/equipment-sets/set-5.png";
    price5.textContent = "₱18,000";
    serv_img6.src = "images/equipment-sets/set-6.png";
    price6.textContent = "₱15,000";
}

const close_ads = document.getElementById('close-ads-btn');
const ads_container = document.getElementById('ads-container');
const shop_main = document.getElementById('shop-main');

close_ads.addEventListener("click", () => {
    ads_container.style.display = "none";
    shop_main.style.marginRight = "0px";
});