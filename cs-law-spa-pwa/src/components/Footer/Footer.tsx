import './Footer.css'; 

const Footer: React.FC = () => {

  return (
    <div className="footer">
      <div className="footer-logo">
        <a href="/">
          <img src="CSlogo.svg" className="footer-image" />
        </a>
      </div>
      <div className="footer-info">
        <p>205 West Randolph Street - Suite 2150 Chicago, Illinois 60606</p>
        <p>Tel (312) 855-1411 | Fax (312) 855-1412  | info@cslawfirm.com</p>
        <p>&copy; 2024 CONRAD SZEWCZYK &amp; ASSOCIATES. All rights reserved.</p>
      </div>
    </div>  
  );
};

export default Footer;
