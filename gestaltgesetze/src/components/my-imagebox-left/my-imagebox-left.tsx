import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-imagebox-left',
  styleUrl: 'my-imagebox-left.css',
  shadow: true
})

export class MyImageboxLeft {

  render() {
    return <div id="imageboxLeft" class="item"><slot></slot></div>;
  }
}