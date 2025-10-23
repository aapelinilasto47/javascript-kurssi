
resultDiv = document.getElementById("result");



document.addEventListener("DOMContentLoaded", function() {
    showData();
    
});

function showData() {
    fetchProduct().then(allProducts => {
        resultDiv.innerHTML = "";
        for (let i = 1; i <= 20; i++) {

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
        button.className = "add-to-cart";
        button.id = "add-to-cart-" + product.id;
        button.textContent = "Add to Cart";
        button.addEventListener("click", function() {
            alert(`Added product ${product.id} to cart`);

        });
        buttonContainer.appendChild(button);


        const button2 = document.createElement("button");
        button2.className = "view-details";
        button2.id = "view-details-" + product.id;
        button2.textContent = "View Details";
        button2.addEventListener("click", function() {
            alert(`View details for product ${product.id}`);
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

    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.title;
    img.width = 200;
    detailContainer.appendChild(img);

    const title = document.createElement("h2");
    title.textContent = product.title;
    detailContainer.appendChild(title);

    const description = document.createElement("p");
    description.textContent = product.description;
    detailContainer.appendChild(description);

    const price = document.createElement("p");
    price.textContent = `$${product.price}`;
    detailContainer.appendChild(price);

    const backButton = document.createElement("button");
    backButton.textContent = "Back to Products";
   backButton.addEventListener("click", function() {
       resultDiv.innerHTML = "";
       showData();
       
   });
   detailContainer.appendChild(backButton);
}