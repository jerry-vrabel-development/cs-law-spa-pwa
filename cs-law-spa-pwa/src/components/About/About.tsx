import './About.css';
import { IoInformationCircle } from "react-icons/io5";
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2><IoInformationCircle aria-label={t('about.about')} className="about-icon" />{t('about.about')}</h2>
        <p>{t('about.welcome')}</p>
        <p>{t('about.mission')}</p>
        <p>{t('about.moreThan')}</p>
        <p>{t('about.discover')}</p>
      </div>
    </section>
  );
};

export default About;
