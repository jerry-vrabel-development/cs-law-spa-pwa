import './Hero.css';
import '../../assets/cs.logo.svg';


const Hero: React.FC = () => {
    // Define animation variants
    const textVariants = {
      hidden: { opacity: 0, fill: "yellow" },
      visible: { 
        opacity: 1,
        scale: 4,
        fill: "white",
        stroke:"black",
        strokeWidth: ".5",
        transition: {
          duration: 0.5,
          ease: "easeInOut",
        },
      },
    };

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
