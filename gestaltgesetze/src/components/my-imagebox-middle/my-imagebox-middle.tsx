import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-imagebox-middle',
  styleUrl: 'my-imagebox-middle.css',
  shadow: true
})

export class MyImageboxMiddle {

  render() {
    return <div id="imageboxMiddle" class="item"><slot></slot></div>;
  }
}