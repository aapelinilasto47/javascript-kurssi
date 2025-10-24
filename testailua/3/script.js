
resultDiv = document.getElementById("result");
const searchContainer = document.getElementById("search-container");
const wishlist = [];

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
    buttonContainer.appendChild(wishlistButton);
}