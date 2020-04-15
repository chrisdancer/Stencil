import { Component, Prop, h } from '@stencil/core';
import { formatSubheadline } from '../../utils/utils';

@Component({
  tag: 'my-subheadline',
  styleUrl: 'my-subheadline.css',
  shadow: true
})
export class MySubheadline {
  //article of the gestalt law
  @Prop() article: string;

  //name of the gestalt law
  @Prop() name: string;


  private getText(): string {
    return formatSubheadline(this.article, this.name);
  }

  render() {
    return <h1>Gesetz {this.getText()}</h1>;
  }
}
