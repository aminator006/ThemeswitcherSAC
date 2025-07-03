let template = document.createElement("template");
template.innerHTML = `
  <div class="theme-toggle-container">
    <button id="toggle-btn" title="Toggle Theme">🌙</button>
  </div>
`;

class ThemeToggle extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this.$btn = this._shadowRoot.querySelector("#toggle-btn");
  }

  connectedCallback() {
    this.$btn.addEventListener("click", () => {
      const isDark = document.body.classList.toggle("dark-theme");
      this.$btn.textContent = isDark ? "☀️" : "🌙";
    });
  }

  disconnectedCallback() {
    this.$btn.removeEventListener("click", this.toggleTheme);
  }
}

customElements.define("com-custom-theme-toggle", ThemeToggle);
