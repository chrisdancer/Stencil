import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-flexdiv',
  styleUrl: 'my-flexdiv.css',
  shadow: true
})

export class MyFlexdiv {

  render() {
    return <div id="flexdiv"><slot></slot></div>;
  }
}