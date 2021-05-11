import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import './magnifier-icon.element';

/**
 * this is the search input element wich shows a magnifier on its left
 */
@customElement('app-search-input')
export class SearchInput extends LitElement {
  static styles = css`
    :host {
      display: block;
      position: relative;
    }
    input[type='search'] {
      width: 100%;
      padding: 0.5em 1em;
      padding-left: 2.5em;
    }
    app-magnifier-icon {
      position: absolute;
      top: 0.2em;
      left: 0.2em;
    }
  `;

  render() {
    return html`
      <app-magnifier-icon></app-magnifier-icon>
      <input
        type="search"
        @input=${(e: Event) => {
          const searchInputEvt = new CustomEvent('searchinput', {
            detail: {
              value: (e.target as HTMLInputElement).value,
            },
          });
          this.dispatchEvent(searchInputEvt);
        }}
      />
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-search-input': SearchInput;
  }
}
