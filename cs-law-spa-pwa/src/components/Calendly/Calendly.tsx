import './Calendly.css'
import { GrSchedule } from "react-icons/gr";
import { InlineWidget } from 'react-calendly';
import { useTranslation } from 'react-i18next';

const Calendly: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="calendly" className="calendly-section">
      <h2><GrSchedule aria-label={t('calendly.scheduleConsultation')} className="calendly-section-icon" />{t('calendly.scheduleConsultation')}</h2>
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
