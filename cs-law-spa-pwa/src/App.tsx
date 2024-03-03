import Header from './components/Header/Header';
import Hero from './components/Hero/Hero'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <section>
        <div id="services" className="section">
          <h2>Services</h2>
        </div>
        <div id="about" className="section">
          <h2>About Our Firm</h2>
          <p>We are a team of experienced attorneys specializing in various legal fields to serve your needs.</p>
        </div>
        <div id="contact"className="section">
          <h2>Contact</h2>
          <p>Contact Us: 205 West Randolph Street - Suite 2150 Chicago, Illinois 60606</p>
        <p>Tel (312) 855-1411 | Fax (312) 855-1412  | info@ourlawfirm.com</p>
        </div>
      </section>
      <div className="footer">
        <div className="footer-logo">
          <a href="/">
            <img src="gray-logo.svg" className="footer-image" />
          </a>
        </div>
        <div className="footer-info">
          <p>205 West Randolph Street - Suite 2150 Chicago, Illinois 60606</p>
          <p>Tel (312) 855-1411 | Fax (312) 855-1412  | info@cslawfirm.com</p>
          <p>&copy; 2024 CONRAD SZEWCZYK &amp; ASSOCIATES. All rights reserved.</p>
        </div>
      </div>
    </>
  )
}

export default App
