let wishlist = JSON.parse(localStorage.getItem("whisList")) || [];

const wishlistDiv = document.getElementById("wishlist");


// ADD TO WISHLIST

function addToWishlist(newProduct) {

    let productExist = false;
    for (let i = 0; i < wishlist.length; i++) {
        if (wishlist[i].id === newProduct.id) {
            productExist = true;
            break;
        }
    }
    if (!productExist) {
        wishlist.push(newProduct);
        localStorage.setItem("whisList", JSON.stringify(wishlist));
    }
}

// SHOW WISHLIST

function showWishlist() {

    wishlistDiv.innerHTML = "";
    wishlist.forEach((product) => {

        const productCard = document.createElement("div");
        productCard.className = "product-card";

        const productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.className = "image";

        const productName = document.createElement("h3");
        productName.innerText = product.name;
        productName.className = "name";

        const productPrice = document.createElement("p");
        productPrice.innerText = "₹ " + product.discount_price;
        productPrice.className = "price";

        const heart = document.createElement("span");
        heart.innerText = "❤️";
        heart.className = "heart";

        // REMOVE FROM WISHLIST

        heart.addEventListener("click", () => {
            wishlist = wishlist.filter(
                item => item.id !== product.id);
            localStorage.setItem("whisList", JSON.stringify(wishlist));

            showWishlist();
        });

        productCard.appendChild(productImage);
        productCard.appendChild(productName);
        productCard.appendChild(productPrice);
        productCard.appendChild(heart);

        wishlistDiv.appendChild(productCard);
    });

    if (wishlist.length === 0) {
        wishlistDiv.innerText = "Your wishlist is empty!";
    }
}
// UPDATE WISHLIST WHEN LOCAL STORAGE CHANGE
window.addEventListener("storage", function (event) {

    if (event.key === "whisList") {
        wishlist = JSON.parse(event.newValue) || [];

        showWishlist();
    }
});

window.addEventListener("pageshow", function () {
    wishlist = JSON.parse(
        localStorage.getItem("whisList")) || [];

    showWishlist();
});