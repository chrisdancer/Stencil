/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyButton {
    }
    interface MyDefinitiontext {
        "content": string;
    }
    interface MyFlexdiv {
    }
    interface MyFooter {
    }
    interface MyHeadline {
        "article": string;
        "name": string;
    }
    interface MyNav {
    }
    interface MySubheadline {
        "contentSub": string;
    }
    interface MyTemplate {
    }
    interface MyText {
        /**
          * The first name
         */
        "defText": boolean;
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
    interface HTMLMyDefinitiontextElement extends Components.MyDefinitiontext, HTMLStencilElement {
    }
    var HTMLMyDefinitiontextElement: {
        prototype: HTMLMyDefinitiontextElement;
        new (): HTMLMyDefinitiontextElement;
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
    interface HTMLMyTemplateElement extends Components.MyTemplate, HTMLStencilElement {
    }
    var HTMLMyTemplateElement: {
        prototype: HTMLMyTemplateElement;
        new (): HTMLMyTemplateElement;
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
        "my-definitiontext": HTMLMyDefinitiontextElement;
        "my-flexdiv": HTMLMyFlexdivElement;
        "my-footer": HTMLMyFooterElement;
        "my-headline": HTMLMyHeadlineElement;
        "my-nav": HTMLMyNavElement;
        "my-subheadline": HTMLMySubheadlineElement;
        "my-template": HTMLMyTemplateElement;
        "my-text": HTMLMyTextElement;
        "my-welcometext": HTMLMyWelcometextElement;
    }
}
declare namespace LocalJSX {
    interface MyButton {
    }
    interface MyDefinitiontext {
        "content"?: string;
    }
    interface MyFlexdiv {
    }
    interface MyFooter {
    }
    interface MyHeadline {
        "article"?: string;
        "name"?: string;
    }
    interface MyNav {
    }
    interface MySubheadline {
        "contentSub"?: string;
    }
    interface MyTemplate {
    }
    interface MyText {
        /**
          * The first name
         */
        "defText"?: boolean;
    }
    interface MyWelcometext {
        "content"?: string;
    }
    interface IntrinsicElements {
        "my-button": MyButton;
        "my-definitiontext": MyDefinitiontext;
        "my-flexdiv": MyFlexdiv;
        "my-footer": MyFooter;
        "my-headline": MyHeadline;
        "my-nav": MyNav;
        "my-subheadline": MySubheadline;
        "my-template": MyTemplate;
        "my-text": MyText;
        "my-welcometext": MyWelcometext;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-button": LocalJSX.MyButton & JSXBase.HTMLAttributes<HTMLMyButtonElement>;
            "my-definitiontext": LocalJSX.MyDefinitiontext & JSXBase.HTMLAttributes<HTMLMyDefinitiontextElement>;
            "my-flexdiv": LocalJSX.MyFlexdiv & JSXBase.HTMLAttributes<HTMLMyFlexdivElement>;
            "my-footer": LocalJSX.MyFooter & JSXBase.HTMLAttributes<HTMLMyFooterElement>;
            "my-headline": LocalJSX.MyHeadline & JSXBase.HTMLAttributes<HTMLMyHeadlineElement>;
            "my-nav": LocalJSX.MyNav & JSXBase.HTMLAttributes<HTMLMyNavElement>;
            "my-subheadline": LocalJSX.MySubheadline & JSXBase.HTMLAttributes<HTMLMySubheadlineElement>;
            "my-template": LocalJSX.MyTemplate & JSXBase.HTMLAttributes<HTMLMyTemplateElement>;
            "my-text": LocalJSX.MyText & JSXBase.HTMLAttributes<HTMLMyTextElement>;
            "my-welcometext": LocalJSX.MyWelcometext & JSXBase.HTMLAttributes<HTMLMyWelcometextElement>;
        }
    }
}
