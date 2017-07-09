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
var forms_1 = require("@angular/forms");
var person_service_1 = require("../shared/person/person.service");
var PersonCardComponent = (function () {
    function PersonCardComponent(personService, fb) {
        this.personService = personService;
        this.fb = fb;
        this.name = '';
        this.rForm = fb.group({
            'name': [null, forms_1.Validators.required],
            'description': [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(30), forms_1.Validators.maxLength(500)])],
            'validate': ''
        });
    }
    PersonCardComponent.prototype.addPost = function (post) {
        this.description = post.description;
        this.name = post.name;
    };
    PersonCardComponent = __decorate([
        core_1.Component({
            selector: "eparhia-person-card",
            templateUrl: "App/person-card/person-card.component.html"
            //styleUrls: ["App/person-card/person-card.component.css"]
        }),
        __metadata("design:paramtypes", [person_service_1.PersonService, forms_1.FormBuilder])
    ], PersonCardComponent);
    return PersonCardComponent;
}());
exports.PersonCardComponent = PersonCardComponent;
//# sourceMappingURL=person-card.component.js.map