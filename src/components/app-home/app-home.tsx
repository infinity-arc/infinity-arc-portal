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
          <div>
            <img src="../../assets/ia-logo/BCCF3A0F-5648-4452-B1A8-2485F705AD94.jpg075.png" alt="ia-iso" />
          </div>
        </div>
        <div class="card">
          <app-card>
            <app-card-header>HI</app-card-header>
          </app-card>
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
