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
    return <h1>Gesetz {this.getText()}</h1>;
  }
}
