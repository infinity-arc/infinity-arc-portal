import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-card',
  styleUrl: 'card.scss',
  shadow: true
})
export class Card {
  render() {
    return (
      <Host>
        <div class="app-card">
          <slot name="header"/>
          <slot name="divider"/>
          <slot name="content"/>
          <slot name="divider"/>
        </div>
      </Host>
    );
  }
}
