import { useTranslation } from 'react-i18next';
import './Hero.css';
import '../../assets/cs.logo.svg';


const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="hero" className="hero">
      <div className='hero-svg'>
      <img src="csa-logo.svg" className="hero-image" alt={t('hero.logoAlt')} />
      </div>
      <a href="#calendly">
        <button className="button">{t('hero.button')}
          <span className="sr-only"> {t('hero.srText')}</span>
        </button>
      </a>
    </section>
  );
};

export default Hero;
