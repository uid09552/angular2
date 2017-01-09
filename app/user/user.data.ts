export interface IUserV0{
    id:string,
    name:string
}

var userData: IUserV0[] = [{
    id:"me",
    name:"max"
},{
    id:"meto",
    name:"karo"
}]


export class UserDataService{
    getUserList():IUserV0[]{
        return userData;
    }
}