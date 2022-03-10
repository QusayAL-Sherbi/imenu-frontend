
const Header = () => {
  return (
    // <!-- Start Landing Page -->
    <div className="landing-page">
      <div className="overlay"></div>
      <div className="container">
        <div className="header-aria">
          <div className="logo">
            <h2>Special Template</h2>
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
        <h1><span>Special Template</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae expedita aut, laborum delectus cupiditate atque corrupti facilis commodi saepe harum nisi nesciunt veritatis corporis nihil ratione ipsa reiciendis iste praesentium?</p>
      </div>
    </div>
    // <!-- End Landing Page -->
  )
}

export default Header;