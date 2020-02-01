import { Component, Host, h } from "@stencil/core";

@Component({
  tag: 'app-card-divider',
  styleUrl: 'card.scss',
  shadow: true
})
export class CardDivider {
  render() {
    return (
      <Host slot="divider">
        <hr></hr>
      </Host>
    );
  }
}
