import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
})

export class MyButton {
  url;
  buttonID;
  content;

  // @Prop() content: string;

  // getURL() {
  //   this.url = window.location.href;
  //   return this.url;
  // }

  setButtonTagID() {
    let url = window.location.href;
    var newString = url.replace(/(.*)(\/html)(\/)(\w*\.html)/, "$4"); 
    url = newString;
    this.url = newString;
    this.setContent();

    if (url == "aehnlichkeit.html") {
      this.buttonID = 1;
    } else if (url == "geschlossenheit.html") {
      this.buttonID = 2;
    } else if (url == "fortsetzung.html") {
      this.buttonID = 3;
    } else if (url == "naehe.html") {
      this.buttonID = 4;
    } else if (url == "praegnanz.html") {
      this.buttonID = 5;
    } else if (url == "schicksal.html") {
      this.buttonID = 6;
    } else {
      this.buttonID = 0;
    }
    console.log("buttonID: " + this.buttonID);
    return this.buttonID;
  }

  goToNextPage() { 
    let url = window.location.href;
    var newString = url.replace(/(.*)(\/html)(\/)(\w*\.html)/, "$4"); 
    url = newString;
    let urlTemp;
    let button;

    if (url == "aehnlichkeit.html") {
      button = 1;
    } else if (url == "geschlossenheit.html") {
      button = 2;
    } else if (url == "fortsetzung.html") {
      button = 3;
    } else if (url == "naehe.html") {
      button = 4;
    } else if (url == "praegnanz.html") {
      button = 5;
    } else if (url == "schicksal.html") {
      button = 6;
    } else {
      button = 0;
    }
    
    if (button == 0) {
      urlTemp = "aehnlichkeit.html";
    } else if (button == 1) {
      urlTemp = "geschlossenheit.html";
    } else if (button == 2) {
      urlTemp = "fortsetzung.html";
    } else if (button == 3) {
      urlTemp = "naehe.html";
    } else if (button == 4) {
      urlTemp = "praegnanz.html";
    } else if (button == 5) {
      urlTemp = "schicksal.html";
    } else if (button == 6) {
      alert("Der Rundgang ist nun abgeschlossen. Alle Gestaltgesetze wurden angeschaut.");
      urlTemp="";
    } else {
      urlTemp="";
    }    
    url = window.location.href;
    console.log("vor regex: " + url);
    var newString = url.replace(/(.*)(\/html)(\/)(\w*\.html)/, "$1" + "$2" + "$3");
    newString += urlTemp; 
    console.log("nach regex: " + newString);
    window.location.href = newString;
  }

  setContent() {
    if (this.url == "aehnlichkeit.html") {
      this.content = "Weiter mit der Geschlossenheit";
    } else if (this.url == "geschlossenheit.html") {
      this.content = "Weiter mit der Fortsetzung";
    } else if (this.url == "fortsetzung.html") {
      this.content = "Weiter mit der Nähe";
    } else if (this.url == "naehe.html") {
      this.content = "Weiter mit der Prägnanz";
    } else if (this.url == "praegnanz.html") {
      this.content = "Weiter mit dem Schicksal";
    } else if (this.url == "schicksal.html") {
      this.content = "Das war es";
    } else {
      this.content = "Hier geht es los";
    }
  }

  render() {
    let buttonID:string = this.setButtonTagID();
    return <div class="buttonClass"><button type="button" class="button-style" id={buttonID} onClick={this.goToNextPage}>{this.content}</button></div>;
  }
}