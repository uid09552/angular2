import {Component} from "@angular/core";
import {UserComponent} from "./user.component";
@Component({
    selector: 'userlist',
    template: `
    <user *ngFor="let usr of userList" (choice)="selected(usr)"
            [img]="imgUrl" [username]="usr.name"
          [username2]="username2" [user]="usr" [ngClass]="{saveSelected: (selectedUser!=undefined && usr.name===selectedUser.name)}"
    myItalic
    ></user>

`
})

export class UserList{

}