import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-welcometext',
  styleUrl: 'my-welcometext.css',
  shadow: true
})

export class MyWelcomeText {
  
  @Prop() content: string;

  

  render() {
    return <div id="welcome">{this.content}</div>;
  }
}
