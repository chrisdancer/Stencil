import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-flexDiv',
  styleUrl: 'my-flexDiv.css',
  shadow: true
})

export class MyFlexDiv {

  render() {
    return <div id="flexDiv"></div>;
  }
}