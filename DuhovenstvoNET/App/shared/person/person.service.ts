import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Person } from "./person";

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

//import { IPersone } from '../interfaces';
import { ConfigService } from '../api_settings/config.service';

@Injectable()
export class PersonService {
    
   private headers = new Headers({'Content-Type': 'application/json'});

    _baseUrl: string = '';

    constructor(private http: Http,
        private configService: ConfigService) {
        this._baseUrl = configService.getApiURI();
    }

    getPersons(): Observable<Person[]> {
        return this.http.get(this._baseUrl + 'person/getpersons/0')
            .map((res: Response) => {
                return res.json();
            })
            .catch(this.handleError);
    }

    private handleError(error: any) {
        var applicationError = error.headers.get('Application-Error');
        var serverError = error.json();
        var modelStateErrors: string = '';

        if (!serverError.type) {
            console.log(serverError);
            for (var key in serverError) {
                if (serverError[key])
                    modelStateErrors += serverError[key] + '\n';
            }
        }

        modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;

        return Observable.throw(applicationError || modelStateErrors || 'Server error');
    }
}