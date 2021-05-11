/**
 * @license
 * SPDX-License-Identifier: MIT
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
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
@customElement('search-drop-down-filter-wc')
export class SearchDropdownFilter extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `;

  /**
   * Search input option (default).
   */
  @property({type: Boolean})
  search = true;

  /**
   * Dropdown option.
   */
  @property({type: Boolean})
  dropdown = true;

  /**
   * Datalist to be presented by dropdown.
   * It has a default value for demo purposes
   */
  @property({type: Array})
  datalist = ['one', 'two', 'three'];

  /**
   * Datalist to be presented by dropdown when "search filter mode".
   */
  @property({type: Array})
  filteredDatalist: string[] = [];

  /**
   * Item list option.
   */
  @property({type: Boolean})
  isItemListOpen = false;

  render() {
    return html`
      ${this.getDropdownButton(this.dropdown, this.search)}
      ${this.getSearchInput(this.search)}
      ${this.getDropdownItemList(this.isItemListOpen)}
    `;
  }

  toogleDropdownItemList(): void {
    this.isItemListOpen = !this.isItemListOpen;
    this.filteredDatalist = this.datalist;
  }

  filterDropdownItemList({detail}: CustomEvent) {
    const searchInputValue = detail.value;
    this.isItemListOpen = this.dropdown && this.search ? true : false;
    if (searchInputValue.length) {
      this.filteredDatalist = this.datalist.filter((item) =>
        item.includes(searchInputValue)
      );
      return;
    }
    this.filteredDatalist = [];
  }

  getDropdownItemList(isItemListOpen: boolean) {
    if (isItemListOpen) {
      return html`
        <app-dropdown-item-list
          .items=${this.filteredDatalist}
        ></app-dropdown-item-list>
      `;
    }
    return '';
  }

  getDropdownButton(dropdown: boolean, search: boolean) {
    if (dropdown && !search) {
      return html`
        <app-dropdown-button
          @click=${this.toogleDropdownItemList}
        ></app-dropdown-button>
      `;
    }
    return '';
  }

  getSearchInput(search: boolean) {
    if (search) {
      return html`
        <app-search-input
          @searchinput=${this.filterDropdownItemList}
        ></app-search-input>
      `;
    }
    return '';
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'search-drop-down-filter-wc': SearchDropdownFilter;
  }
}
