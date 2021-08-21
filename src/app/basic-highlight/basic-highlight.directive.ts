import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]',
})
/* @Directive({
    selector: 'appBasicHighlight',
}) */

export class BasicHighlightDirective implements OnInit{
    
    /**We don't need to write anything in the constructor body. 
     * But in the list of arguements, we need to list a couple of args we want to get whenever an object of this class is created 
     * in order to get access to the HTML element on which our directive is placed on. */
    /** As Angular is responsible for a creating a object of this class, Angular can pass these args to us while the object creation process is going on.*/
    /** Here the type of the arguement is important. It has to be ElementRef */
    constructor(private elementObj: ElementRef) {}
    /** 
     * Now to use this data of type ElementRef everywhere in the BasicHighlightDirective class, we can use a Typescript shortcut by adding "private" in front of it. 
     * By which we can access this property every where in this file by saying this.propertyname
     *  Here : this.elementObj. 
     * You can use any name of your convinience.
     */

    ngOnInit(){
        this.elementObj.nativeElement.style.backgroundColor = 'green';
    }
}

/**
 * Like we discussed before regarding the good practices in Angular we need to follow while naming the file names or class names.
 * 
 * Here we named the file as basic-hightlight.directive.ts. 
 * 
 * To generalize it, fileName.theBuildingBlockname.ts
 * 
 * By this convention, it's very easy to say what's inside a file
 * For ex: server.component.ts--> It's a component file
 *          basic-highlight.directive.ts--> It's a directive file.
 * 
 * export is used as we will use this directive class outside of this file
 * 
 * Convention for ClassName: Concat the FileName and BuildingBlockName with camel-case convention.
 * Like the filename that includes the buildingblock name, the class name is also descriptive about the purpose of the file.
 */

/**
 * Like we discussed in components section. Until and Unless we mention any decorator, It's only a normal Javascript class. To make it a special class (like a component class or a directive class), we need to explicitly mention the corresponding decorator.
 * The decorator take some extra information that we call as metadata, to configure the directive.
 */ 

/**
 * Like when we create a new component, we need to inform Angular about it by registering it in declarations array of app.module.ts; we need to do the same for directives as well, 
 * so that we can use the selector of this directive everywhere application-wide. 
 */

/**
 * Now to do something on the html element on which we will place our custom directive, we need to access that first.
 * Angular does that for us. So Angular injects the HTML element on which we'll place our custom directive. The injected element is of type ElementRef(Angular Type), which holds a reference to that HTML element with all it's properties and methods.
 * 
 * Note: We have better ways of accessing the DOM. Accessing through ElementRef is not recommended. We'll discuss the other ways in next lessons.
 * 
 */

/**
 * Different ways of using a directive:
 * 
 * 1. Attribute Style Selector:
 * If in the @Directive() decorator you've used selector name wrapped with []; then while using it as an attribute in other files no need of wrap again with square brackets.
 * 
 * Syntax: 
 * In directive file:
 * @Directive({
    selector: '[appBasicHighlight]',
    })

    In HTML files:

    <p id="para-1" appBasicHightlight> Style me with directive </p>
    <button disabled appBasicHighlight> Style me with directive </p>

    In the above example, p element has an id attribute which expects a unique string value,
    button element has a disabled attribute which don't take any value.
    Simillarly appBasicHighlight is also an custom directive we made that we can use application-wide.
    
 * 2. Class Style Selector:
    In directive file:

    @Directive({
        selector: '.appBasicHighlight',
    })

    In HTML Files:
    <p class="appBasicHighlight"> Style me with directive </p>

 * 3. Component style selector:
    
    In directive file:

    @Directive({
        selector: 'appBasicHighlight',
    })

    In HTML Files:
    <appBasicHighlight> Style me with directive </appBasicHighlight>
 */