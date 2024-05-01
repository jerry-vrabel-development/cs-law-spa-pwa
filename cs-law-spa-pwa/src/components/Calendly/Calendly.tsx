import './Calendly.css'
import { GrSchedule } from "react-icons/gr";
import { InlineWidget } from 'react-calendly';

const Calendly: React.FC = () => {

  return (
    <section id="calendly" className="calendly-section">
      <h2><GrSchedule aria-label="Schedule a Consultation" className="calendly-section-icon" />Schedule a Consultation</h2>
      <div className='calendly-widget' >
        <div className="inline-widget">
          <InlineWidget
            pageSettings={{
            backgroundColor: '#003366',
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: '#ffffff',
            textColor: '#ffffff',
            }}
            url="https://calendly.com/jerry-vrabel-development" />
        </div>
        </div>
    </section>
  )
};

export default Calendly;
