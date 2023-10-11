function Contact() {
    return (
        <div className="contact section">
            <div className="contact__text">
                <h2>Get In Touch With Our <br />
                    Experts Today!
                </h2>
                <p>Consult our flight experts through this contact form and our  <br />
                    dedicated team will get back to you as soon as possible.Your input <br />
                    is valuable to us and we look forward to assisting you.
                </p>
            </div>
            <div className="contact__form">
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label> <br />
                        <input type="text" name="name" id="name" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">E-mail address</label> <br />
                        <input type="text" name="email" id="email" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="number">Phone number</label> <br />
                        <input type="number" name="number" id="number" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label> <br />
                        <textarea name="message" id="message" cols="30" rows="10"></textarea>
                    </div>
                    <button className="button">Submit</button>
                </form>
            </div>
            <a href="#" className="button contact_hidden">Contact us</a>
        </div>
    )
}

export default Contact;