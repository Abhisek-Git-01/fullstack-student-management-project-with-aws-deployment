const Home = () => {
  return (
    <div className="hero-section">

      <div className="overlay"></div>

      <div className="hero-content animate__animated animate__fadeInUp">

        <h1 className="hero-title">
          Student Management
          <span className="green-text"> System</span>
        </h1>

        <p className="hero-subtitle">
          Modern React + Spring Boot CRUD Application
        </p>

        <div className="hero-buttons">
          <button className="main-btn">
            Get Started
          </button>

          <button className="outline-btn">
            Explore
          </button>
        </div>

      </div>
    </div>
  );
};

export default Home;