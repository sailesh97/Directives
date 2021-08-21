import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(private myRenderer: Renderer2, private myElement: ElementRef) { }
  ngOnInit(){
    this.myRenderer.setStyle(this.myElement.nativeElement, "background-color", "yellow");
  }
}

/**
 * In last lecture we have accessed the DOM and changed it's properties through elementRef which is not a good practice.
 * 
 * Why using ElementRef for accessing the DOM is not a good practice???
 * 
 * Because it's not like Angular is only used to make web apps that run in browser.
 * Angular can also render your templates without a DOM like in a smart watch or any other such device that do not have a DOM.
 * It could do this while using service workers. service workers are the environments where you might not have access to the DOM.
 * 
 * So If there's no DOM,  any such properties will also not be available.
 * 
 */

/**
 * So the purpose of better-highlight directive is to use good practices to acess and change styling of an element.
 * Like the arguement of ElementRef, we can tell angular to inject another arguement of type Renderer to the directive while creating an object of it and 
 * use that to access and change styling of any element.
 */

/**
 * The new arguement we expect here is of type: Renderer2. 
 * It comes with so many methods which are useful to work with DOM.
 * setStyle is useful for styling the element on which we'll place the directive
 * For that we need to access the HTML element. That we can acceess by our usual ways by injecting object of type ElementRef.
 */

/**
 * So basically, setStyle expects 
 * 1st Arg as the HTML element to which you want to style
 * 2nd Arg as the CSS Property Name
 * 3rd Arg as the value of the CSS Property mentioned
 * 4th Arg is optional, where you can mention any flag like !important to override this CSS with any other conflicting CSS styling used in application
 */