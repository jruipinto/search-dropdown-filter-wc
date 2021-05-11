/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {SearchDropdownFilter} from '../search-drop-down-filter-wc.element.js';

import {fixture, html} from '@open-wc/testing';

const assert = chai.assert;

suite('search-drop-down-filter-wc', () => {
  test('is defined', () => {
    const el = document.createElement('search-drop-down-filter-wc');
    assert.instanceOf(el, SearchDropdownFilter);
  });

  test('renders with default values', async () => {
    const el = await fixture(
      html`<search-drop-down-filter-wc></search-drop-down-filter-wc>`
    );
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('renders with a set name', async () => {
    const el = await fixture(
      html`<search-drop-down-filter-wc
        ?search=${true}
        ?dropdown=${true}
        .datalist=${['one', 'two', 'three']}
      ></search-drop-down-filter-wc>`
    );
    assert.shadowDom.equal(
      el,
      `
      <search-drop-down-filter-wc>
      <app-search-input>
      <app-magnifier-icon>
      <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="#000000"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
      />
    </svg>
      </app-magnifier-icon>
      </app-search-input>
      </search-drop-down-filter-wc>
    `
    );
  });

  test('handles a click', async () => {
    const el = (await fixture(
      html`<search-drop-down-filter-wc></search-drop-down-filter-wc>`
    )) as SearchDropdownFilter;
    const button = el.shadowRoot!.querySelector('button')!;
    button.click();
    await el.updateComplete;
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 1</button>
      <slot></slot>
    `
    );
  });

  test('styling applied', async () => {
    const el = (await fixture(
      html`<search-drop-down-filter-wc></search-drop-down-filter-wc>`
    )) as SearchDropdownFilter;
    await el.updateComplete;
    assert.equal(getComputedStyle(el).paddingTop, '16px');
  });
});
