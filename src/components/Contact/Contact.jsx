function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-left">
          <h2>Let's Work Together 🚀</h2>
          <p>
            Have a project in mind or want to collaborate? 
            Feel free to send me a message. I’m always open 
            to discussing new opportunities.
          </p>

          <div className="contact-info">
            <p><strong>Email:</strong> sanu99901singh@gmail.com</p>
            <p><strong>Location:</strong> India</p>
          </div>
        </div>

        <div className="contact-right">
          <form className="contact-form">
            <div className="input-group">
              <input type="text" required />
              <label>Your Name</label>
            </div>

            <div className="input-group">
              <input type="email" required />
              <label>Your Email</label>
            </div>

            <div className="input-group">
              <textarea rows="5" required></textarea>
              <label>Your Message</label>
            </div>

            <button type="submit" className="contact-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
