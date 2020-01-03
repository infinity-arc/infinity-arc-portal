import { Component, Host, h, Prop } from '@stencil/core';

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
          <slot name="header"></slot>
          <slot name="divider"></slot>
          <slot name="content"></slot>
          <slot name="divider"></slot>
        </div>
      </Host>
    );
  }
}

@Component({
  tag: 'app-card-header',
  styleUrl: 'card.scss',
  shadow: true
})
export class CardHeader {
  @Prop() str: string = 'header';
  render() {
    return (
      <Host>
        <h2 class="app-card-header">{{ str }}</h2>
      </Host>
    );
  }
}

@Component({
  tag: 'app-card-content',
  styleUrl: 'card.scss',
  shadow: true
})
export class CardContent {
  render() {
    return (
      <Host>
        <slot name="app-card-content"></slot>
      </Host>
    );
  }
}


@Component({
  tag: 'app-card-divider',
  styleUrl: 'card.scss',
  shadow: true
})
export class CardDivider {
  render() {
    return (
      <Host>
        <hr></hr>
      </Host>
    );
  }
}
