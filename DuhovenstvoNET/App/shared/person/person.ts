export class Person {
    public id: number;
    public id_PersonType: number;
    public persone: string;
    public famile: string;
    public entitu: string;
    public desiderate: string;
    public description: string;
    public congratulations: string;
    public writtenRequest: string;
    public city: string;
    public street: string;
    public postIndex: string;
    public pole2: string;
    public pole1: string;
    public oblast: string;
    public name: string;
    public name2: string;
    public dop: string;
    public foreghn: boolean;

    constructor(id, persone, famile) {
 
        this.id = id;
        this.persone = persone;
        this.famile = famile;
    }
}