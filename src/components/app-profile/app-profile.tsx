import { Component, Prop, Host, h } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component( {
  tag: 'app-profile',
  styleUrl: 'app-profile.css',
  shadow: true
} )
export class AppProfile {
  @Prop() match: MatchResults;

  normalize( name: string ): string {
    if ( name ) {
      return name.substr( 0, 1 ).toUpperCase() + name.substr( 1 ).toLowerCase();
    }
    return '';
  }
  componentDidLoad(): void {
    document.body.style.background = '';
  }

  render() {
    console.log( this );
    if ( this.match && this.match.params.name ) {
      return (
        <Host>
          <div class="app-profile">
            <p>
              Hello! My name is {this.normalize( this.match.params.name )}. My name was passed in
              through a route param!
          </p>
            <stencil-route-link url="/">
              <button class="stencil-btn">
                Home
            </button>
            </stencil-route-link>
          </div>
        </Host>
      );
    }
  }
}
