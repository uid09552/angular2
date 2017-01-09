

import {Directive, HostBinding, HostListener, Input} from "@angular/core";
@Directive(
    {
        selector: '[myItalic]'
    }
)
export class MyItalic {


    @HostBinding('class.italic') isItalic:boolean = false;

    @HostListener('mouseenter')
    onMouseEnter (){
        console.log("Mouse enter");
        this.isItalic = true;
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        this.isItalic = false;
    }
}