import './Hero.css';
import '../../assets/cs.logo.svg';


const Hero: React.FC = () => {

  return (
    <section id="hero" className="hero">
      <div className='hero-svg'>
      <img src="csa-logo.svg" className="hero-image" alt="The Law Firm of CONRAD SZEWCZYK & ASSOCIATES" />
      </div>
      <a href="#calendly">
        <button className="button">Schedule a Consultation
          <span className="sr-only"> with The Law Firm of CONRAD SZEWCZYK & ASSOCIATES</span>
        </button>
      </a>
    </section>
  );
};

export default Hero;
