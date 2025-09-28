import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Welcome from './pages/Welcome/Welcome';
import Beaches from './pages/Beaches/Beaches';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Welcome />
        <Beaches />
      </main>
    </>
  )
}

export default App;
