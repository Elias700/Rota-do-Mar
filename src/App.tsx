
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import Welcome from './pages/Welcome/Welcome'
import Beaches from './pages/Beaches/Beaches'

import './App.css'

function App() {
  

  return (
    <>
      <Header />
      <Home/> 
      <Welcome />
      <Beaches />
      <SignUp />
      <SignIn />
    </>
  )
}

export default App
