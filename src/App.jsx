import { Route, Routes } from "react-router"

import PricePage from "./assets/PricePage/pricePage"
import Homepage from "./assets/HomePage/homepage"

import NavBar from "./assets/components/NavBar/NavBar"

function App() {

  return (
    <div>

      <NavBar />

      <Routes>
        <Route path="" element={<Homepage />} />
        <Route path="/pricepage" element={<PricePage />} />
      </Routes>

    </div>
  )
}

export default App
