
resultDiv = document.getElementById("result");



document.addEventListener("DOMContentLoaded", function() {
    showData();
});

function showData() {
    fetchProduct().then(allProducts => {
        resultDiv.innerHTML = "";
        for (let i = 1; i <= 20; i++) {
            const productContainer = document.createElement("div");
            productContainer.className = "product-container";
            resultDiv.appendChild(productContainer);

            const imgContainer = document.createElement("div");
            imgContainer.className = "img-container";
            productContainer.appendChild(imgContainer);
            const img = document.createElement("img");
            
            img.src = allProducts[i - 1].image;
            img.alt = allProducts[i - 1].title;
            img.width = 100;
            imgContainer.appendChild(img);
            

            let titleContainer, priceContainer;

            titleContainer = document.createElement("div");
            titleContainer.className = "title-container";
            productContainer.appendChild(titleContainer);
            const p = document.createElement("p");
            p.className = "product-info";
            if (allProducts[i - 1].title.length >= 60) {
                p.textContent = `${allProducts[i - 1].title.slice(0, 60)}...`;
            } else {
                p.textContent = allProducts[i - 1].title;
            }
            const link = document.createElement("a");
            link.href = "product.html?id=" + allProducts[i - 1].id;
            link.appendChild(p);
            titleContainer.appendChild(link);

            priceContainer = document.createElement("div");
            priceContainer.className = "price-container";
            productContainer.appendChild(priceContainer);
            const price = document.createElement("p");
            price.className = "product-price";
            price.textContent = `$${allProducts[i - 1].price}`;
            priceContainer.appendChild(price);

            const buttonContainer = document.createElement("div");
            buttonContainer.className = "button-container";
            productContainer.appendChild(buttonContainer);
            const button = document.createElement("button");
            button.className = "add-to-cart";
            button.textContent = "Add to Cart";
            buttonContainer.appendChild(button);
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

