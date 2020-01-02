import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-router',
  styleUrl: 'app-router.css',
  // shadow: true
})
export class ApplicationRouter {

  render() {
    return (
      <main>
        <stencil-router>
          <stencil-route-switch scrollTopOffset={0}>
            <stencil-route url="/" component="app-home" exact={true} />
            <stencil-route url="/profile/:name" component="app-profile" />
            <stencil-route url="/test-generate" component="test-generate" />
          </stencil-route-switch>
        </stencil-router>
      </main>
    );
  }

}
