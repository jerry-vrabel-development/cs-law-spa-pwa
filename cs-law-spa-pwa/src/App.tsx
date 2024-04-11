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
      <Header />
      <Hero />
      <section>
        <LawServices />
        <About />
        <Calendly />
        <Contact />
      </section>
        <Footer />
    </>
  )
}

export default App
