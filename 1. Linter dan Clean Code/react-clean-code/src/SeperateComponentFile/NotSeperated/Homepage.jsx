const Navbar = () => {
  return (
    <nav>
      <h1>Navbar</h1>
    </nav>
  );
};

const Content = () => {
  return (
    <main>
      <p>Content</p>
    </main>
  );
};

const Footer = () => {
  return (
    <footer>
      <h3>Footer</h3>
    </footer>
  );
};

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Content />
      <Footer />
    </>
  );
};

export default Homepage;