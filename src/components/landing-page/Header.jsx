
const Header = () => {
  return (
    // <!-- Start Landing Page -->
    <div className="landing-page">
      <div className="overlay"></div>
      <div className="container">
        <div className="header-aria">
          <div className="logo">
            <h2>iMenu</h2>
          </div>
          <div className="links-container">
            <ul className="links">
              <li><a href="#" className="active">Home</a></li>
              <li><a href="#" data-section=".about-us">About US</a></li>
              <li><a href="#" data-section=".features">Features</a></li>
              <li><a href="#" data-section=".works">Works</a></li>
              <li><a href="#" data-section=".testimonials">Testimonials</a></li>
              <li><a href="#" data-section=".contact">contact</a></li>
            </ul>
            <button className="toggle-menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
      <div className="introduction-text">
        <h1><span>iMenu</span></h1>
        <p>Build Your Own Menu For Your Resturant's</p>
      </div>
    </div>
    // <!-- End Landing Page -->
  )
}

export default Header;