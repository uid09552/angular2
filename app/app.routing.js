"use strict";
var router_1 = require("@angular/router");
var userlist_component_1 = require("./user/userlist.component");
var home_component_1 = require("./home/home.component");
var appRoutes = [
    { path: 'list', component: userlist_component_1.UserList },
    { path: 'home', component: home_component_1.HomeComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map