import './About.css';
import { IoInformationCircle } from "react-icons/io5";

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2><IoInformationCircle aria-label="About" className="about-icon" />About</h2>
        <p> Welcome to Conrad Szewczyk & Associates. At Conrad Szewczyk & Associates, we pride ourselves on our unwavering dedication to justice and our commitment to excellence in the legal profession. Founded in 1995 by Conrad Szewczyk, a renowned legal expert with over 30 years of experience, our firm has grown to encompass a diverse team of attorneys specializing in various legal fields, including corporate law, intellectual property, family law, criminal defense, and civil litigation.</p>
        <p>Our mission is to provide comprehensive legal solutions that meet our clients' needs in an ever-evolving legal landscape. We believe in a client-first approach, ensuring personalized attention, transparency, and unwavering support throughout the legal process. Our team leverages the latest in legal technology, innovative strategies, and a deep understanding of the law to achieve the best possible outcomes for our clients.</p>
        <p>Conrad Szewczyk & Associates is more than just a law firm; we are a trusted partner in navigating the complexities of the legal system. Whether you're facing a challenging legal battle or seeking advice on legal matters, our team is here to guide you every step of the way.</p>
        <p>Discover the difference dedication, expertise, and a client-focused approach can make in your legal journey.</p>
      </div>
    </section>
  );
};

export default About;
