import { Component, h, Host, Prop, State } from "@stencil/core";

@Component( {
  tag: "app-root",
  styleUrl: "app-root.css"
  // shadow: true
} )
export class AppRoot {
  // @Prop() match: MatchResults;
  @State() mouseCoords: { x: number, y: number, offsetX: number, offsetY: number; };



  componentDidLoad() {
    // this.mouseCoords = { x: 0, y: 0, offsetX: 0, offsetY: 0 };

    // console.log( "Root mounted" );
    // const navEl = document.getElementsByTagName( 'nav' )[ 0 ];

    // const mainEl = document.getElementsByTagName( 'main' )[ 0 ];

    // console.log( 'navEl: ', navEl );
    // console.log( 'mainEl: ', mainEl );
    // // console.log( window.screen

    // document.addEventListener( 'mousemove', ( ev: MouseEvent ) => {
    //   console.log( 'ev: ', ev );
    //   const { x, y, offsetX, offsetY } = ev;
    //   this.mouseCoords = { x, y, offsetX, offsetY };

    // } );
    // mainEl.style.height = ( window.innerWidth - navEl.clientHeight ).toString() + 'px';

  }

  render() {
    // console.log( "match: ", this.match );
    return (
      <Host>
        <div>
          <header>
            <h1>Stencil App Starter</h1>
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

          <main>
            <stencil-router>
              <stencil-route-switch scrollTopOffset={0}>
                <stencil-route url="/" component="app-home" exact={true} />
                <stencil-route url="/profile/:name" component="app-profile" />
                <stencil-route url="/test-generate" component="test-generate" />
              </stencil-route-switch>
            </stencil-router>
            <test-generate></test-generate>
          </main>
          {/* <div class="mouse-panel">
            <div>SCREEN Y:</div><div>{window.screen.availHeight}</div>
            <div>SCREEN X:</div><div>{window.screen.availWidth}</div>
            <div>Inner Height:</div><div>{window.innerHeight}</div>
            <div>Inner Width:</div><div>{window.innerWidth}</div>
            <div>Mouse X:</div><div>{this.mouseCoords.x}</div>
            <div>Mouse Y:</div><div> {this.mouseCoords.y}</div>
            <div>Mouse Offset X:</div><div>{this.mouseCoords.offsetX}</div>
            <div>Mouse Offset Y:</div><div>{this.mouseCoords.offsetY}</div>
          </div> */}
        </div>
        <div slot="generate"></div>
      </Host>
    );
  }
}
