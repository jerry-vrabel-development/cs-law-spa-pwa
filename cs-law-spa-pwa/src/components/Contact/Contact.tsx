import './Contact.css';
import { FaPhone } from "react-icons/fa6";

interface ContactInfo {
  type: string;
  value: string;
  href?: string;
}

const contactDetails: ContactInfo[] = [
  {
    type: 'Address',
    value: '205 West Randolph Street - Suite 2150 Chicago, Illinois 60606',
  },
  {
    type: 'Tel',
    value: '(312) 855-1411',
    href: 'tel:+13128551411',
  },
  {
    type: 'Fax',
    value: '(312) 855-1412',
  },
  {
    type: 'Email',
    value: 'info@ourlawfirm.com',
    href: 'mailto:info@ourlawfirm.com',
  },
];

const Contact: React.FC = () => {
  return (
    <div id="contactUs" className="contact">
      <div className="contact-content">
        <h2><FaPhone className='contact-icon' />Contact</h2>
        <div className="contact-card">
        <img src="csa-logo.svg" className="contact-image" alt="The Law Firm of CONRAD SZEWCZYK & ASSOCIATES" />
        <address>
          {contactDetails.map(({ type, value, href }) => (
            <p key={type}>
              {type}: {href ? <a href={href}>{value}</a> : value}
            </p>
          ))}
        </address>
        </div>
      </div>
    </div>
  );
};

export default Contact;
