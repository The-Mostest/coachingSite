import styles from './App.module.scss'

import NavBar from "./assets/components/NavBar/NavBar"

import Bio from "./assets/Pages/Bio/Bio"
import Contact from "./assets/Pages/Contact/Contact"
import Location from "./assets/Pages/Location/Location"
import Homepage from "./assets/Pages/HomePage/HomePage"

function App() {

  return (
    <div>

      <NavBar />

      <div id='HomepageA'>
        <Homepage id="HomepageA" />
      </div>

      <div id='BioA'>
        <Bio />
      </div>

      <div id='LocationA'>
        <Location />
      </div>

      <div id='ContactA'>
        <Contact />
      </div>


    </div>
  )
}

export default App
