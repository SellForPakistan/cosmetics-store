document.addEventListener("DOMContentLoaded", initHome);

async function initHome(){

loadCategories();
loadProducts();
loadBanners();

}

// ---------------- CATEGORIES ----------------
async function loadCategories(){

const categories = await getCategories();

const menu = document.getElementById("categoriesMenu");
const grid = document.getElementById("categoriesGrid");

menu.innerHTML = "";
grid.innerHTML = "";

categories.forEach(cat => {

if(cat.Status !== "ON") return;

// MENU
menu.innerHTML += `
<a href="category.html?id=${cat['Category Link']}">
${cat['Category Name']}
</a>
`;

// GRID
grid.innerHTML += `
<div class="card">
<img src="${cat['Category Image']}" />
<h3>${cat['Category Name']}</h3>
</div>
`;

});

}

// ---------------- PRODUCTS ----------------
async function loadProducts(){

const products = await getProducts();

const grid = document.getElementById("productsGrid");

grid.innerHTML = "";

products.slice(0,8).forEach(p => {

grid.innerHTML += `
<div class="card">
<img src="${p['Main Image']}" />
<h3>${p['Product Name']}</h3>
<p>Rs ${p['Price']}</p>
</div>
`;

});

}

// ---------------- BANNERS ----------------
async function loadBanners(){

const banners = await getBanners();

const banner = document.getElementById("bannerSection");

banner.innerHTML = "";

banners.forEach(b => {

if(b.Status !== "ON") return;

banner.innerHTML += `
<img src="${b['Banner Link']}" style="width:100%;border-radius:10px;margin-bottom:10px;">
`;

});

}