import {customElement, property} from 'lit/decorators.js';
import {LitElement, html, css} from 'lit';
import './dropdown-icon.element';

/**
 * This is the dropdown button with dropdown icon
 * in its right side
 */
@customElement('app-dropdown-button')
export class DropdownButton extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      position: relative;
    }
    button {
      text-transform: uppercase;
      width: 100%;
      border: 0;
      background-color: gray;
      padding: 0.5em 1em;
    }
    button:hover {
      filter: brightness(1.2);
    }
    app-dropdown-icon {
      position: absolute;
      top: 0.2em;
      right: 0.2em;
    }
  `;

  /**
   * Search input option (default).
   */
  @property()
  inp = '';

  render() {
    return html`
      <button>dropdown</button>
      <app-dropdown-icon></app-dropdown-icon>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-dropdown-button': DropdownButton;
  }
}
