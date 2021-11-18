class JumboTron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="hero" id="hero">
      <div class="hero-content">
          <h1 tabindex="0">Wanmin <span>Restaurants</span></h1>
          <p tabindex="0">Discover famous restaurant known in the town.</p>
          <button class="explore-button" onclick="window.location.href='#resto'"">Explore Now!</button>
      </div>
  </section>
        `;
  }
}

customElements.define('jumbo-tron', JumboTron);
