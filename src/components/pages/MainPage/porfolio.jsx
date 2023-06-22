export default function HomePage() {
  return (
<head>
    <title>Product List</title>
    <style>
        /* CSS styles for the product list */
        .product {
            border: 1px solid #ccc;
            padding: 10px;
            margin-bottom: 10px;
        }
        .product img {
            max-width: 100px;
            max-height: 100px;
        }
        .product h3 {
            margin: 0;
        }
        .product p {
            margin: 5px 0;
        }
    </style>
</head>
<body>
    <h1>Product List</h1>

    <ul id="productList"></ul>

    <script>
        // Sample product data
        constproducts = [
            {
                image: "product1.jpg",
                name: "Product 1",
                description: "Description of Product 1.",
                price: "$10.99"
            },
            {
                image: "product2.jpg",
                name: "Product 2",
                description: "Description of Product 2.",
                price: "$19.99"
            },
            {
                image: "product3.jpg",
                name: "Product 3",
                description: "Description of Product 3.",
                price: "$15.49"
            }
        ];

        // Generate the product list dynamically
        constproductList = document.getElementById("productList");

        products.map(function(product) {
            constli = document.createElement("li");
            li.classList.add("product");

            constimage = document.createElement("img");
            image.src = product.image;
            image.alt = product.name;

            constname = document.createElement("h3");
            name.textContent = product.name;

            constdescription = document.createElement("p");
            description.textContent = product.description;

            constprice = document.createElement("p");
            price.textContent = "Price: " + product.price;

            li.appendChild(image);
            li.appendChild(name);
            li.appendChild(description);
            li.appendChild(price);

            productList.appendChild(li);
        });
    </script>
</body>
  );
}
