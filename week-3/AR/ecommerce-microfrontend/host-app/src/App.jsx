import React, { Suspense } from "react";

const ProductList = React.lazy(() => import("productApp/ProductList"));
const Cart = React.lazy(() => import("cartApp/Cart"));

function App() {
  return (
    <div>

      <h1>Ecommerce Store</h1>

      <Suspense fallback={<div>Loading...</div>}>
        <ProductList />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Cart />
      </Suspense>

    </div>
  );
}

export default App;