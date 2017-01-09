"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var UserComponent = (function () {
    function UserComponent() {
        this.choice = new core_1.EventEmitter();
        this.inputerg = "asdf";
        this.disabled = false;
        this.name = "max sfasdfaf";
        this.label = "Katzenbild";
        this.hidden = false;
        this.margin = 30;
        this.float = "right";
    }
    UserComponent.prototype.getDescr = function () {
        return "Bespiel Slice Text";
    };
    UserComponent.prototype.getStr = function () {
        return "Beispiel geschachtelte componente, from function";
    };
    UserComponent.prototype.onClick = function () {
        alert("User Compoennte: Selected USer:" + this.user.name);
        console.log("onClick clicked");
        this.choice.emit();
    };
    return UserComponent;
}());
__decorate([
    core_1.Input('user'),
    __metadata("design:type", Object)
], UserComponent.prototype, "user", void 0);
__decorate([
    core_1.Input("username2"),
    __metadata("design:type", String)
], UserComponent.prototype, "username2", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], UserComponent.prototype, "choice", void 0);
__decorate([
    core_1.Input('img'),
    __metadata("design:type", String)
], UserComponent.prototype, "ImgUrl", void 0);
__decorate([
    core_1.Input("username"),
    __metadata("design:type", String)
], UserComponent.prototype, "inputerg", void 0);
UserComponent = __decorate([
    core_1.Component({
        selector: "user",
        styles: ["\n       .hidemy {display:none}\n        .img {margin:5px}\n"],
        template: "\n<header>{{name}}</header>\n<section>\n<p>\n{{getStr()}}\n</p>\n<p>\n\n{{getDescr() | slice : 0}}\n</p>\n<p>\n{{getDescr() | reverse}}\n</p>\n<img [src]=\"ImgUrl\" class=\"img\" [style.float]=\"float\" [class.hidemy]=\"hidden\" [attr.aria-label]=\"label\" />\n<button (click)=\"onClick($event)\" >Select</button>\n<input [value]=\"inputerg\"/>\n<label>{{inputerg}}</label>\n<label>User2{{user.id}}+{{user.name}}</label>\n<label>{{username2}}</label>\n</section>"
    }),
    __metadata("design:paramtypes", [])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map