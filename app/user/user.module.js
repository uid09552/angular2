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
var user_component_1 = require("./user.component");
var common_1 = require("@angular/common");
var italic_module_1 = require("../directives/italic.module");
var user_service_1 = require("./user.service");
var user_data_1 = require("./user.data");
var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, italic_module_1.ItalicModule],
        declarations: [user_component_1.UserComponent],
        exports: [user_component_1.UserComponent],
        providers: [user_service_1.UserService, user_data_1.UserDataService]
    }),
    __metadata("design:paramtypes", [])
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map