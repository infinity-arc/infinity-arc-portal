import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-rooter',
  styleUrl: 'app-roouter.css',
  // shadow: true
})
export class Rooter {

  render() {
    return (
      <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/profile/:name" component="app-profile" />
              <stencil-route url="/test-generate" component="test-generate" />
            </stencil-route-switch>
          </stencil-router>
    );
  }

}
