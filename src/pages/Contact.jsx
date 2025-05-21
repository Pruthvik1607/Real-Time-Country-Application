export const Contact = () => {

    const handleFormSubmit = (formData)=>{
        
        const formInputData = Object.fromEntries(formData.entries());
        console.log(formInputData);
    };




  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>

        <div className="contact-wrapper container">
      <form action={handleFormSubmit} >
        <input
          className="form-control"
          type="text"
          name="username"
          placeholder="Enter your name"
          required
          autoComplete="off"
        />

        <input
          type="text"
          name="email"
          required
          className="form-control"
          placeholder="Enter your email"
          autoComplete="off"
        />

        <textarea
          name="message"
          className="form-control"
          rows="10"
          placeholder="Enter your message"
          required
        ></textarea>
        <div className="butn">
        <button className="buttn" type="submit" value="send">Send</button>
        </div>
        
      </form>
      </div>
    </section>
  );
};
