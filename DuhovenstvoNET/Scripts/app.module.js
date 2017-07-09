"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core"); //Used for module component
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var animations_1 = require("@angular/platform-browser/animations");
var material_1 = require("@angular/material");
var angular_2_data_table_1 = require("angular-2-data-table");
var app_component_1 = require("./app.component");
var hello_component_1 = require("./hello/hello.component");
var person_component_1 = require("./person/person.component");
var person_card_component_1 = require("./person-card/person-card.component");
require("hammerjs");
//Importing my services
var person_service_1 = require("./shared/person/person.service");
var config_service_1 = require("./shared/api_settings/config.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                animations_1.BrowserAnimationsModule,
                angular_2_data_table_1.DataTableModule,
                material_1.MaterialModule
            ],
            declarations: [
                app_component_1.AppComponent,
                hello_component_1.HelloComponent,
                person_component_1.PersonComponent,
                person_card_component_1.PersonCardComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [
                person_service_1.PersonService,
                config_service_1.ConfigService
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map