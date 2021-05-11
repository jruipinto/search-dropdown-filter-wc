/**
 * @license
 * SPDX-License-Identifier: MIT
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './components/dropdown-item-list.element';
import './components/search-input.element';
import './components/dropdown-button.element';
/**
 * This is a WebComponent made with lit with configurable option
 * to show a search input, dropdown or search with dropdown filter
 *
 * - if property **search** is set then it looks like a normal input with magnifier icon on left.
 * - if property **dropdown** is set then it behaves like dropdown (with some dummy radio group) with drop-down icon on right
 * - if both **search** and **dropdown** property are set then it will be a drop-down search filtering
 */
let SearchDropdownFilter = class SearchDropdownFilter extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * Search input option (default).
         */
        this.search = true;
        /**
         * Dropdown option.
         */
        this.dropdown = true;
        /**
         * Datalist to be presented by dropdown.
         * It has a default value for demo purposes
         */
        this.datalist = ['one', 'two', 'three'];
        /**
         * Datalist to be presented by dropdown when "search filter mode".
         */
        this.filteredDatalist = [];
        /**
         * Item list option.
         */
        this.isItemListOpen = false;
    }
    render() {
        return html `
      ${this.getDropdownButton(this.dropdown, this.search)}
      ${this.getSearchInput(this.search)}
      ${this.getDropdownItemList(this.isItemListOpen)}
    `;
    }
    toogleDropdownItemList() {
        this.isItemListOpen = !this.isItemListOpen;
        this.filteredDatalist = this.datalist;
    }
    filterDropdownItemList({ detail }) {
        const searchInputValue = detail.value;
        this.isItemListOpen = this.dropdown && this.search ? true : false;
        if (searchInputValue.length) {
            this.filteredDatalist = this.datalist.filter((item) => item.includes(searchInputValue));
            return;
        }
        this.filteredDatalist = [];
    }
    getDropdownItemList(isItemListOpen) {
        if (isItemListOpen) {
            return html `
        <app-dropdown-item-list
          .items=${this.filteredDatalist}
        ></app-dropdown-item-list>
      `;
        }
        return '';
    }
    getDropdownButton(dropdown, search) {
        if (dropdown && !search) {
            return html `
        <app-dropdown-button
          @click=${this.toogleDropdownItemList}
        ></app-dropdown-button>
      `;
        }
        return '';
    }
    getSearchInput(search) {
        if (search) {
            return html `
        <app-search-input
          @searchinput=${this.filterDropdownItemList}
        ></app-search-input>
      `;
        }
        return '';
    }
};
SearchDropdownFilter.styles = css `
    :host {
      display: block;
    }
  `;
__decorate([
    property({ type: Boolean })
], SearchDropdownFilter.prototype, "search", void 0);
__decorate([
    property({ type: Boolean })
], SearchDropdownFilter.prototype, "dropdown", void 0);
__decorate([
    property({ type: Array })
], SearchDropdownFilter.prototype, "datalist", void 0);
__decorate([
    property({ type: Array })
], SearchDropdownFilter.prototype, "filteredDatalist", void 0);
__decorate([
    property({ type: Boolean })
], SearchDropdownFilter.prototype, "isItemListOpen", void 0);
SearchDropdownFilter = __decorate([
    customElement('search-drop-down-filter-wc')
], SearchDropdownFilter);
export { SearchDropdownFilter };
//# sourceMappingURL=search-drop-down-filter-wc.element.js.map