import { ElementRef, HostListener, OnInit, Renderer2, HostBinding, Input } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  @HostBinding("style.backgroundColor") myBackgroundColor: string; 

  constructor(private myRenderer: Renderer2, private myElement: ElementRef) { }

  ngOnInit(){
    // this.myRenderer.setStyle(this.myElement.nativeElement, "background-color", "yellow");
    this.myBackgroundColor = this.defaultColor;
    // We moved this line from up beacuse we are accessing a property of this class (defaultColor)
    // And proerties are initialized and ready to use in ngOnInit lifecycle hook and any hooks that comes after this hook.
  }

  @HostListener('mouseenter') myMouserOver(eventData: Event){
    // this.myRenderer.setStyle(this.myElement.nativeElement, "background-color", "yellow");
    this.myBackgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') myMouserLeave(eventData: Event){
    // this.myRenderer.setStyle(this.myElement.nativeElement, "background-color", "transparent");
    this.myBackgroundColor = this.defaultColor;
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

/**
 * The usecase in which we should use directive is:
 * If we want to do something with a HTML element, by just mentioning a single word on it.
 * For ex: 
 * <p appBetterHighlight> Some Text </p>
 * 
 * Let say you want a directive that gives you a functionality:
 *  i.  Wherever you place this directive, it will turn the background color of that HTML element.
 *  ii. On hovering hover changed the background color to some other color.
 *  iii.On hovering out change the background color to again something else. 
 * 
 * So you just shipped 3 features and can add these 3 features on any HTML element if you want by just placing a single word on the HTML element you want.
 * 
 * Until now we knew how to use a directive to access and change properties of a HTML element. 
 * Let's see how we can add event listeners to directives.
 * 
 * If we add a mouseenter listener to this directive, and change the color on mouse enter.
 * all HTML elements on which this directive is placed on will react to the mouseenter event listener
 * 
 * We can add a event listener using @HostListener() decorator.
 * 
 * Syntax:
 * 
 * @HostListener("event_name") anyFunctionName(eventData){
 * }
 * 
 * anyFunctionName will be triggered whenever event_name is triggered.
 * 
 * event_name could be your custom events as well.
 */
 
/**
 * Another way of accessing and changing the DOM is through the @HostBinding() decorator.
 * This can be an alternative to @HostListeners() though there's nothing wrong with that syntax.
 * 
 * Syntax: 
 * @HostBinding("style.backgroundColor") myBackgroundColor: string;
 * 
 * It gets the HTML element on which the directive is placed on.
 * Every HTML element has a style property in it. So It gets the backgroundColor subproperty from styles object and binds it with myBackgroundColor variable.
 * 
 */

/**
 * Ofcourse now we have a reactive directive after adding event listeners to it, But the color values are hard coded. It would be great If we could pass it from outside where we use the directives.
 * We can do custom property binding in Angular. Custom event binding also works in Angular.
 * We can bind property like we do in components.
 */
