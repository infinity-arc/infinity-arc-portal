import { Component, State, Watch, h } from '@stencil/core';
// import swirley from '../../assets/awesome.gif';
@Component( {
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: true
} )
export class AppHome {

  @State() date: Date;

  @Watch( 'date' )
  watchHandler( newValue, oldValue ) {
    console.log( 'oldValue: ', oldValue );
    console.log( 'The value of date is: ', newValue );
  }

  setDate() {

  }

  componentDidLoad() {
    console.log( this );
    console.log( h );
    document.body.style.background = 'black';
  }


  render() {

    return (
      <div class='app-home'>
        <div class="swirley">
          <div class="ia-brand">
            <img src="../../assets/ia.png" />
          </div>
          <div class="swirley-img">

            <img src="../../assets/awesome.gif" alt="swirley"></img>
          </div>
        </div>
      </div>
    );
  }
}
