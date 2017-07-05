import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TranslationModule} from 'angular-l10n';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [BrowserModule, HttpModule, TranslationModule.forRoot()],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }