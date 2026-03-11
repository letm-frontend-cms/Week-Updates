const products = [
  { id: 1, name: "Running Shoes", price: "$50", category: "Footwear" },
  { id: 2, name: "Smart Watch", price: "$120", category: "Electronics" },
  { id: 3, name: "Wireless Earbuds", price: "$80", category: "Accessories" },
  { id: 4, name: "Backpack", price: "$35", category: "Lifestyle" },
];

function FeaturedProducts() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>Featured Products</h2>
          <p style={styles.subtitle}>
            A quick look at some of our most popular picks.
          </p>
        </div>

        <div style={styles.grid}>
          {products.map((product) => (
            <div key={product.id} style={styles.card}>
              <div style={styles.image}>Product Image</div>
              <p style={styles.category}>{product.category}</p>
              <h3 style={styles.productName}>{product.name}</h3>
              <p style={styles.price}>{product.price}</p>
              <button style={styles.button}>View Product</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "64px 24px",
    backgroundColor: "#ffffff",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  header: {
    textAlign: "center",
    marginBottom: "32px",
  },
  title: {
    fontSize: "32px",
    marginBottom: "10px",
    color: "#111827",
  },
  subtitle: {
    color: "#6b7280",
    margin: 0,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "24px",
  },
  card: {
    border: "1px solid #e5e7eb",
    borderRadius: "14px",
    padding: "18px",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
  },
  image: {
    height: "160px",
    borderRadius: "10px",
    backgroundColor: "#f3f4f6",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#6b7280",
    marginBottom: "14px",
  },
  category: {
    fontSize: "13px",
    color: "#2563eb",
    marginBottom: "8px",
  },
  productName: {
    margin: "0 0 8px 0",
    color: "#111827",
  },
  price: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "14px",
    color: "#111827",
  },
  button: {
    padding: "10px 16px",
    backgroundColor: "#111827",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default FeaturedProducts;