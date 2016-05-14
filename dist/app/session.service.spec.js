"use strict";
var testing_1 = require('@angular/core/testing');
var session_service_1 = require('./session.service');
testing_1.describe('Session Service', function () {
    testing_1.beforeEachProviders(function () { return [session_service_1.SessionService]; });
    testing_1.it('should ...', testing_1.inject([session_service_1.SessionService], function (service) {
        testing_1.expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=session.service.spec.js.map