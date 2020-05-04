import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-footer',
  styleUrl: 'my-footer.css',
  shadow: true
})

export class MyFooter {

  render() {
    var link="";
    if (window.location.href=="html") {
     link ="";
   } else {
     link ="..\\";
     }
    return <div id="footerDiv"><a href={link + "html\\impressum.html"}><p id="footerText">Impressum</p></a></div>;
  }
}
