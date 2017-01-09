import {NgModule} from "@angular/core";
import {MyItalic} from "./italic.directive";
import {ReversePipe} from "./reverse.pipe";
@NgModule(
    {
        declarations: [MyItalic, ReversePipe],
        exports: [MyItalic, ReversePipe]
    }
)

export class ItalicModule{}