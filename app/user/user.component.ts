import {Component, Input, Output, EventEmitter} from "@angular/core";
import {IUserV0} from "./user.data";


@Component({
    selector: "user",
    styles:[`
       .hidemy {display:none}
        .img {margin:5px}
`],
    template:`
<header>{{name}}</header>
<section>
<p>
{{getStr()}}
</p>
<p>

{{getDescr() | slice : 0}}
</p>
<p>
{{getDescr() | reverse}}
</p>
<img [src]="ImgUrl" class="img" [style.float]="float" [class.hidemy]="hidden" [attr.aria-label]="label" />
<button (click)="onClick($event)" >Select</button>
<input [value]="inputerg"/>
<label>{{inputerg}}</label>
<label>User2{{user.id}}+{{user.name}}</label>
<label>{{username2}}</label>
</section>`
})
export class UserComponent{

    getDescr() {
        return "Bespiel Slice Text";
    }

    @Input('user')
    user: IUserV0;

    @Input("username2")
    username2: string;


    @Output()
    choice: EventEmitter<string> = new EventEmitter<string>();


    @Input('img')
    ImgUrl:string;
    @Input("username")
    inputerg:string="asdf";
    disabled:boolean = false;
    name:string="max sfasdfaf";
    label:string="Katzenbild";
    getStr():string{
        return "Beispiel geschachtelte componente, from function";
    }
    hidden:boolean=false;
    margin: number = 30;
    float: string="right";
    onClick(): void {
        alert("User Compoennte: Selected USer:"+this.user.name)
        console.log("onClick clicked");
        this.choice.emit();
    }
}