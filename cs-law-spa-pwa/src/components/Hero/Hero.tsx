import './Hero.css'; 

const Hero: React.FC = () => {

  return (
    <div className="hero">
    <h1>CONRAD SZEWCZYK & ASSOCIATES</h1>
      <p>Your partner in navigating legal challenges.</p>
      <a href="#contact">
        <button className="button">Schedule a Consultation</button>
        </a>
  </div>
  );
};

export default Hero;
