import './Hero.css'; 

const Hero: React.FC = () => {

  return (
    <div id="hero" className="hero">
    <h1>CONRAD SZEWCZYK & ASSOCIATES</h1>
      <p>Your partner in navigating legal challenges.</p>
      <a href="#contactUs">
        <button className="button">Schedule a Consultation</button>
        </a>
  </div>
  );
};

export default Hero;
