function PromoBanner() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Limited Time Offer</h2>
        <p style={styles.text}>
          Get up to 30% off on selected products this week. Shop now and save more.
        </p>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "50px 24px",
    backgroundColor: "#111827",
    color: "#ffffff",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    textAlign: "center",
  },
  title: {
    fontSize: "30px",
    marginBottom: "10px",
  },
  text: {
    margin: 0,
    color: "#d1d5db",
    fontSize: "16px",
  },
};

export default PromoBanner;
