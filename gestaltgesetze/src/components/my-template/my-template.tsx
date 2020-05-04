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
        <my-text content="zusammenfassung zu gesetz"></my-text>
        <my-subheadline><slot></slot></my-subheadline>
        <my-text content="erklärung zu bsp 1"></my-text>
        <my-subheadline></my-subheadline>
        <my-text content="erklärung zu bsp 2"></my-text>
        <my-subheadline><slot></slot></my-subheadline>
        <my-text content="erklärung zu bsp 3"></my-text>
        <my-flexdiv></my-flexdiv>
        <my-button></my-button>
        <my-footer></my-footer>
      </div>
    )
  }
}
