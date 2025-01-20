import { Route, Routes } from "react-router"
import { Link } from "react-router"

import PricePage from "./assets/PricePage/pricePage"
import Homepage from "./assets/HomePage/homepage"

function App() {

  return (
    <div>
      <h1> Site Test</h1>
      <Link to="/PricePage">Prices</Link>

      <Routes>
        <Route path="" element={<Homepage />} />
        <Route path="/pricepage" element={<PricePage />} />


      </Routes>

    </div>
  )
}

export default App
