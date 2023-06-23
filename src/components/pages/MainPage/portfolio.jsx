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

    
</body>
  );
}
