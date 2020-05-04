import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-subheadline',
  styleUrl: 'my-subheadline.css',
  shadow: true
})
export class MySubheadline {
  //content
  // @Prop() content: string;


  // private getText(): string {
  //   return this.content;
  // }

  render() {
    return <h3><slot></slot></h3>;
  }
}