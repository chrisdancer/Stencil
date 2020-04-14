import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-nav',
  styleUrl: 'my-nav.css',
 
})

export class MyNav {

  
  render() {
    return <header>
      <nav>
        <ul class="navbar">
          <li><a href="src\aehnlichkeit.html">Ähnlichkeit</a></li>
          <li><a href="src\geschlossenheit.html">Geschlossenheit</a></li>
          <li><a href="src\fortsetzung.html">Gute Fortsetzung</a></li>
          <li><a href="src\naehe.html">Nähe</a></li>
          <li><a href="src\praegnanz.html">Prägnanz</a></li>
          <li><a href="src\schicksal.html">Schicksal</a></li>
        </ul>
      </nav>


    </header>;
  }
}
