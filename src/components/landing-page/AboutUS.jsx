
const AboutUS = () => {
  return (
    // <!-- Start About US Section -->
    <div className="container">
      <section className="about-us">
        <div className="info-box">
          <h2>About US</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur error doloribus explicabo obcaecati culpa.</p>
        </div>
        <div className="image-box">
          <img src={require('../../images/about-us-image.svg')} alt="" />
        </div>
      </section>
    </div>
    // {/* <!-- End About US Section --> */}
  )
}

export default AboutUS;