import { Component, h } from '@stencil/core';
// import swirley from '../../assets/awesome.gif';
@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: true
})
export class AppHome {
  render() {
    return (

      <div class='app-home'>
        <div class="swirley">
          <div class="swirley-img">
            <img src="../../assets/awesome.gif" alt="swirley"></img>
          </div>
        </div>
        <div>
          <app-card></app-card>
          <app-card></app-card>
          <app-card></app-card>
        </div>
      </div>
    );
  }
}

// <div class="ia-brand">
// <img src="../../assets/ia-logo/ia-deco-05-2.png" />
// </div>
