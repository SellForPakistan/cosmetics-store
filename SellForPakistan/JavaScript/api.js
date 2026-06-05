async function fetchSheet(sheet) {

try {

const res = await fetch(`${CONFIG.API_URL}?sheet=${sheet}`);
const data = await res.json();

if(data.success){
return data.data;
}

return [];

} catch (err) {
console.log(err);
return [];
}

}

// CATEGORIES
async function getCategories(){
return await fetchSheet("Categories");
}

// PRODUCTS
async function getProducts(){
return await fetchSheet("Products");
}

// BANNERS
async function getBanners(){
return await fetchSheet("Banners");
}