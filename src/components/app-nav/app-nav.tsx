import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-nav',
  styleUrl: 'app-nav.scss',
  shadow: true
})
export class Nav {

  render() {
    return (

    <header>
      <div class="brand">
        <img src="../../assets/ia-logo/ia-block-01.png" />
        <h1>Stencil App Starter</h1>
      </div>
      <nav>
        <stencil-route-link url="/">
          <a>Home</a>
        </stencil-route-link>
        <stencil-route-link url="profile/stencil">
          <a>Profile</a>
        </stencil-route-link>
        <stencil-route-link url="test-generate">
          <a>Generated</a>
        </stencil-route-link>
      </nav>
    </header>

    );
  }

}
