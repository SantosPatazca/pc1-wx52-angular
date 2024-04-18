import { Source } from "./source.entity";

export class Article {
    id: string;
    title: string;
    price: string;
    description: string;
    category : string;
    image: string;
    rating: string;
    source = new Source();
    constructor() {
        this.id = '';
        this.title ='';
        this.price = '';
        this.description = '';
        this.category = '';
        this.image = '';
        this.rating ='';
        this.source = new Source();
    }
}

