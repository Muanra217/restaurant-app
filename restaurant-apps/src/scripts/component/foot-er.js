class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <p><span>WanRest</span> &copy; 2021</p>
        `;
  }
}

customElements.define('foot-er', Footer);
