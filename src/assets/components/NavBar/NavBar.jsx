import styles from './NavBar.module.scss'

const NavBar = () => {


    return (

        <div className={styles.navs}>

        <div className={styles.logo

        }>
        </div>


            <nav>
                <ul>

                    <li><a href="#HomepageA">Homepage</a></li>
                    <li><a href="#BioA">Bio</a></li>
                    <li><a href="#LocationA">Location</a></li>
                    <li><a href="#ContactA" id='contactLi'>Contact</a></li>

                </ul>
            </nav>




        </div>
    )
}

export default NavBar