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
var MyItalic = (function () {
    function MyItalic() {
        this.isItalic = false;
    }
    MyItalic.prototype.onMouseEnter = function () {
        console.log("Mouse enter");
        this.isItalic = true;
    };
    MyItalic.prototype.onMouseLeave = function () {
        this.isItalic = false;
    };
    return MyItalic;
}());
__decorate([
    core_1.HostBinding('class.italic'),
    __metadata("design:type", Boolean)
], MyItalic.prototype, "isItalic", void 0);
__decorate([
    core_1.HostListener('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MyItalic.prototype, "onMouseEnter", null);
__decorate([
    core_1.HostListener('mouseleave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MyItalic.prototype, "onMouseLeave", null);
MyItalic = __decorate([
    core_1.Directive({
        selector: '[myItalic]'
    }),
    __metadata("design:paramtypes", [])
], MyItalic);
exports.MyItalic = MyItalic;
//# sourceMappingURL=italic.directive.js.map