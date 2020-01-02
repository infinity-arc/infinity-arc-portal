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
        <div class="app-card">AppCard</div>
      </Host>
    );
  }

}
