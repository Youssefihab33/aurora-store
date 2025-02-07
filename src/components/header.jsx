import logoSrc from "../assets/logo.png";

export default function Header() {
  return (
    <header className="container-lg d-flex flex-row justify-content-center align-items-center">
      
      <img className="navbar-brand logo" src={logoSrc} />
      <span className="logo-text">Aurora Gallery</span>

      <nav className="navbar navbar-expand-lg justify-content-center align-items-center">
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
              <a className="nav-item m-2">Home</a>
              <a className="nav-item m-2">About us!</a>
              <a className="nav-item m-2">Contact us!</a>
              <a className="nav-item m-2">Work with us!</a>
              <a className="nav-item m-2">more...</a>
          </ul>
        </div>
      </nav>
    </header>
  );
}
