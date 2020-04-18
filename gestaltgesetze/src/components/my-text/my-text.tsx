import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-text',
  styleUrl: 'my-text.css',
 
})
export class Text {
  /**
   * The first name
   */
  @Prop() content: string;

  

  render() {
    return <p id="text">{this.content}</p>;
  }
}
