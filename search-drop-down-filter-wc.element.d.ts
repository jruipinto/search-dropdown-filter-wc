/**
 * @license
 * SPDX-License-Identifier: MIT
 */
import { LitElement } from 'lit';
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
export declare class SearchDropdownFilter extends LitElement {
    static styles: import("lit").CSSResultGroup;
    /**
     * Search input option (default).
     */
    search: boolean;
    /**
     * Dropdown option.
     */
    dropdown: boolean;
    /**
     * Datalist to be presented by dropdown.
     * It has a default value for demo purposes
     */
    datalist: string[];
    /**
     * Datalist to be presented by dropdown when "search filter mode".
     */
    filteredDatalist: string[];
    /**
     * Item list option.
     */
    isItemListOpen: boolean;
    render(): import("lit-html").TemplateResult<1>;
    toogleDropdownItemList(): void;
    filterDropdownItemList({ detail }: CustomEvent): void;
    getDropdownItemList(isItemListOpen: boolean): import("lit-html").TemplateResult<1> | "";
    getDropdownButton(dropdown: boolean, search: boolean): import("lit-html").TemplateResult<1> | "";
    getSearchInput(search: boolean): import("lit-html").TemplateResult<1> | "";
}
declare global {
    interface HTMLElementTagNameMap {
        'search-drop-down-filter-wc': SearchDropdownFilter;
    }
}
//# sourceMappingURL=search-drop-down-filter-wc.element.d.ts.map