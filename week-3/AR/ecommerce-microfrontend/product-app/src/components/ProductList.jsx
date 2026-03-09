const products = [
  { id: 1, name: "Shoes", price: 50 },
  { id: 2, name: "T-Shirt", price: 20 },
  { id: 3, name: "Phone", price: 500 }
];

function ProductList() {
  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>${product.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}

    </div>
  );
}

export default ProductList;