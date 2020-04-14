import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-footer',
  styleUrl: 'my-footer.css',
})

export class MyFooter {

  render() {
    return <div><a href=""><p>Impressum</p></a></div>;
  }
}
