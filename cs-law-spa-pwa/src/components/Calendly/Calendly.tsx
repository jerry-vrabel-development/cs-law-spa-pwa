import './Calendly.css'
import { InlineWidget } from 'react-calendly';

const Calendly: React.FC = () => {

  return (
    <div id="calendly" className="calendly-section">
      <h2>Schedule a Consultation</h2>
      <div className="inline-widget">
        <InlineWidget
          pageSettings={{
          backgroundColor: '#003366',
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: '#ffffff',
          textColor: 'ffffff'
          }}
          url="https://calendly.com/jerry-vrabel-development" />
      </div>
    </div>
  )
};

export default Calendly;
