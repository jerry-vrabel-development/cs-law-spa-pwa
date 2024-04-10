import './Calendly.css'
import { InlineWidget } from 'react-calendly';

const Calendly: React.FC = () => {

  return (
    <div id="calendly" className="">
      <div className="inline-widget">
        <InlineWidget url="https://calendly.com/jerry-vrabel-development" />
      </div>
    </div>
  )
};

export default Calendly;
