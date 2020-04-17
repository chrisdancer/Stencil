import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-welcometext',
  styleUrl: 'my-welcometext.css',
 
})

export class MyWelcomeText {
  
  @Prop() content: string;

  

  render() {
    return <div>{this.content}</div>;
  }
}
