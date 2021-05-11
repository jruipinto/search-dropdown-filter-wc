import { LitElement } from 'lit';
/**
 * This is the element that presents the list under
 * the dropdown button
 */
export declare class DropdownItemList extends LitElement {
    static styles: import("lit").CSSResultGroup;
    /**
     * Items to be presented in this list
     */
    items: string[];
    dropdownItemTemplate(item: string, index: number): import("lit-html").TemplateResult<1>;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'app-dropdown-item-list': DropdownItemList;
    }
}
//# sourceMappingURL=dropdown-item-list.element.d.ts.map