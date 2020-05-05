import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-template',
  styleUrl: 'my-template.css',
  shadow: true
})
export class MyTemplate {
  

  render() {
    return (
      <div>
      <my-nav></my-nav>
      <my-headline class="headline"></my-headline> 
      <my-text def-text></my-text>
      <my-subheadline class="sub">beisdpiuel</my-subheadline>
      <my-text>uhwaduhwadhioafjpoiawdjpoawdpjoawd</my-text>
      <my-subheadline class="sub">oawjdowadjowda</my-subheadline>
      <my-text>wwwwwwww</my-text>
      <my-subheadline class="sub">dwdw</my-subheadline>
      <my-text>hgg</my-text>
      <my-flexdiv></my-flexdiv>
      <my-button></my-button>
      <my-footer></my-footer>
      </div>
    )
  }
}
