import {Routes, RouterModule} from '@angular/router'
import {UserList} from "./user/userlist.component";
import {HomeComponent} from "./home/home.component"
import {ModuleWithProviders} from "@angular/core";
const appRoutes : Routes = [
    {path: 'list', component: UserList},
    {path: 'home', component: HomeComponent}
];

export var routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
