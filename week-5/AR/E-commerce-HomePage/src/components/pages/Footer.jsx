function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}>© 2026 MiniCommerce. All rights reserved.</p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#111827",
    color: "#ffffff",
    padding: "18px 24px",
    marginTop: "40px",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    textAlign: "center",
  },
  text: {
    margin: 0,
    fontSize: "14px",
  },
};

export default Footer;