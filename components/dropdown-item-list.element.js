var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
/**
 * This is the element that presents the list under
 * the dropdown button
 */
let DropdownItemList = class DropdownItemList extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * Items to be presented in this list
         */
        this.items = [];
    }
    dropdownItemTemplate(item, index) {
        return html `
      <div class="item">
        <input
          type="radio"
          id="item${index}"
          name="search-item"
          .value=${item}
        />
        <label for="item${index}">${item}</label>
      </div>
    `;
    }
    render() {
        return html `
      <div class="item-list">
        ${this.items.map(this.dropdownItemTemplate)}
      </div>
    `;
    }
};
DropdownItemList.styles = css `
    * {
      box-sizing: border-box;
    }
    :host {
      display: block;
    }
    .item-list {
      display: flex;
      flex-direction: column;
    }
    .item {
      display: block;
      position: relative;
    }
    .item input[type='radio'] {
      display: none;
    }
    .item label {
      display: inline-block;
      font-family: sans-serif;
      background-color: #ddd;
      padding: 0.5em 1em;
      width: 100%;
      border: solid 1px gray;
    }
    .item input[type='radio']:checked + label {
      background-color: #bbb;
    }
  `;
__decorate([
    property({ type: Array })
], DropdownItemList.prototype, "items", void 0);
DropdownItemList = __decorate([
    customElement('app-dropdown-item-list')
], DropdownItemList);
export { DropdownItemList };
//# sourceMappingURL=dropdown-item-list.element.js.map