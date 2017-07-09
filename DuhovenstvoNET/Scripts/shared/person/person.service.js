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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/toPromise");
//import { IPersone } from '../interfaces';
var config_service_1 = require("../api_settings/config.service");
var PersonService = (function () {
    function PersonService(http, configService) {
        this.http = http;
        this.configService = configService;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this._baseUrl = '';
        this._baseUrl = configService.getApiURI();
    }
    PersonService.prototype.getPersons = function () {
        return this.http.get(this._baseUrl + 'person/getpersons/0')
            .map(function (res) {
            return res.json();
        })
            .catch(this.handleError);
    };
    PersonService.prototype.handleError = function (error) {
        var applicationError = error.headers.get('Application-Error');
        var serverError = error.json();
        var modelStateErrors = '';
        if (!serverError.type) {
            console.log(serverError);
            for (var key in serverError) {
                if (serverError[key])
                    modelStateErrors += serverError[key] + '\n';
            }
        }
        modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;
        return Observable_1.Observable.throw(applicationError || modelStateErrors || 'Server error');
    };
    PersonService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http,
            config_service_1.ConfigService])
    ], PersonService);
    return PersonService;
}());
exports.PersonService = PersonService;
//# sourceMappingURL=person.service.js.map