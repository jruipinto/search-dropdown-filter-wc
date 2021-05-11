var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, property } from 'lit/decorators.js';
import { LitElement, html, css } from 'lit';
import './dropdown-icon.element';
/**
 * This is the dropdown button with dropdown icon
 * in its right side
 */
let DropdownButton = class DropdownButton extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * Search input option (default).
         */
        this.inp = '';
    }
    render() {
        return html `
      <button>dropdown</button>
      <app-dropdown-icon></app-dropdown-icon>
    `;
    }
};
DropdownButton.styles = css `
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
__decorate([
    property()
], DropdownButton.prototype, "inp", void 0);
DropdownButton = __decorate([
    customElement('app-dropdown-button')
], DropdownButton);
export { DropdownButton };
//# sourceMappingURL=dropdown-button.element.js.map