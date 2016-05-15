"use strict";
var testing_1 = require('@angular/core/testing');
var backend_service_1 = require('./backend.service');
testing_1.describe('Backend Service', function () {
    testing_1.beforeEachProviders(function () { return [backend_service_1.BackendService]; });
    testing_1.it('should ...', testing_1.inject([backend_service_1.BackendService], function (service) {
        testing_1.expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=backend.service.spec.js.map