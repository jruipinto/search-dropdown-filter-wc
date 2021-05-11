import { LitElement } from 'lit';
import './dropdown-icon.element';
/**
 * This is the dropdown button with dropdown icon
 * in its right side
 */
export declare class DropdownButton extends LitElement {
    static styles: import("lit").CSSResultGroup;
    /**
     * Search input option (default).
     */
    inp: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'app-dropdown-button': DropdownButton;
    }
}
//# sourceMappingURL=dropdown-button.element.d.ts.map