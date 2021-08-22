import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input("") set appUnless(condition: boolean){
    if(!condition){
      this.myVcRef.createEmbeddedView(this.myTemplateRef);
      //If the condition is false then show that template in DOM
      // createEmbeddedView: Instantiates an embedded view and inserts it into this container.
    } else{
      //If the condition is true then remove that template from DOM
      this.myVcRef.clear()
      //clear: Destroys all views in this container.
    }
  }
  constructor(private myTemplateRef: TemplateRef<any>, private myVcRef: ViewContainerRef) {

  }

}

/**
 * Purpose of the directive. It will do the opposite of what a ngIf directive does.
 * We will receive the condition through property binding.
 */

/**
 * We have seen this syntax:  @Input("") appUnless
 * 
 * But this is something new:
 * 
 * @Input("") set appUnless(condition: boolean){
    if(!condition){

    } else{

    }
  }

 * We're binding the appUnless property from outside where we will pass this property.
  Whenever this property value changes we want to execute a method. Therefore we can use a setter with set keyword.

  By using set, it binds a setter method for the appUnless property..
  
  So whenever this appUnless property changes from outside, it's setter method will be executed where we will write our logic of showing or removing an element from or to the DOM.
  (As our goal is to implement a directive that does exactly the opposite of what a ngIf directive does.)

  condition is the arg that contains the value of the appUnless property that we pass from outside.

  As we discussed in last lecture, that each structural directive gets converted into ng-template at the end. We need to get access of that template to show or remove from DOM based on the condition.

  So here for a structural directive, we can get access to the template and also to container , inside which we want to show the template or 
  from which we want to remove the template.

  template we recieve by Angular while creating an object of this class is of TemplateRef type and
  container if of ViewContainerRef. That's where Angular marks the element in DOM(Check in DevTools)
*/
