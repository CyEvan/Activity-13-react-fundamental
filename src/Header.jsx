function Header ({title, count}) {
    return(
      <>
      <header className="container pt-5 text-center fw-bold">
            <h1 style={{color: (count > 5) ? `red` : `black`}}>{title}</h1>
       </header>
      </>
    )
}

export default Header;