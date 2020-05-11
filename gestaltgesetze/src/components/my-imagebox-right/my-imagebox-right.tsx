import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-imagebox-right',
  styleUrl: 'my-imagebox-right.css',
  shadow: true
})

export class MyImageboxRight {

  render() {
    return <div id="imageboxRight" class="item"><slot></slot></div>;
  }
}