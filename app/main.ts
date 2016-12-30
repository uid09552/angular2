import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app.module";
console.log("Initialize angular2");

platformBrowserDynamic().bootstrapModule(AppModule);