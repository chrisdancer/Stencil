import { Component, Prop, h } from '@stencil/core';
import { formatSubheadline } from '../../utils/utils';

@Component({
  tag: 'my-headline',
  styleUrl: 'my-headline.css',
  shadow: true
})
export class MyHeadline {
  //article of the gestalt law
  @Prop() articleH: string;

  //name of the gestalt law
  @Prop() nameH: string;


  private getText(): string {
    return formatSubheadline(this.articleH, this.nameH);
  }

  render() {
    return <h1>Gesetz {this.getText()}</h1>;
  }
}
