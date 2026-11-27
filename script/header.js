
// Product List
let products = [

    { id: 1, name: "iPhone 15", price: 65000 },

    { id: 2, name: "Samsung S24", price: 55000 },

    { id: 3, name: "HP Laptop", price: 45000 },

    { id: 4, name: "Headphones", price: 2000 },

    { id: 5, name: "Smart Watch", price: 3000 },

    { id: 6, name: "Bluetooth Speaker", price: 1500 }

];


// Display Products
function displayProducts(productList) {

    let container = document.getElementById("productContainer");

    container.innerHTML = "";

    for (let i = 0; i < productList.length; i++) {

        let product = productList[i];

        container.innerHTML += `

            <div class="product-card">

                <h3>${product.name}</h3>

                <p>Price: ₹${product.price}</p>

                <button> Add to Cart </button>

            </div>

        `;

    }

}


// Search Product
function searchProduct() {

    let search = document.getElementById("searchInput").value.toLowerCase();

    if (search == "") {

        alert("Please enter product name!");

        return;

    }

    let foundProducts = [];

    for (let i = 0; i < products.length; i++) {

        let product = products[i];

        if (product.name.toLowerCase().includes(search)) {

            foundProducts.push(product);

        }

    }

    if (foundProducts.length > 0) {

        displayProducts(foundProducts);

    } else {

        alert("Product Not Found!");

    }

}




