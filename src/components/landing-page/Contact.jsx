const Contact = () => {
  return (
    <section className="contact-us">
      <div className="overlay"></div>
      <div className="container">
        <h2>Contact US</h2>
      </div>
      
      <form>
        <div className="left">
          <input type="text" name="username" id="" placeholder="Your Name" />
          <input type="email" name="email" id="" placeholder="Your Email" />
          <input
            type="number"
            name="phonenumber"
            id=""
            placeholder="Phone Number"
          />
          <input type="text" name="subject" id="" placeholder="Subject" />
        </div>
        <div className="right">
          <div className="right">
            <textarea name="message" placeholder="Type Your Message"></textarea>
            <input type="submit" value="Send" />
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;
