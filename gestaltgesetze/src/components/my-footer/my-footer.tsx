import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-footer',
  styleUrl: 'my-footer.css',
})

export class MyFooter {

  render() {
    return <div><a href="html\impressum.html"><p>Impressum</p></a></div>;
  }
}
