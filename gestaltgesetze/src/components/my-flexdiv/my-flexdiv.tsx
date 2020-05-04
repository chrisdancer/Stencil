import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-flexdiv',
  styleUrl: 'my-flexdiv.css',
  shadow: true
})

export class MyFlexdiv {

  render() {
    return <div id="flexdiv"><div class="item"></div><div class="item"></div><div class="item"></div></div>;
  }
}

<my-flexdiv>
  <item1>
    
  </item1>

</my-flexdiv>