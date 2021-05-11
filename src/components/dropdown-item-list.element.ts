import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

/**
 * This is the element that presents the list under
 * the dropdown button
 */
@customElement('app-dropdown-item-list')
export class DropdownItemList extends LitElement {
  static styles = css`
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

  /**
   * Items to be presented in this list
   */
  @property({type: Array})
  items: string[] = [];

  dropdownItemTemplate(item: string, index: number) {
    return html`
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
    return html`
      <div class="item-list">
        ${this.items.map(this.dropdownItemTemplate)}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-dropdown-item-list': DropdownItemList;
  }
}
