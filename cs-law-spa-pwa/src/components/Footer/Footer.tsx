import './Footer.css';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-logo">
        <a href="/" aria-label={t('footer.home')}>
          <img src="csa-logo.svg" className="footer-image" alt={t('footer.altText')} />
        </a>
      </div>
      <div className="footer-info">
        <p>{t('footer.tel')} (312) 855-1411 <span aria-hidden="true" style={{ color:'#FFD700' }}>|</span> {t('footer.fax')} (312) 855-1412  <span aria-hidden="true" style={{ color:'#FFD700' }}>|</span> info@cslawfirm.com</p>
        <p>&copy; {t('footer.copyRight')} CONRAD SZEWCZYK &amp; ASSOCIATES. {t('footer.allRightsReserved')}</p>
      </div>
    </footer>  
  );
};

export default Footer;
