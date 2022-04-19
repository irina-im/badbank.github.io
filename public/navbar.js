function NavBar(props){

  props.user;

  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
    <a className="navbar-brand">BadBank</a>
    <button className="navbar-toggler" type="button" aria-current="page" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#/home/" title="General information about the bank">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/CreateAccount/" title="Create a new account">Create Account</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/login/" title="Log in">Log in</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/deposit/" title="Make a deposit">Deposit</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/withdraw/" title="Make a withdrawal">Withdraw</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#/alldata/" title="View all data in store">All Data</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#/logout/" title="Log out">Log out</a>
        </li>
      </ul>
    </div>
    </div>
    {props.user.email}
    </nav>
    </>
  )
}