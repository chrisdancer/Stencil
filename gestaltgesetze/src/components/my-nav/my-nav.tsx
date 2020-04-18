import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-nav',
  styleUrl: 'my-nav.css',
 
})

export class MyNav {


render() {
  // var link="";
  //if (window.location.href=="html") {
   // link ="";
  // } else {
   //link ="..\\";
   //}
   //<li><a href= {link}"html">Start</a></li>
  return <header>
  <nav>
    <ul class="navbar">
      <li><a href="html">Start</a></li>
      <li><a href="html\aehnlichkeit.html">Ähnlichkeit</a></li>
      <li><a href="html\geschlossenheit.html">Geschlossenheit</a></li>
      <li><a href="html\fortsetzung.html">Gute Fortsetzung</a></li>
      <li><a href="html\naehe.html">Nähe</a></li>
      <li><a href="html\praegnanz.html">Prägnanz</a></li>
      <li><a href="html\schicksal.html">Schicksal</a></li>
    </ul>
  </nav>
</header>;
// if (window.location.href=="html"){
//     return <header>
//       <nav>
//         <ul class="navbar">
//           <li><a href="html">Start</a></li>
//           <li><a href="html\aehnlichkeit.html">Ähnlichkeit</a></li>
//           <li><a href="html\geschlossenheit.html">Geschlossenheit</a></li>
//           <li><a href="html\fortsetzung.html">Gute Fortsetzung</a></li>
//           <li><a href="html\naehe.html">Nähe</a></li>
//           <li><a href="html\praegnanz.html">Prägnanz</a></li>
//           <li><a href="html\schicksal.html">Schicksal</a></li>
//         </ul>
//       </nav>
//     </header>;

if (window.location.href=="html"){
    return <header>
      <nav>
        <ul class="navbar">
          <li><a href="html">Start</a></li>
          <li><a href="html\aehnlichkeit.html">Ähnlichkeit</a></li>
          <li><a href="html\geschlossenheit.html">Geschlossenheit</a></li>
          <li><a href="html\fortsetzung.html">Gute Fortsetzung</a></li>
          <li><a href="html\naehe.html">Nähe</a></li>
          <li><a href="html\praegnanz.html">Prägnanz</a></li>
          <li><a href="html\schicksal.html">Schicksal</a></li>
        </ul>
      </nav>
    </header>;

    }else{
      return <header>
      <nav>
        <ul class="navbar">
          <li><a href="..\html">Start</a></li>
          <li><a href="..\html\aehnlichkeit.html">Ähnlichkeit</a></li>
          <li><a href="..\html\geschlossenheit.html">Geschlossenheit</a></li>
          <li><a href="..\html\fortsetzung.html">Gute Fortsetzung</a></li>
          <li><a href="..\html\naehe.html">Nähe</a></li>
          <li><a href="..\html\praegnanz.html">Prägnanz</a></li>
          <li><a href="..\html\schicksal.html">Schicksal</a></li>
        </ul>
      </nav>
    </header>;

    }}
}

