class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
              <button id="hamburger" aria-label="Hamburger bar">☰</button>
              <nav class="navbar">
                <ul class="menu">
                    <li><a href="#/explore-rest" class="logo"><span>Wan</span>Rest</a></li>
                    <li><a href="#/explore-rest" class="list-item">Home</a></li>
                    <li><a href="#/like" class="list-item">Favorite</a></li>
                    <li><a href="https://www.linkedin.com/in/muanra217/" target="_blank" rel="noopener" class="list-item">About Us</a></li>
                </ul>
            </nav>
        `;
  }
}

customElements.define('app-bar', AppBar);
