import { Component, h} from '@stencil/core';

@Component({
  tag: 'my-head',
  styleUrl: 'my-head.css',
  shadow: true
})
export class MyHead {

  render() {
    let input = <head>   
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0"/>   
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet"/>
      <title>Stencil Component Starter</title>
      <script type="module" src="../dist/gestaltgesetze/gestaltgesetze.js"></script>
      </head>
      // let input = <button type="button" class="button-style" id={buttonID}>{this.content}</button>;
    return input;
  }
}
