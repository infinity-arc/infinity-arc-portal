import { Component, Host, Prop, h } from '@stencil/core';
import { MatchResults } from '@stencil/router';
@Component( {
  tag: 'test-generate',
  styleUrl: 'generate.css',
  shadow: true
} )
export class Generate {
  @Prop() match: MatchResults;
  componentDidLoad(): void {
    document.body.style.background = '';
  }

  render() {
    console.log( Host );
    // console.log(slot);
    console.log( this );
    return (
      <Host>
        <slot name="generate">
          What is this?
          <header>
            Test
          </header>
        </slot>
      </Host>
    );
  }

}
