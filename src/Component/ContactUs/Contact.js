import './contact.css';
import Form from './Form';
const Contact = () => {
  const contactDetails = [
    {
      icone: "fa-solid fa-house",
      title: "Our Location",
      Dtl: "99 S.t Jomblo Park Pekanbaru 28292. Indonesia",
    },
    {
      icone: "fa-solid fa-tty",
      title: "Phone Number",
      Dtl: "(+62)81 414 257 9980",
    },
    {
      icone: "fa-solid fa-envelope",
      title: "Email Address",
      Dtl: "info@yourdomain.com",
    },
  ];
  return (
    <div className="Contact">
      <div className='LeftSide'>
        <h4>Contact us</h4>
        <h1>GET IN TOUCH WITH US</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
          tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua
          minim veniam quis nostrud exercitation ullamco
        </p>
        <div className='InfoContact'>
          {contactDetails.map((item) => {
            return (
              <div className='SomeInfo'>
                <div className='icone'>
                  <i class={item.icone} ></i>
                </div>
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.Dtl}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className='rightSide'>
        <Form/>
      </div>
    </div>
  );
};

export default Contact;
