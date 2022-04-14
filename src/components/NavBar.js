import "../stylesheets/NavBar.css"

function NavBar(){
    return(
        <header id="header">
			<nav id="navbar">
				<ul className="nav__links">
					<li ><a className="nav-link" href="#welcome-section">About</a></li>
					<li ><a className="nav-link" href="#projects">Work</a></li>
				</ul>
			</nav>
			<a className="contact" href="#contact"><button>Contact</button></a>
		</header>

    );
}
export default NavBar;