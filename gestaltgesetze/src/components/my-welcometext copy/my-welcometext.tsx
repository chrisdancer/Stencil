import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-welcometext',
  styleUrl: 'my-welcometext.css',
 
})

export class Text {
  /**
   * The first name
   */
  @Prop() content: string;

  

  render() {
    return <div>{this.content}</div>;
  }
}
