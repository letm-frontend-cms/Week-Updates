function HeroSection() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.textBlock}>
          <h1 style={styles.title}>Shop Smarter, Live Better</h1>
          <p style={styles.subtitle}>
            Explore top products, exciting deals, and a seamless shopping
            experience designed for everyone.
          </p>
          <div style={styles.actions}>
            <button style={styles.primaryButton}>Shop Now</button>
            <button style={styles.secondaryButton}>Explore More</button>
          </div>
        </div>
        <div style={styles.imageCard}>
          <div style={styles.imagePlaceholder}>Hero Image</div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    background: "linear-gradient(135deg, #eff6ff, #f8fafc)",
    padding: "70px 24px",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "32px",
    alignItems: "center",
  },
  textBlock: {},
  title: {
    fontSize: "48px",
    lineHeight: "1.2",
    marginBottom: "16px",
    color: "#111827",
  },
  subtitle: {
    fontSize: "18px",
    color: "#4b5563",
    marginBottom: "24px",
    maxWidth: "540px",
  },
  actions: {
    display: "flex",
    gap: "14px",
    flexWrap: "wrap",
  },
  primaryButton: {
    padding: "12px 22px",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "15px",
  },
  secondaryButton: {
    padding: "12px 22px",
    backgroundColor: "#ffffff",
    color: "#111827",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "15px",
  },
  imageCard: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  },
  imagePlaceholder: {
    height: "320px",
    borderRadius: "12px",
    backgroundColor: "#dbeafe",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#1d4ed8",
    fontSize: "20px",
    fontWeight: "600",
  },
};

export default HeroSection;