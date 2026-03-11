function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <h2 style={styles.logo}>MiniCommerce</h2>
        <nav style={styles.nav}>
          <a href="#" style={styles.link}>Home</a>
          <a href="#" style={styles.link}>Products</a>
          <a href="#" style={styles.link}>About</a>
          <a href="#" style={styles.link}>Contact</a>
        </nav>
      </div>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: "#111827",
    color: "#ffffff",
    padding: "16px 24px",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    flexWrap: "wrap",
  },
  logo: {
    margin: 0,
    fontSize: "24px",
  },
  nav: {
    display: "flex",
    gap: "18px",
    flexWrap: "wrap",
  },
  link: {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "15px",
  },
};

export default Header;