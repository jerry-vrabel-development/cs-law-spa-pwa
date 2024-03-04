import './Contact.css';

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
    <div id="contactUs" className="contact-section">
      <div className="contact-content">
        <h2>Contact us at Conrad Szewczyk &amp; Associates</h2>
        <address>
          {contactDetails.map(({ type, value, href }) => (
            <p key={type}>
              {type}: {href ? <a href={href}>{value}</a> : value}
            </p>
          ))}
        </address>
      </div>
    </div>
  );
};

export default Contact;
