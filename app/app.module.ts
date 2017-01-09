
import {} from '@angular/core';
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {UserModule} from "./user/user.module";
import {ItalicModule} from "./directives/italic.module";
import {HomeModule} from "./home/home.module";
import {routing} from "./app.routing";


@NgModule({
    imports:[BrowserModule,UserModule,ItalicModule,HomeModule, routing],
    declarations: [AppComponent],
    bootstrap:[AppComponent]
})
export class AppModule{

}