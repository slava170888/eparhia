import { Component } from '@angular/core';
import { Translation, LocaleService, TranslationService } from 'angular-l10n';


@Component({
    selector: 'my-app',
    //template: `<h1> {{ 'Hello' | translate:lang }} {{name}}</h1>`

    //<option value= "en" > EN < /option>
    //< option value= "ru" > RU < /option>

    template: ` <select class="form-control" (change)="onChange(localService, $event.target.value)" (ngModel)="localService.getCurrentLanguage">
                    <option *ngFor="let l of localService.getAvailableLanguages()" value="{{l}}"> {{ l | translate:lang }}</option>
                </select>

<h1> {{ 'Hello' | translate:lang }} {{name}}</h1>`
})

export class AppComponent extends Translation {

    public localService: LocaleService = null;
    name = 'Angular';

    constructor(public locale: LocaleService, public translation: TranslationService) {
        super(translation);

        this.localService = locale;

        this.locale.addConfiguration()
            .addLanguages(['en', 'ru'])
            .setCookieExpiration(30)
            .defineLanguage('en');

        this.locale.init();

        this.translation.addConfiguration()
            .addProvider('./assets/locale-');
        this.translation.init();
    }

    onChange(locale: LocaleService, newValue: string) {
        locale.setCurrentLanguage(newValue);
    }
}