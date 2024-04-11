import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero'
import LawServices from './components/Law-Services/LawServices';
import About from './components/About/About';
import Calendly from './components/Calendly/Calendly';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css'

function App() {

  return (
    <>
      <HelmetProvider>
        <Helmet>
          { /* Standard metadata tags */}
          <title>Conrad Szewczyk & Associates</title>
          <meta name='description' content='Conrad Szewczyk & Associates, unwavering dedication to justice and a commitment to excellence in the legal profession.' />
          { /* End standard metadata tags */}
          { /* Facebook tags */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content='Conrad Szewczyk & Associates' />
          <meta property="og:description" content='Conrad Szewczyk & Associates, unwavering dedication to justice and a commitment to excellence in the legal profession.' />
          <meta property="og:image" content="/csa-logo.png" />
          <meta property="og:url" content="https://cs-law-spa-pwa.vercel.app/" />
          { /* End Facebook tags */}
          { /* Twitter tags */}
          <meta name="twitter:creator" content="" />
          <meta name="twitter:card" content="" />
          <meta name="twitter:title" content="" />
          <meta name="twitter:description" content="" />
          { /* End Twitter tags */}
        </Helmet>
        <Header />
        <Hero />
        <section>
          <LawServices />
          <About />
          <Calendly />
          <Contact />
        </section>
          <Footer />
      </HelmetProvider>
    </>
  )
}

export default App
