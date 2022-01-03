import '../styles/Contact.css';

function Contact() {
  return (
    <address className="Contact" id="contact">
      <a title="Email" href="mailto:lindsaysofialopez@gmail.com"><i className="fas fa-envelope-open-text"></i></a>
      <a title="Phone" href="tel:+17602167222"><i className="fas fa-phone"></i></a>
      <a title="GitHub" href="https://github.com/lindsaysofia" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
      <a title="Resume" href="https://docs.google.com/document/d/e/2PACX-1vRuLRe4Xb9A1dSzz9mvgQZVpdmo9AP6a_sSL0WGG3CkzONXedKqJ3AUpI3A-8sGEwSogTA-MvNzKWvV/pub" target="_blank" rel="noreferrer"><i className="fas fa-file"></i></a>
    </address>
  );
}

export default Contact;