import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

/**
 * This is the element that contains the SVG
 * for the dropdown icon on its rigt side
 */
@customElement('app-dropdown-icon')
export class DropdownIcon extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `;

  render() {
    return html`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M7 10l5 5 5-5H7z" />
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-dropdown-icon': DropdownIcon;
  }
}
