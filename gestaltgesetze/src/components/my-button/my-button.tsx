import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
})

export class MyButton {
  url;
  buttonID;

  @Prop() content: string;

  getURL() {
    this.url = window.location.href;
    return this.url;
  }

  setButtonID() {
    this.url = this.getURL();
    var newString = this.url.replace(/(http\:\/\/localhost\:\d{4}\/html)(\/)(\w*\.html)/, "$3"); 
    this.url = newString;

    if (this.url == "schicksal.html") {
      this.buttonID = 1;
    } else if (this.url == "naehe.html") {
      this.buttonID = 2;
    } else if (this.url == "praegnanz.html") {
      this.buttonID = 3;
    } else if (this.url == "geschlossenheit.html") {
      this.buttonID = 4;
    } else if (this.url == "aehnlichkeit.html") {
      this.buttonID = 5;
    } else if (this.url == "fortsetzung.html") {
      this.buttonID = 6;
    } else {
      this.buttonID = 0;
    }
    console.log("buttonID: " + this.buttonID);
    return this.buttonID;
  }

  goToNextPage() { 
    let urlTemp;
    this.url = this.getURL();
    if (this.buttonID == 0) {
      urlTemp = "schicksal.html";
    } else if (this.buttonID == 1) {
      urlTemp = "naehe.html";
    } else if (this.buttonID == 2) {
      urlTemp = "praegnanz.html";
    } else if (this.buttonID == 3) {
      urlTemp = "geschlossenheit.html";
    } else if (this.buttonID == 4) {
      urlTemp = "aehnlichkeit.html";
    } else if (this.buttonID == 5) {
      urlTemp = "fortsetzung.html";
    } else {
      urlTemp="";
    }
    console.log("vor regex: " + this.url);
    var newString = this.url.replace(/(http\:\/\/localhost\:\d{4}\/html)(\/)(\w*\.html)/, "$1" + "$2" + urlTemp); 
    console.log("nach regex: " + newString);
    window.location.href = newString;
  }

  render() {
    let buttonID:string = this.setButtonID();;
    return <button type="button" class="button-style" id={buttonID} onClick={this.goToNextPage}>{this.content}</button>;
  }
}