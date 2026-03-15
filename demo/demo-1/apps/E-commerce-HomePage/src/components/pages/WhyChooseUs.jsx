const items = [
  {
    title: "Quality Products",
    description: "Carefully selected items that meet everyday needs and expectations.",
  },
  {
    title: "Fast Delivery",
    description: "Reliable shipping and smooth order handling for a better experience.",
  },
  {
    title: "Secure Payments",
    description: "Trusted checkout flow with a simple and secure payment process.",
  },
];

function WhyChooseUs() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>Why Choose Us</h2>
          <p style={styles.subtitle}>
            Built to give customers a simple and enjoyable shopping journey.
          </p>
        </div>

        <div style={styles.grid}>
          {items.map((item) => (
            <div key={item.title} style={styles.card}>
              <h3 style={styles.cardTitle}>{item.title}</h3>
              <p style={styles.cardText}>{item.description}</p>
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
    backgroundColor: "#f9fafb",
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
    margin: 0,
    color: "#6b7280",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "20px",
  },
  card: {
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "14px",
    padding: "22px",
  },
  cardTitle: {
    marginBottom: "10px",
    color: "#111827",
  },
  cardText: {
    margin: 0,
    color: "#6b7280",
    lineHeight: "1.6",
  },
};

export default WhyChooseUs;
