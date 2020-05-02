import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-template',
  styleUrl: 'my-template.css',
  shadow: true
})
export class MyTemplate {
  getText;
  

  render() {
    return (
      <div>
        <my-nav></my-nav>
        <my-headline></my-headline> 
        <my-subheadline content="Beispiel 1"></my-subheadline>
        <my-text content="hallo welt"></my-text>
        <my-button></my-button>
        <my-footer></my-footer>
      </div>
    )
  }
}
