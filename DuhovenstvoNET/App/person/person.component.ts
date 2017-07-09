import { Component, OnInit} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTableResource } from 'angular-2-data-table';
import { PersonService } from '../shared/person/person.service';
import { Person } from '../shared/person/person';

@Component({
    selector: "eparhia-person",
    templateUrl: "App/person/person.component.html",
    styleUrls: ["App/person/person.component.css"]
})
export class PersonComponent {

    persons: Person[]; 
    params: Object;  
    itemResource: DataTableResource<Person>;  

    items = []; 
    itemCount = 0;    

    constructor(private personService: PersonService) {
        //this.itemResource = new DataTableResource(this.persons);
        //console.log('constructor');
        //this.itemResource.count().then(count => this.itemCount = count);
    }

    reloadItems(params) {
        if (params == null) {
            params = this.params;            
        }

        if (this.persons != null) {
            this.itemResource.query(params).then(items => this.items = items);
        } 
        else {
            this.params = params;
        }
    }
    rowClick(rowEvent) {
        console.log('Clicked: ' + rowEvent.row.item);
    }
    rowDoubleClick(rowEvent) {
        alert('Double clicked: ' + rowEvent.row.item.persone);
    }
    rowTooltip(item) { 
        return item.jobTitle; 
    }

    ngOnInit() { 
        this.personService.getPersons().subscribe((persons:Person[]) => {
            this.persons = persons;
            this.itemResource = new DataTableResource(persons);
            this.reloadItems(null);
            this.itemResource.count().then(count => this.itemCount = count);
        },
        error => {
            console.log('Failed to load persons.'+error);
        });
    }

}