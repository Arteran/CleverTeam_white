import { useEffect } from 'react';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import About from '../components/About';
import { InteractiveStats } from '../components/InteractiveStats';
import { ServicesReveal } from '../components/ServicesReveal';
import Partners from '../components/Partners';
import Vacancies from '../components/Vacancies';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';

export default function Home() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Archivo:wght@400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => { document.head.removeChild(link); };
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ position: 'relative', zIndex: 10, backgroundColor: '#FFFFFF', flex: 1, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
        <Nav />
        <main>
          <Hero />
          <About />
          <InteractiveStats />
          <ServicesReveal />
          <Partners />
          <Vacancies />
          <Contacts />
        </main>
      </div>
      <Footer />
    </div>
  );
}
