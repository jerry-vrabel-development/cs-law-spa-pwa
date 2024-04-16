import './LawServices.css';
import { FaScaleBalanced, FaShield } from "react-icons/fa6";
import { GiFamilyHouse } from "react-icons/gi";
import { MdAccountBalance, MdOutlineRealEstateAgent } from "react-icons/md";
import { FaUserInjured } from "react-icons/fa";

const LawServices: React.FC = () => {
  return (
    <div id="law-services-wrapper" className="law-services-wrapper">
      <div id="law-services" className="law-services">
        <h1><FaScaleBalanced className='law-service-icon' /> Law Services</h1>
        <ul>
          <li><a href='#family-law' className=''>Family Law</a></li>
          <li><a href='#criminal-defense' className=''>Criminal Defense</a></li>
          <li><a href='#estate-planning' className=''>Estate Planning</a></li>
          <li><a href='#personal-injury' className=''>Personal Injury</a></li>
        </ul>
      </div>
      <div id="family-law" className="family-law">
      <h2><GiFamilyHouse className="law-service-icon" />Family Law</h2>
      </div>
      <div id="criminal-defense" className="criminal-defense">
      <h2><FaShield className="law-service-icon" />Criminal Defense</h2>
      </div>
      <div id="business-law" className="business-law">
      <h2><MdAccountBalance className="law-service-icon" />Business Law</h2>
      </div>
      <div id="estate-planning" className="estate-planning">
      <h2><MdOutlineRealEstateAgent className="law-service-icon" />Estate Planning</h2>
      </div>
      <div id="personal-injury" className="personal-injury">
      <h2><FaUserInjured className="law-service-icon"/>Personal Injury</h2>
      </div>
    </div>
  );
};

export default LawServices;
