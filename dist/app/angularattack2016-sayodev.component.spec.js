"use strict";
var testing_1 = require('@angular/core/testing');
var angularattack2016_sayodev_component_1 = require('../app/angularattack2016-sayodev.component');
testing_1.beforeEachProviders(function () { return [angularattack2016_sayodev_component_1.Angularattack2016SayodevAppComponent]; });
testing_1.describe('App: Angularattack2016Sayodev', function () {
    testing_1.it('should create the app', testing_1.inject([angularattack2016_sayodev_component_1.Angularattack2016SayodevAppComponent], function (app) {
        testing_1.expect(app).toBeTruthy();
    }));
    testing_1.it('should have as title \'angularattack2016-sayodev works!\'', testing_1.inject([angularattack2016_sayodev_component_1.Angularattack2016SayodevAppComponent], function (app) {
        testing_1.expect(app.title).toEqual('angularattack2016-sayodev works!');
    }));
});
//# sourceMappingURL=angularattack2016-sayodev.component.spec.js.map