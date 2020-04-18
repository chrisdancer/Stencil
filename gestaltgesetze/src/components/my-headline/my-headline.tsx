import { Component, Prop, h } from '@stencil/core';
import { formatHeadline } from '../../utils/utils';

@Component({
  tag: 'my-headline',
  styleUrl: 'my-headline.css',
  shadow: true
})
export class MyHeadline {
  //article of the gestalt law
  @Prop() article: string;

  //name of the gestalt law
  @Prop() name: string;


  private getText(): string {
    return formatHeadline(this.article, this.name);
  }

  render() {
    let url = window.location.href;
    let newString = url.replace(/(http\:\/\/localhost\:\d{4}\/html)(\/)(\w*\.html)/, "$3"); 
    url = newString;

    if (url == "schicksal.html" ||
        url == "naehe.html" ||
        url == "aehnlichkeit.html" ||
        url == "geschlossenheit.html" ||
        url == "praegnanz.html" ||
        url == "fortsetzung.html") {
      return <h1>Gesetz {this.getText()}</h1>;
    } else {
      return <h1>{this.getText()}</h1>;
    }
  }
}
