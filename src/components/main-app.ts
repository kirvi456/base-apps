import { LitElement, html, css, property, customElement } from 'lit-element';

@customElement("main-app")
export class MainApp extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        height: 100%;
        width: 100%;
      }
    `,
  ];

  @property()
  appTitle = "Auctions";

  render() {
    return html` <p>fjdlksfjd</p>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "main-app": MainApp;
  }
}