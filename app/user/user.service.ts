import {IUserV0, UserDataService} from "./user.data";
import {Injectable} from "@angular/core";

@Injectable()
export class UserService{

    constructor(private userDataService: UserDataService){

    }

    setSelectedUser(user:IUserV0):void{
        localStorage.setItem('selected',JSON.stringify(user));
    }

    getSelectedUser():IUserV0{
        return <IUserV0>JSON.parse(localStorage.getItem('selected'));
    }

    getUserList():IUserV0[]{
        return this.userDataService.getUserList();
    }

}