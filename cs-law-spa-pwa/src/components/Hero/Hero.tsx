import './Hero.css';
import '../../assets/cs.logo.svg';


const Hero: React.FC = () => {

  return (
    <div id="hero" className="hero">
      <div className='hero-svg'>
      <img src="csa-logo.svg" className="hero-image" alt="The Law Firm of CONRAD SZEWCZYK & ASSOCIATES" />
      </div>
      <a href="#contactUs">
        <button className="button">Schedule a Consultation</button>
        </a>
  </div>
  );
};

export default Hero;
