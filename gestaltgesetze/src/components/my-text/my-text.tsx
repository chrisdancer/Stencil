import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-text',
  styleUrl: 'my-text.css',
 shadow: true
})

export class Text {
  /**
   * The first name
   */

   @Prop() defText:boolean;

  render() {
    return <p id="text" class={this.defText?"defText":"text"}><slot></slot></p>;
  }
}
