// shop choices
const shopA = document.getElementById('shop-A'),
      shopB = document.getElementById('shop-B'),
      shopC = document.getElementById('shop-C'),
      shopD = document.getElementById('shop-D'),
      shopE = document.getElementById('shop-E'),
      shopF = document.getElementById('shop-F');

// choice events
shopA.addEventListener("click", () => {
    const shopDetails = {
        name: "Light and Sound A",
        ratings: "4.89",
        equip_1: "images/equipment-sets/set-1.png",
        equip_2: "images/equipment-sets/unavailable.png",
        equip_3: "images/equipment-sets/set-3.png",
        equip_4: "images/equipment-sets/set-4.png",
        equip_5: "images/equipment-sets/set-5.png",
        equip_6: "images/equipment-sets/set-6.png",
        equip_7: "images/equipment-sets/set-7.svg",
        equip_8: "images/equipment-sets/set-8.svg",
        price_1: "₱10,000",
        price_2: "",
        price_3: "₱20,000",
        price_4: "₱12,000",
        price_5: "₱18,000",
        price_6: "₱15,000",
        price_7: "₱28,000",
        price_8: "₱23,000"
    };
    // saves choice
    localStorage.setItem("shopDetails", JSON.stringify(shopDetails));
});

shopB.addEventListener("click", () => {
    const shopDetails = {
        name: "Light and Sound B",
        ratings: "1.24",
        equip_1: "images/equipment-sets/unavailable.png",
        equip_2: "images/equipment-sets/set-3.png",
        equip_3: "images/equipment-sets/set-8.svg",
        equip_4: "images/equipment-sets/set-2.png",
        equip_5: "images/equipment-sets/set-6.png",
        equip_6: "images/equipment-sets/set-1.png",
        equip_7: "images/equipment-sets/set-5.png",
        equip_8: "images/equipment-sets/set-4.png",
        price_1: "",
        price_2: "₱13,500",
        price_3: "₱8,000",
        price_4: "₱3,000",
        price_5: "₱5,000",
        price_6: "₱3,500",
        price_7: "₱4,500",
        price_8: "₱3,000"
    };
    // saves choice
    localStorage.setItem("shopDetails", JSON.stringify(shopDetails));
});

shopC.addEventListener("click", () => {
    const shopDetails = {
        name: "Light and Sound C",
        ratings: "4.57",
        equip_1: "images/equipment-sets/set-8.svg",
        equip_2: "images/equipment-sets/set-7.svg",
        equip_3: "images/equipment-sets/set-5.png",
        equip_4: "images/equipment-sets/set-3.png",
        equip_5: "images/equipment-sets/unavailable.png",
        equip_6: "images/equipment-sets/set-4.png",
        equip_7: "images/equipment-sets/set-2.png",
        equip_8: "images/equipment-sets/unavailable.png",
        price_1: "₱8,000",
        price_2: "₱10.000",
        price_3: "₱2,500",
        price_4: "₱3,000",
        price_5: "",
        price_6: "₱1,500",
        price_7: "₱1,000",
        price_8: ""
    };
    // saves choice
    localStorage.setItem("shopDetails", JSON.stringify(shopDetails));
});

shopD.addEventListener("click", () => {
    const shopDetails = {
        name: "Light and Sound D",
        ratings: "2.34",
        equip_1: "images/equipment-sets/set-8.svg",
        equip_2: "images/equipment-sets/set-7.svg",
        equip_3: "images/equipment-sets/set-6.png",
        equip_4: "images/equipment-sets/set-5.png",
        equip_5: "images/equipment-sets/set-4.png",
        equip_6: "images/equipment-sets/set-3.png",
        equip_7: "images/equipment-sets/set-2.png",
        equip_8: "images/equipment-sets/set-1.png",
        price_1: "₱30,000",
        price_2: "₱33.000",
        price_3: "₱17,250",
        price_4: "₱19,500",
        price_5: "₱15,000",
        price_6: "₱22,250",
        price_7: "₱7,500",
        price_8: "₱12,000"
    };
    // saves choice
    localStorage.setItem("shopDetails", JSON.stringify(shopDetails));
});

shopE.addEventListener("click", () => {
    const shopDetails = {
        name: "Light and Sound E",
        ratings: "4.75",
        equip_1: "images/equipment-sets/set-4.png",
        equip_2: "images/equipment-sets/set-3.png",
        equip_3: "images/equipment-sets/unavailable.png",
        equip_4: "images/equipment-sets/set-1.png",
        equip_5: "images/equipment-sets/set-5.png",
        equip_6: "images/equipment-sets/unavailable.png",
        equip_7: "images/equipment-sets/set-7.svg",
        equip_8: "images/equipment-sets/set-8.svg",
        price_1: "₱7,500",
        price_2: "₱11,125",
        price_3: "",
        price_4: "₱6.000",
        price_5: "₱9,750",
        price_6: "",
        price_7: "₱16,500",
        price_8: "₱15,000"
    };
    // saves choice
    localStorage.setItem("shopDetails", JSON.stringify(shopDetails));
});

shopF.addEventListener("click", () => {
    const shopDetails = {
        name: "Light and Sound F",
        ratings: "3.33",
        equip_1: "images/equipment-sets/unavailable.png",
        equip_2: "images/equipment-sets/set-7.svg",
        equip_3: "images/equipment-sets/set-8.svg",
        equip_4: "images/equipment-sets/unavailable.png",
        equip_5: "images/equipment-sets/set-2.png",
        equip_6: "images/equipment-sets/unavailable.png",
        equip_7: "images/equipment-sets/unavailable.png",
        equip_8: "images/equipment-sets/set-1.png",
        price_1: "",
        price_2: "₱5,000",
        price_3: "₱4,000",
        price_4: "",
        price_5: "₱750",
        price_6: "",
        price_7: "",
        price_8: "₱1,250"
    };
    // saves choice
    localStorage.setItem("shopDetails", JSON.stringify(shopDetails));
});

// filter scripts
let filterClosed = true;
const filterToggle = document.getElementById('filters-toggle'),
      filterContainer = document.getElementById('filters-container'),
      filterArrow = document.getElementById('filters-arrow');

filterToggle.addEventListener("click", () => {
  if(filterClosed) {
    filterContainer.classList.remove("close-filters");
    filterContainer.classList.add("open-filters");
    filterArrow.style.transform = "rotate(-90deg)";
    filterClosed = false;
  } else {
    filterContainer.classList.remove("open-filters");
    filterContainer.classList.add("close-filters");
    filterArrow.style.transform = "rotate(90deg)";
    filterClosed = true;
  }
});

const ratingBtn1 = document.getElementById("rating-btn-1"),
      ratingBtn2 = document.getElementById("rating-btn-2"),
      ratingBtn3 = document.getElementById("rating-btn-3"),
      ratingBtn4 = document.getElementById("rating-btn-4"),
      ratingBtn5 = document.getElementById("rating-btn-5"),
      resetFilter = document.getElementById("reset-filter-btn");

const allShops = document.querySelectorAll(".image-box"),
      ratingButtons = document.querySelectorAll(".rating-buttons");
let filterOn = false;

// resets shops
function showAllShops() {
  allShops.forEach(s => {
    s.style.display = "grid";
  });
  filterOn = false;
}

// resets buttons
function resetButtons() {
  ratingButtons.forEach(b => {
    b.style.background = "#f0f0f0";
  });
}

ratingBtn1.addEventListener("click", () => {
  uncheck();
  resetButtons();
  ratingBtn1.style.background = "#ffc107";

  allShops.forEach(s => {
    s.style.display = "none";
  });
  shopB.style.display = "grid";
});

ratingBtn2.addEventListener("click", () => {
  uncheck();
  resetButtons();
  ratingBtn2.style.background = "#ffc107";

  allShops.forEach(s => {
    s.style.display = "none";
  });
  shopD.style.display = "grid";
});

ratingBtn3.addEventListener("click", () => {
  uncheck();
  resetButtons();
  ratingBtn3.style.background = "#ffc107";

  allShops.forEach(s => {
    s.style.display = "none";
  });
  shopF.style.display = "grid";
});

ratingBtn4.addEventListener("click", () => {
  uncheck();
  resetButtons();
  ratingBtn4.style.background = "#ffc107";

  allShops.forEach(s => {
    s.style.display = "none";
  });
  shopA.style.display = "grid";
});

ratingBtn5.addEventListener("click", () => {
  uncheck();
  resetButtons();
  ratingBtn5.style.background = "#ffc107";

  allShops.forEach(s => {
    s.style.display = "none";
  });
  shopC.style.display = "grid";
  shopE.style.display = "grid";
});

// reset all filters
resetFilter.addEventListener("click", () => {
  uncheck();
  showAllShops();
  resetButtons();
});

const indoorCheckbox = document.getElementById("indoor-checkbox"),
      outdoorCheckbox = document.getElementById("outdoor-checkbox");

function uncheck() {
  indoorCheckbox.checked = false;
  outdoorCheckbox.checked = false;
}

indoorCheckbox.addEventListener("change", () => {
  ratingButtons.forEach(b => {
    b.style.background = "#f0f0f0";
  });
  if(!indoorCheckbox.checked) {
    showAllShops();
  } else {
    allShops.forEach(s => {
      s.style.display = "none";
    });
    shopA.style.display = "grid";
    shopB.style.display = "grid";
    shopE.style.display = "grid";
    outdoorCheckbox.checked = false;
  }
});

outdoorCheckbox.addEventListener("change", () => {
  ratingButtons.forEach(b => {
    b.style.background = "#f0f0f0";
  });
  if(!outdoorCheckbox.checked) {
    showAllShops();
  } else {
    allShops.forEach(s => {
      s.style.display = "none";
    });
    shopC.style.display = "grid";
    shopD.style.display = "grid";
    shopF.style.display = "grid";
    indoorCheckbox. checked = false;
  }
});

// ads
const close_ads = document.getElementById('close-ads-btn'),
    ads_container = document.getElementById('ads-container'),
    shop_main = document.getElementById('shop-main');

close_ads.addEventListener("click", () => {
    ads_container.style.display = "none";
    shop_main.style.marginRight = "125px";
});