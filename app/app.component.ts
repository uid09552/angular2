import {Component} from "@angular/core";
import {UserService} from "./user/user.service";
import {IUserV0} from "./user/user.data";

@Component({
    selector: 'app',
    templateUrl: './app/app.component.html',
    styleUrls:['./app/app.component.css']
})
export class AppComponent {
    selectedUser: IUserV0;
    fontColor: string="red";
    username2: string="Username2 @Insert()"
    userList: IUserV0[];
    constructor (private userService: UserService){
        this.userList = this.userService.getUserList();
        console.log("App Component initialized");
        this.selectedUser=this.userService.getSelectedUser();
    }
    selected(event){
        console.log(event);
        this.selectedUser = event;
        this.userService.setSelectedUser(this.selectedUser);
    }
} 