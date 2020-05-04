import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-text',
  styleUrl: 'my-text.css',
 shadow: true
})

export class Text {
  /**
   * The first name
   */

  @Prop() content: string;

  

  render() {
    return <p id="text"><slot name="text"></slot></p>;
  }
}
