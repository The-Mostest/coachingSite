import { Link } from "react-router"
import './NavBar.scss'

const NavBar = () => {


    return (

        <div>

            <nav>
                <ul>

                    <li>
                        {/* <Link to="#HomepageA">Home</Link>
                        <Link to="BioA">Bio</Link> */}
                        <a href="#HomepageA">Homepage</a>
                        <a href="#BioA">Bio</a>
                    </li>


                </ul>
            </nav>




        </div>
    )
}

export default NavBar