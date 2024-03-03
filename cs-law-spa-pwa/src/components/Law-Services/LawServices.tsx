import './LawServices.css';

const LawServices: React.FC = () => {
  const services = [
    {
      title: "Family Law",
      description: "Handling cases such as divorce, custody, and support disputes with compassion and understanding."
    },
    {
      title: "Criminal Defense",
      description: "Offering robust defense services for individuals accused of criminal activities."
    },
    {
      title: "Business Law",
      description: "Providing legal advice for business operations, including startup advice, contracts, and litigation."
    },
    {
      title: "Estate Planning",
      description: "Assisting in the creation of wills, trusts, and estate plans to protect and manage assets."
    },
    {
      title: "Personal Injury",
      description: "Representing individuals injured as a result of negligence, securing compensation for damages."
    }
    // Add more services as needed
  ];

  return (
    <div id="services" className="lawServices">
      <h2>Services We Offer</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LawServices;
