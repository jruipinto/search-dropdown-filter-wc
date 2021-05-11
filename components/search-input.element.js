var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import './magnifier-icon.element';
/**
 * this is the search input element wich shows a magnifier on its left
 */
let SearchInput = class SearchInput extends LitElement {
    render() {
        return html `
      <app-magnifier-icon></app-magnifier-icon>
      <input
        type="search"
        @input=${(e) => {
            const searchInputEvt = new CustomEvent('searchinput', {
                detail: {
                    value: e.target.value,
                },
            });
            this.dispatchEvent(searchInputEvt);
        }}
      />
    `;
    }
};
SearchInput.styles = css `
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
SearchInput = __decorate([
    customElement('app-search-input')
], SearchInput);
export { SearchInput };
//# sourceMappingURL=search-input.element.js.map