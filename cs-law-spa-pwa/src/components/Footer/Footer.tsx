import './Footer.css'; 

const Footer: React.FC = () => {

  return (
    <footer className="footer">
      <div className="footer-logo">
        <a href="/" aria-label="Home">
          <img src="csa-logo.svg" className="footer-image" alt="The Law Firm of CONRAD SZEWCZYK & ASSOCIATES logo" />
        </a>
      </div>
      <div className="footer-info">
        <address>205 West Randolph Street - Suite 2150 Chicago, Illinois 60606</address>
        <p>Tel (312) 855-1411 <span aria-hidden="true" style={{ color:'#FFD700' }}>|</span> Fax (312) 855-1412  <span aria-hidden="true" style={{ color:'#FFD700' }}>|</span> info@cslawfirm.com</p>
        <p>&copy; 2024 CONRAD SZEWCZYK &amp; ASSOCIATES. All rights reserved.</p>
      </div>
    </footer>  
  );
};

export default Footer;
