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
var user_data_1 = require("./user.data");
var core_1 = require("@angular/core");
var UserService = (function () {
    function UserService(userDataService) {
        this.userDataService = userDataService;
    }
    UserService.prototype.setSelectedUser = function (user) {
        localStorage.setItem('selected', JSON.stringify(user));
    };
    UserService.prototype.getSelectedUser = function () {
        return JSON.parse(localStorage.getItem('selected'));
    };
    UserService.prototype.getUserList = function () {
        return this.userDataService.getUserList();
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [user_data_1.UserDataService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map