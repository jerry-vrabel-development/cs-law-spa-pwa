import { I18nextProvider } from 'react-i18next';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero'
import LawServices from './components/Law-Services/LawServices';
import About from './components/About/About';
import Calendly from './components/Calendly/Calendly';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css'
import i18n from './components/i18n';

function App() {

  return (
    <I18nextProvider i18n={i18n}>
      <div role="main">
        <Header />
        <Hero />
        <section>
          <LawServices />
          <About />
          <Calendly />
          <Contact />
        </section>
        <Footer />
      </div>
      </I18nextProvider>
  )
}

export default App
