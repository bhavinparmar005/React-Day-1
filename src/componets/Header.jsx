import "./Header.css";
function Header() {
    
  return (
    <>
      <nav class="navbar">
        <div class="navbar-container">
          <div class="logo">Luxe-Lounge</div>
          <button class="mobile-nav-toggle" aria-label="Toggle navigation" >
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </button>
          <ul class="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Header;
