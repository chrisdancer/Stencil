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
        <my-headline class="headline"></my-headline> 
        <my-text class="defText" content="zusammenfassung zu gesetz"></my-text>
        <my-subheadline class="sub"content="Beispiel 1"></my-subheadline>
        <my-text class="text" content="erklärung zu bsp 1"></my-text>
        <my-subheadline class="sub" content="Beispiel 2"></my-subheadline>
        <my-text class="text" content="erklärung zu bsp 2"></my-text>
        <my-subheadline class="sub" content="Beispiel 3"></my-subheadline>
        <my-text class="text" content="erklärung zu bsp 3"></my-text>
        <my-button class="button"></my-button>
        <my-footer class="footer"></my-footer>
      </div>
    )
  }
}
