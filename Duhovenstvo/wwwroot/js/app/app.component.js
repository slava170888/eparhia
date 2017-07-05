"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var angular_l10n_1 = require("angular-l10n");
var AppComponent = (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent(locale, translation) {
        var _this = _super.call(this, translation) || this;
        _this.locale = locale;
        _this.translation = translation;
        _this.localService = null;
        _this.name = 'Angular';
        _this.localService = locale;
        _this.locale.addConfiguration()
            .addLanguages(['en', 'ru'])
            .setCookieExpiration(30)
            .defineLanguage('en');
        _this.locale.init();
        _this.translation.addConfiguration()
            .addProvider('./assets/locale-');
        _this.translation.init();
        return _this;
    }
    AppComponent.prototype.onChange = function (locale, newValue) {
        locale.setCurrentLanguage(newValue);
    };
    return AppComponent;
}(angular_l10n_1.Translation));
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        //template: `<h1> {{ 'Hello' | translate:lang }} {{name}}</h1>`
        //<option value= "en" > EN < /option>
        //< option value= "ru" > RU < /option>
        template: " <select class=\"form-control\" (change)=\"onChange(localService, $event.target.value)\" (ngModel)=\"localService.getCurrentLanguage\">\n                    <option *ngFor=\"let l of localService.getAvailableLanguages()\" value=\"{{l}}\"> {{ l | translate:lang }}</option>\n                </select>\n\n<h1> {{ 'Hello' | translate:lang }} {{name}}</h1>"
    }),
    __metadata("design:paramtypes", [angular_l10n_1.LocaleService, angular_l10n_1.TranslationService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map