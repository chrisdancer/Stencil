import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-footer',
  styleUrl: 'my-footer.css',
  shadow: true
})

export class MyFooter {

  render() {
    return <div id="footerDiv"><a href="html\impressum.html"><p id="footerText">Impressum</p></a></div>;
  }
}
