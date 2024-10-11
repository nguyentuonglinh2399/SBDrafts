export class ProductDetail {
    thumbnails: string[];
    name: string;
    category: string;
    ratings: number;
    order: number;
    inStock: boolean;
    price: number;
    description: string;
    type: string;
    color: string;
    material: string;
    brand: string;

    constructor() {
        this.thumbnails = [];
        this.name = "";
        this.category = "";
        this.ratings = 0;
        this.order = 0;
        this.inStock = true;
        this.price = 0;
        this.description = "";
        this.type = "";
        this.color = "";
        this.material = "";
        this.brand = "";
    }
}