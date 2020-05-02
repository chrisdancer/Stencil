import { Component, Prop, h } from '@stencil/core';
import { formatHeadline } from '../../utils/utils';

@Component({
  tag: 'my-headline',
  styleUrl: 'my-headline.css',
  shadow: true
})
export class MyHeadline {
  url;

  //article of the gestalt law
  @Prop() article: string;

  //name of the gestalt law
  @Prop() name: string;


  private getText(): string {
    return formatHeadline(this.article, this.name);
  }

  private getURL(): string {
    this.url = window.location.href;
    return this.url;
  }

  render() {
    this.getURL();
    let urlTemp = this.url.replace(/(.*)(\/html)(\/)(\w*\.html)/, "$4"); 

    if (urlTemp == "schicksal.html" ||
        urlTemp == "naehe.html" ||
        urlTemp == "aehnlichkeit.html" ||
        urlTemp == "geschlossenheit.html" ||
        urlTemp == "praegnanz.html" ||
        urlTemp == "fortsetzung.html") {
      return <h1>Gesetz {this.getText()}</h1>;
    } else {
      return <h1>{this.getText()}</h1>;
    }
  }
}
