

function Nav(){

  return(
    <div>
      <nav className="navContainer">
        <p className="navContainer--name">Mathilde</p>

        <div className="linksContainer">
          <a href="/" >Accueil</a>
          <a href="/projets" >Projets</a>
          <a href="/contact" >Contact</a>
          <a href="/cv" >Cv</a>
        </div>
      </nav>
    </div>
  )
}

export default Nav