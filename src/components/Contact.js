import '../styles/Contact.css';

function Contact() {
  return (
    <address className="Contact" id="contact">
      <a title="Email" href="mailto:lindsaysofialopez@gmail.com"><i className="fas fa-envelope-open-text"></i></a>
      <a title="Phone" href="tel:+17602167222"><i className="fas fa-phone"></i></a>
      <a title="GitHub" href="https://github.com/lindsaysofia" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
      <a title="Resume" href="https://drive.google.com/file/d/1tTiTqdHH2eKSvr3xtg-K_4xyxnjuBo5d/view?usp=sharing" target="_blank" rel="noreferrer"><i className="fas fa-file"></i></a>
    </address>
  );
}

export default Contact;