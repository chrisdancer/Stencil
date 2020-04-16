import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
})

export class MyButton {
  
  @Prop() content: string;

  

  render() {
    return <button type="button" class="button-style" id="nextPage">{this.content}</button>;
  }
}
