import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Welcome from './pages/Welcome/Welcome';
import Beaches from './pages/Beaches/Beaches';
import Footer from './components/Footer/Footer';
import Weather from './pages/Weather/Weather';
import Contact from './pages/Contact/Contact';
import Map from './pages/Map/Map';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './App.css';

function App() {
  const location = useLocation();

  const smoothScrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const header = document.querySelector('header');
    const offset = header instanceof HTMLElement ? header.offsetHeight : 0;
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  useEffect(() => {
    if (location.pathname === '/') {
      const hash = location.hash?.replace('#', '');
      if (hash) {
        smoothScrollToId(hash);
      }
    }
  }, [location]);
  return (
    <>
      <Header />
      <main>
        <Home />
        <Welcome />
        <Beaches />
        <Weather />
        <Map />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App;

