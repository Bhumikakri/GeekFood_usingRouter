const Form = () => {
  return (
    <div className="form">
      <input type="text" placeholder="Your Name"/>
      <input type="text" placeholder="Your Email" />
      <input type="text" placeholder="Your Phone" />
      <textarea placeholder="Your Message"></textarea>
      <button>Send Message</button>
    </div>
  );
};

export default Form;
