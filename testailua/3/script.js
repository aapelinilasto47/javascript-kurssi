
resultDiv = document.getElementById("result");
const searchContainer = document.getElementById("search-container");
const openWishlistButton = document.getElementById("open-wishlist-button");
let wishlist = [];

document.addEventListener("DOMContentLoaded", function() {
    showData();

    wishlist = [];

    
});

function showData() {
    fetchProduct().then(allProducts => {
        resultDiv.innerHTML = "";


        for (let i = 0; i < allProducts.length && i < 20; i++) {

            presentProducts(allProducts[i]);

            
        }
    });
}

function fetchProduct() {
    return fetch(`https://fakestoreapi.com/products`)
        .then(response => response.json())
        .then(data => {
            let allProducts = data;
            return allProducts;
            
            
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
        
}

function searchProducts(query) {
    return fetch(`https://fakestoreapi.com/products`)
        .then(response => response.json())
        .then(data => {
            let allProducts = data;
            return allProducts.filter(product => product.title.toLowerCase().includes(query.toLowerCase()));
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
}
document.getElementById("search-input").addEventListener("keypress", function() {
    const query = document.getElementById("search-input").value;
    searchProducts(query).then(filteredProducts => {
        resultDiv.innerHTML = "";
        if (filteredProducts.length > 0) {
            filteredProducts.forEach(product => {
                presentProducts(product);
            });
        } else {
            resultDiv.innerHTML = "<p>No products found.</p>";
        }
    });
});

document.getElementById("search-button").addEventListener("click", function() {
    const query = document.getElementById("search-input").value;
    searchProducts(query).then(filteredProducts => {
        resultDiv.innerHTML = "";
        if (filteredProducts.length > 0) {
            filteredProducts.forEach(product => {
                presentProducts(product);
            });
        } else {
            resultDiv.innerHTML = "<p>No products found.</p>";
        }
    });
});

function presentProducts(product) {
    
    const productContainer = document.createElement("div");
        productContainer.className = "product-container";
        productContainer.id = "product-" + product.id;
        resultDiv.appendChild(productContainer);
        const imgContainer = document.createElement("div");
        imgContainer.className = "img-container";
        productContainer.appendChild(imgContainer);

        const img = document.createElement("img");
        img.src = product.image;
        img.alt = product.title;
        img.width = 100;
        imgContainer.appendChild(img);

        const titleContainer = document.createElement("div");
        titleContainer.className = "title-container";
        productContainer.appendChild(titleContainer);
        const p = document.createElement("p");
        p.className = "product-info";
        if (product.title.length >= 60) {
            p.textContent = `${product.title.slice(0, 60)}...`;
        }
        else {
            p.textContent = product.title;
        }
        titleContainer.appendChild(p);

        const priceContainer = document.createElement("div");
        priceContainer.className = "price-container";
        productContainer.appendChild(priceContainer);
        const price = document.createElement("p");
        price.className = "product-price";
        price.textContent = `$${product.price}`;
        priceContainer.appendChild(price);

        const buttonContainer = document.createElement("div");
        buttonContainer.className = "button-container";
        productContainer.appendChild(buttonContainer);

        const button = document.createElement("button");
        button.className = "add-to-wishlist";
        button.id = "add-to-wishlist-" + product.id;
        button.textContent = "Add to Wishlist";
        button.addEventListener("click", function() {
            wishlist.push(product);
            console.log("Wishlist:", wishlist);

        });
        buttonContainer.appendChild(button);


        const button2 = document.createElement("button");
        button2.className = "view-details";
        button2.id = "view-details-" + product.id;
        button2.textContent = "View Details";
        button2.addEventListener("click", function() {
            resultDiv.innerHTML = "";
            presentProductDetails(product);
        });
        buttonContainer.appendChild(button2);

        openWishlistButton.addEventListener("click", function() {
            resultDiv.innerHTML = "";
            showWishlist();
        });
    }

function presentProductDetails(product) {
    const detailContainer = document.createElement("div");
    detailContainer.className = "detail-container";
    detailContainer.id = "detail-" + product.id;
    resultDiv.appendChild(detailContainer);

    const imgContainer = document.createElement("div");
    imgContainer.className = "detail-img-container";
    detailContainer.appendChild(imgContainer);
    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.title;
    img.width = 200;
    imgContainer.appendChild(img);

    const textContainer = document.createElement("div");
    textContainer.className = "detail-text-container";
    detailContainer.appendChild(textContainer);
    const title = document.createElement("h2");
    title.textContent = product.title;
    title.className = "product-title";
    textContainer.appendChild(title);

    const description = document.createElement("p");
    description.className = "product-description";
    description.textContent = product.description;
    textContainer.appendChild(description);

    const priceContainer = document.createElement("div");
    priceContainer.className = "detail-price-container";
    textContainer.appendChild(priceContainer);
    const price = document.createElement("p");
    price.className = "detail-product-price";
    price.textContent = `$${product.price}`;
    priceContainer.appendChild(price);

    const buttonContainer = document.createElement("div");
    buttonContainer.className = "detail-button-container";
    textContainer.appendChild(buttonContainer);

    const backButton = document.createElement("button");
    backButton.textContent = "Back to Products";
    backButton.className = "back-button";
   backButton.addEventListener("click", function() {
       resultDiv.innerHTML = "";
       
       showData();
       
   });
   buttonContainer.appendChild(backButton);

   const wishlistButton = document.createElement("button");
    wishlistButton.className = "detail-add-to-wishlist";
    wishlistButton.id = "add-to-wishlist-" + product.id;
    wishlistButton.textContent = "Add to Wishlist";

    wishlistButton.addEventListener("click", function() {
        wishlist.push(product);
        console.log("Wishlist:", wishlist);
    });
    buttonContainer.appendChild(wishlistButton);
}

function showWishlist() {
    if (wishlist.length === 0) {
        resultDiv.innerHTML = "";

        const emptyContainer = document.createElement("div");
        emptyContainer.className = "empty-wishlist-container";
        resultDiv.appendChild(emptyContainer);
        const emptyMessage = document.createElement("p");
        emptyMessage.textContent = "Your wishlist is empty.";
        emptyMessage.className = "empty-wishlist-message";
        emptyContainer.appendChild(emptyMessage);

        const backButton = document.createElement("button");
        backButton.textContent = "Back to Products";
        backButton.className = "back-button-empty";
        backButton.addEventListener("click", function() {
            resultDiv.innerHTML = "";
            showData();
        });
        emptyContainer.appendChild(backButton);
    } else {
        wishlist.forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.className = "wishlist-product-container";
            resultDiv.appendChild(productDiv);

            const imgContainer = document.createElement("div");
            imgContainer.className = "wishlist-img-container";
            productDiv.appendChild(imgContainer);

            const img = document.createElement("img");
            img.src = product.image;
            img.alt = product.title;
            img.style.width = "100%";
            img.style.height = "100%";
            img.style.objectFit = "contain";
            imgContainer.appendChild(img);

            const textContainer = document.createElement("div");
            textContainer.className = "wishlist-text-container";
            
            productDiv.appendChild(textContainer);
            const title = document.createElement("h3");
            title.className = "wishlist-product-title";
            title.textContent = product.title;
            textContainer.appendChild(title);

            const description = document.createElement("p");
            description.className = "wishlist-product-description";
            description.textContent = product.description;
            textContainer.appendChild(description);

            const priceContainer = document.createElement("div");
            priceContainer.className = "wishlist-price-container";
            productDiv.appendChild(priceContainer);

            const price = document.createElement("p");
            price.className = "wishlist-product-price";
            price.textContent = `$${product.price}`;
            priceContainer.appendChild(price);

            const buttonContainer = document.createElement("div");
            buttonContainer.className = "wishlist-button-container";
            productDiv.appendChild(buttonContainer);

            const detailsButton = document.createElement("button");
            detailsButton.textContent = "View Details";
            detailsButton.className = "view-wishlist-details";
            detailsButton.addEventListener("click", function() {
                resultDiv.innerHTML = "";
                presentProductDetails(product);
            });
            buttonContainer.appendChild(detailsButton);

            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.className = "remove-from-wishlist";
            removeButton.addEventListener("click", function() { 
                const index = wishlist.indexOf(product);
                if (index > -1) {
                    wishlist.splice(index, 1);
                }
                resultDiv.innerHTML = "";
                showWishlist();
            });
            buttonContainer.appendChild(removeButton);


        });
    }}