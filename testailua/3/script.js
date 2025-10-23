
resultDiv = document.getElementById("result");



document.addEventListener("DOMContentLoaded", function() {
    showData();
});

function showData() {
    fetchProduct().then(allProducts => {
        resultDiv.innerHTML = "";
        for (let i = 1; i <= 20; i++) {

            const productIndex = i - 1;
            
            const productContainer = document.createElement("div");
            productContainer.className = "product-container";
            resultDiv.appendChild(productContainer);

            const imgContainer = document.createElement("div");
            imgContainer.className = "img-container";
            productContainer.appendChild(imgContainer);
            const img = document.createElement("img");

            img.src = allProducts[productIndex].image;
            img.alt = allProducts[productIndex].title;
            img.id = `img-${i}`;
            img.width = 100;
            imgContainer.appendChild(img);
            

            let titleContainer, priceContainer;

            titleContainer = document.createElement("div");
            titleContainer.className = "title-container";
            productContainer.appendChild(titleContainer);
            const p = document.createElement("p");
            p.className = "product-info";
            p.id = `title-${i}`;
            if (allProducts[productIndex].title.length >= 60) {
                p.textContent = `${allProducts[productIndex].title.slice(0, 60)}...`;
            } else {
                p.textContent = allProducts[productIndex].title;
            }
            titleContainer.appendChild(p);

            priceContainer = document.createElement("div");
            priceContainer.className = "price-container";
            productContainer.appendChild(priceContainer);
            const price = document.createElement("p");
            price.className = "product-price";
            price.id = `price-${i}`;
            price.textContent = `$${allProducts[productIndex].price}`;
            priceContainer.appendChild(price);

            const buttonContainer = document.createElement("div");
            buttonContainer.className = "button-container";
            productContainer.appendChild(buttonContainer);
            const button = document.createElement("button");
            button.className = "add-to-cart";
            button.id = `add-to-cart-${i}`;
            button.textContent = "Add to Cart";
            buttonContainer.appendChild(button);

            const button2 = document.createElement("button");
            button2.className = "view-details";
            button2.id = `view-details-${i}`;
            button2.textContent = "View Details";
            buttonContainer.appendChild(button2);

            
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
document.getElementById("search-button").addEventListener("click", function() {
    const query = document.getElementById("search-input").value;
    searchProducts(query).then(filteredProducts => {
        resultDiv.innerHTML = "";
        if (filteredProducts.length > 0) {
            filteredProducts.forEach(product => {
                const productContainer = document.createElement("div");
                productContainer.className = "product-container";
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
                button.textContent = "Add to Cart";
                buttonContainer.appendChild(button);

                const button2 = document.createElement("button");
                button2.className = "view-details";
                button2.textContent = "View Details";
                buttonContainer.appendChild(button2);
            });
        } else {
            resultDiv.innerHTML = "<p>No products found.</p>";
        }
    });
});


