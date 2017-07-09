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
var angular_2_data_table_1 = require("angular-2-data-table");
var person_service_1 = require("../shared/person/person.service");
var PersonComponent = (function () {
    function PersonComponent(personService) {
        this.personService = personService;
        this.items = [];
        this.itemCount = 0;
        //this.itemResource = new DataTableResource(this.persons);
        //console.log('constructor');
        //this.itemResource.count().then(count => this.itemCount = count);
    }
    PersonComponent.prototype.reloadItems = function (params) {
        var _this = this;
        if (params == null) {
            params = this.params;
        }
        if (this.persons != null) {
            this.itemResource.query(params).then(function (items) { return _this.items = items; });
        }
        else {
            this.params = params;
        }
    };
    PersonComponent.prototype.rowClick = function (rowEvent) {
        console.log('Clicked: ' + rowEvent.row.item);
    };
    PersonComponent.prototype.rowDoubleClick = function (rowEvent) {
        alert('Double clicked: ' + rowEvent.row.item.persone);
    };
    PersonComponent.prototype.rowTooltip = function (item) {
        return item.jobTitle;
    };
    PersonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.personService.getPersons().subscribe(function (persons) {
            _this.persons = persons;
            _this.itemResource = new angular_2_data_table_1.DataTableResource(persons);
            _this.reloadItems(null);
            _this.itemResource.count().then(function (count) { return _this.itemCount = count; });
        }, function (error) {
            console.log('Failed to load persons.' + error);
        });
    };
    PersonComponent = __decorate([
        core_1.Component({
            selector: "eparhia-person",
            templateUrl: "App/person/person.component.html",
            styleUrls: ["App/person/person.component.css"]
        }),
        __metadata("design:paramtypes", [person_service_1.PersonService])
    ], PersonComponent);
    return PersonComponent;
}());
exports.PersonComponent = PersonComponent;
//# sourceMappingURL=person.component.js.map