import { Component, Host, h } from "@stencil/core";


@Component({
  tag: 'app-card-content',
  styleUrl: 'card.scss',
  shadow: true
})
export class CardContent {
  render() {
    return (
      <Host slot="header">

      </Host>
    );
  }
}
