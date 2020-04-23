/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyButton {
        "content": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface MyFlexdiv {
    }
    interface MyFooter {
    }
    interface MyHead {
    }
    interface MyHeadline {
        "article": string;
        "name": string;
    }
    interface MyNav {
    }
    interface MySubheadline {
        "content": string;
    }
    interface MyText {
        /**
          * The first name
         */
        "content": string;
    }
    interface MyWelcometext {
        "content": string;
    }
}
declare global {
    interface HTMLMyButtonElement extends Components.MyButton, HTMLStencilElement {
    }
    var HTMLMyButtonElement: {
        prototype: HTMLMyButtonElement;
        new (): HTMLMyButtonElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLMyFlexdivElement extends Components.MyFlexdiv, HTMLStencilElement {
    }
    var HTMLMyFlexdivElement: {
        prototype: HTMLMyFlexdivElement;
        new (): HTMLMyFlexdivElement;
    };
    interface HTMLMyFooterElement extends Components.MyFooter, HTMLStencilElement {
    }
    var HTMLMyFooterElement: {
        prototype: HTMLMyFooterElement;
        new (): HTMLMyFooterElement;
    };
    interface HTMLMyHeadElement extends Components.MyHead, HTMLStencilElement {
    }
    var HTMLMyHeadElement: {
        prototype: HTMLMyHeadElement;
        new (): HTMLMyHeadElement;
    };
    interface HTMLMyHeadlineElement extends Components.MyHeadline, HTMLStencilElement {
    }
    var HTMLMyHeadlineElement: {
        prototype: HTMLMyHeadlineElement;
        new (): HTMLMyHeadlineElement;
    };
    interface HTMLMyNavElement extends Components.MyNav, HTMLStencilElement {
    }
    var HTMLMyNavElement: {
        prototype: HTMLMyNavElement;
        new (): HTMLMyNavElement;
    };
    interface HTMLMySubheadlineElement extends Components.MySubheadline, HTMLStencilElement {
    }
    var HTMLMySubheadlineElement: {
        prototype: HTMLMySubheadlineElement;
        new (): HTMLMySubheadlineElement;
    };
    interface HTMLMyTextElement extends Components.MyText, HTMLStencilElement {
    }
    var HTMLMyTextElement: {
        prototype: HTMLMyTextElement;
        new (): HTMLMyTextElement;
    };
    interface HTMLMyWelcometextElement extends Components.MyWelcometext, HTMLStencilElement {
    }
    var HTMLMyWelcometextElement: {
        prototype: HTMLMyWelcometextElement;
        new (): HTMLMyWelcometextElement;
    };
    interface HTMLElementTagNameMap {
        "my-button": HTMLMyButtonElement;
        "my-component": HTMLMyComponentElement;
        "my-flexdiv": HTMLMyFlexdivElement;
        "my-footer": HTMLMyFooterElement;
        "my-head": HTMLMyHeadElement;
        "my-headline": HTMLMyHeadlineElement;
        "my-nav": HTMLMyNavElement;
        "my-subheadline": HTMLMySubheadlineElement;
        "my-text": HTMLMyTextElement;
        "my-welcometext": HTMLMyWelcometextElement;
    }
}
declare namespace LocalJSX {
    interface MyButton {
        "content"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface MyFlexdiv {
    }
    interface MyFooter {
    }
    interface MyHead {
    }
    interface MyHeadline {
        "article"?: string;
        "name"?: string;
    }
    interface MyNav {
    }
    interface MySubheadline {
        "content"?: string;
    }
    interface MyText {
        /**
          * The first name
         */
        "content"?: string;
    }
    interface MyWelcometext {
        "content"?: string;
    }
    interface IntrinsicElements {
        "my-button": MyButton;
        "my-component": MyComponent;
        "my-flexdiv": MyFlexdiv;
        "my-footer": MyFooter;
        "my-head": MyHead;
        "my-headline": MyHeadline;
        "my-nav": MyNav;
        "my-subheadline": MySubheadline;
        "my-text": MyText;
        "my-welcometext": MyWelcometext;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-button": LocalJSX.MyButton & JSXBase.HTMLAttributes<HTMLMyButtonElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "my-flexdiv": LocalJSX.MyFlexdiv & JSXBase.HTMLAttributes<HTMLMyFlexdivElement>;
            "my-footer": LocalJSX.MyFooter & JSXBase.HTMLAttributes<HTMLMyFooterElement>;
            "my-head": LocalJSX.MyHead & JSXBase.HTMLAttributes<HTMLMyHeadElement>;
            "my-headline": LocalJSX.MyHeadline & JSXBase.HTMLAttributes<HTMLMyHeadlineElement>;
            "my-nav": LocalJSX.MyNav & JSXBase.HTMLAttributes<HTMLMyNavElement>;
            "my-subheadline": LocalJSX.MySubheadline & JSXBase.HTMLAttributes<HTMLMySubheadlineElement>;
            "my-text": LocalJSX.MyText & JSXBase.HTMLAttributes<HTMLMyTextElement>;
            "my-welcometext": LocalJSX.MyWelcometext & JSXBase.HTMLAttributes<HTMLMyWelcometextElement>;
        }
    }
}
