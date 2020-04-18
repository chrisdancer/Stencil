import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-nav',
  styleUrl: 'my-nav.css',
 shadow: true
})

export class MyNav {


render() {
  var link="";
  if (window.location.href=="html") {
   link ="";
 } else {
   link ="..\\";
   }
  
  return <header>
  <nav>
    <ul class="navbar">
    <li><a href= {link+"html"}>Start</a></li>
      <li><a href={link + "html\\aehnlichkeit.html"}>Ähnlichkeit</a></li>
      <li><a href={link + "html\\geschlossenheit.html"}>Geschlossenheit</a></li>
      <li><a href={link + "html\\fortsetzung.html"}>Gute Fortsetzung</a></li>
      <li><a href={link + "html\\naehe.html"}>Nähe</a></li>
      <li><a href={link + "html\\praegnanz.html"}>Prägnanz</a></li>
      <li><a href={link + "html\\schicksal.html"}>Schicksal</a></li>
    </ul>
  </nav>
</header>;
}
}

