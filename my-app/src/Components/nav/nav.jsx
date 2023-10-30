import { NavLink } from 'react-router-dom';

function Nav(){

  return(
    <div>
      <nav className="navContainer">
        <p className="navContainer--name">Mathilde</p>

        <div className="linksContainer">
          <NavLink to="/" id='link' className={({isActive}) => isActive ? "active": ""}>Accueil</NavLink>
          <NavLink to="/projets" id='link' className={({isActive}) => isActive ? "active": ""}>Projets</NavLink>
          <NavLink to="/contact" id='link' className={({isActive}) => isActive ? "active": ""}>Contact</NavLink>
          <NavLink to="/cv" id='link' className={({isActive}) => isActive ? "active": ""}>Cv</NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Nav