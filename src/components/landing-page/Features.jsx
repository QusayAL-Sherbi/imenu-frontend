
const Features = () => {
  return (
    <section className="features">
      <h2>Features</h2>
      <div className="container">
        <div className="feat-box">
          <img src={require('../../images/programming.svg')} alt="" />
          <h4>Easy To Create</h4>
          <p>We Are Creative, We Are Creative, We Are Creative, We Are Creative, We Are Creative, We Are Creative</p>
        </div>
        <div className="feat-box">
          <img src="./images/advertising.svg" alt="" />
          <h4>Avaliable 24/7</h4>
          <p>We Are Creative, We Are Creative, We Are Creative, We Are Creative, We Are Creative, We Are Creative</p>
        </div>
        <div className="feat-box">
          <img src="./images/hosting-icon.svg" alt="" />
          <h4>Modern Designs</h4>
          <p>We Are Creative, We Are Creative, We Are Creative, We Are Creative, We Are Creative, We Are Creative</p>
        </div>
        <div className="clear-fix"></div>
      </div>
    </section>
  )
}

export default Features;