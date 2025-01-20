import { Link } from "react-router"
import './NavBar.scss'

const NavBar = () => {


    return (

        <div>

            <nav>
                <ul>

                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/pricepage">Price</Link>
                    </li>

                </ul>
            </nav>




        </div>
    )
}

export default NavBar