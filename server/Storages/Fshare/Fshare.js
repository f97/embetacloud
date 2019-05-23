"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// var fshare = require("fshare");
var FILE = require("fs-extra");
var path = require("path");
var mime = require("mime");
var debug = require("debug")("eMCloud::Fshare");
var events_1 = require("events");
var Fshare = /** @class */ (function (_super) {
    __extends(Fshare, _super);
    function Fshare(credentials) {
        var _this = _super.call(this) || this;
        _this.stack = [];
        _this.stackProcessing = false;
        _this.creds = credentials;
        return _this;
    }
    Fshare.getURL = function () {
        return "/login/Fshare";
    };
    Fshare.callbackHandler = function (query, callback) {
        console.log('test login');

    };
    Fshare.prototype.uploadFile = function (readStream, totalSize, mime, filename, parent, callback) {
        console.log('test upload');

    };
    Fshare.prototype.makeDir = function (name, callback, parent) {
        console.log('test makeDir');
    };
    Fshare.prototype.uploadStack = function () {
        console.log('test uploadStack');
    };
    Fshare.prototype.uploadDir = function (folderPath, parent) {
        console.log('test upuploadDirload');
    };
    return Fshare;
}(events_1.EventEmitter));
exports.Fshare = Fshare;
