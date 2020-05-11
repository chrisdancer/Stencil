import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-definitiontext',
  styleUrl: 'my-definitiontext.css',
  shadow: true
})

export class MyDefinitiontext {
  
  @Prop() content: string;

  

  render() {
    return <div id="definition">{this.content}</div>;
  }
}
