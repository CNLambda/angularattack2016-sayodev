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
var core_1 = require('@angular/core');
var SessionService = (function () {
    function SessionService() {
        this.storage_id = "aa_sayodev_storage";
        if (this.getRawObject() == null) {
            this.setRawObject({});
        }
    }
    SessionService.prototype.getRawObject = function () {
        return JSON.parse(localStorage.getItem(this.storage_id));
    };
    SessionService.prototype.setRawObject = function (data) {
        localStorage.setItem(this.storage_id, JSON.stringify(data));
    };
    SessionService.prototype.getValue = function (key) {
        return this.getRawObject()[key];
    };
    SessionService.prototype.setValue = function (key, val) {
        var obj = this.getRawObject();
        obj[key] = val;
        this.setRawObject(obj);
    };
    SessionService.prototype.getBoardUsername = function (boardId) {
        if (this.getValue(boardId) == null) {
            return null;
        }
        return this.getValue(boardId).username;
    };
    SessionService.prototype.setBoardUsername = function (boardId, username) {
        if (this.getValue(boardId) == null) {
            this.setValue(boardId, {});
        }
        var obj = this.getValue(boardId);
        obj["username"] = username;
        this.setValue(boardId, obj);
    };
    SessionService.prototype.clear = function () {
        this.setRawObject({});
    };
    SessionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SessionService);
    return SessionService;
}());
exports.SessionService = SessionService;
//# sourceMappingURL=session.service.js.map