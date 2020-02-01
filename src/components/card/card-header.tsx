import { Component, Prop, Host,h, Element } from "@stencil/core";


@Component({
  tag: 'app-card-header',
  styleUrl: 'card.scss',
  shadow: true
})
export class CardHeader {
  @Prop() class: string = "content";
  @Prop() str: string = "header";

  @Element() hostElement: HTMLElement;



  render() {
    console.log('hostElement: ',  Object.entries(this.hostElement));
    return (
      <Host slot="header">
        <h1>{this.str}</h1>
      </Host>
    );
  }
}
