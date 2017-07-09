import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonService } from '../shared/person/person.service';
import { Person } from '../shared/person/person';

@Component({
    selector: "eparhia-person-card",
    templateUrl: "App/person-card/person-card.component.html"
    //styleUrls: ["App/person-card/person-card.component.css"]
})
export class PersonCardComponent {

    rForm: FormGroup;
    post: any;
    description: string;
    name: string = '';

    constructor(private personService: PersonService, private fb: FormBuilder) {
        this.rForm = fb.group({
    'name': [null, Validators.required],
    'description': [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
    'validate' : ''
});
    }

    addPost(post) {
        this.description = post.description;
        this.name = post.name;
    }
}