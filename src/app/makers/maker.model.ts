import { CarModel } from "../models/car-model.model";

export class Maker{
    public name: string;
    public country: string;
    public models: CarModel[];

    constructor(name: string, country: string, models: CarModel[]){       
        this.name = name;
        this.country = country;
        this.models = models;
    }
}