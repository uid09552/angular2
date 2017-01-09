"use strict";
var userData = [{
        id: "me",
        name: "max"
    }, {
        id: "meto",
        name: "karo"
    }];
var UserDataService = (function () {
    function UserDataService() {
    }
    UserDataService.prototype.getUserList = function () {
        return userData;
    };
    return UserDataService;
}());
exports.UserDataService = UserDataService;
//# sourceMappingURL=user.data.js.map