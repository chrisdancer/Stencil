import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-subheadline',
  styleUrl: 'my-subheadline.css',
  shadow: true
})
export class MySubheadline {
  content
  @Prop() contentSub: string;

  render() {
    return <h3>{this.contentSub}</h3>;
  }
}